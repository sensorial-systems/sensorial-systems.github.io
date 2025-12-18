use dioxus::prelude::*;
use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen::closure::Closure; // Fixed Closure import
use wgpu::util::DeviceExt;
use std::borrow::Cow; // Added Cow

#[component]
pub fn WgpuCanvas() -> Element {
    let mut canvas_ref = use_signal(|| None::<web_sys::HtmlCanvasElement>);

    use_effect(move || {
        if let Some(canvas) = canvas_ref() {
            spawn(async move {
                start_wgpu(canvas).await;
            });
        }
    });

    rsx! {
        canvas {
            id: "background-canvas",
            style: "width: 100%; height: 100%; display: block;",
            onmounted: move |evt| {
                async move {
                     use dioxus::web::WebEventExt;
                     let element = evt.as_web_event(); 
                     if let Some(canvas) = element.dyn_ref::<web_sys::HtmlCanvasElement>() {
                          canvas_ref.set(Some(canvas.clone()));
                     }
                }
            }
        }
    }
}

async fn start_wgpu(canvas: web_sys::HtmlCanvasElement) {
    let size = (canvas.client_width() as u32, canvas.client_height() as u32);
    
    let instance = wgpu::Instance::default();
    // Fixed create_surface
    let surface = instance.create_surface(wgpu::SurfaceTarget::Canvas(canvas.clone())).unwrap();
    
    let adapter = instance
        .request_adapter(&wgpu::RequestAdapterOptions {
            power_preference: wgpu::PowerPreference::None, // Fixed PowerPreference
            compatible_surface: Some(&surface),
            force_fallback_adapter: false,
        })
        .await
        .unwrap();

    let (device, queue) = adapter
        .request_device(
            &wgpu::DeviceDescriptor {
                label: None,
                required_features: wgpu::Features::empty(),
                required_limits: wgpu::Limits::downlevel_webgl2_defaults(),
            },
            None,
        )
        .await
        .unwrap();

    // Fixed shader loading
    let shader = device.create_shader_module(wgpu::ShaderModuleDescriptor {
        label: Some("Shader"),
        source: wgpu::ShaderSource::Wgsl(Cow::Borrowed(include_str!("shader.wgsl"))),
    });

    let bind_group_layout = device.create_bind_group_layout(&wgpu::BindGroupLayoutDescriptor {
        entries: &[wgpu::BindGroupLayoutEntry {
            binding: 0,
            visibility: wgpu::ShaderStages::FRAGMENT,
            ty: wgpu::BindingType::Buffer {
                ty: wgpu::BufferBindingType::Uniform,
                has_dynamic_offset: false,
                min_binding_size: None,
            },
            count: None,
        }],
        label: Some("bind_group_layout"),
    });

    let render_pipeline_layout = device.create_pipeline_layout(&wgpu::PipelineLayoutDescriptor {
        label: Some("Render Pipeline Layout"),
        bind_group_layouts: &[&bind_group_layout],
        push_constant_ranges: &[],
    });

    let swapchain_capabilities = surface.get_capabilities(&adapter);
    let swapchain_format = swapchain_capabilities.formats[0];

    let render_pipeline = device.create_render_pipeline(&wgpu::RenderPipelineDescriptor {
        label: Some("Render Pipeline"),
        layout: Some(&render_pipeline_layout),
        vertex: wgpu::VertexState {
            module: &shader,
            entry_point: "vs_main",
            buffers: &[],
        },
        fragment: Some(wgpu::FragmentState {
            module: &shader,
            entry_point: "fs_main",
            targets: &[Some(wgpu::ColorTargetState {
                format: swapchain_format,
                blend: Some(wgpu::BlendState::REPLACE),
                write_mask: wgpu::ColorWrites::ALL,
            })],
        }),
        primitive: wgpu::PrimitiveState::default(),
        depth_stencil: None,
        multisample: wgpu::MultisampleState::default(),
        multiview: None,
    });

    let mut config = wgpu::SurfaceConfiguration {
        usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
        format: swapchain_format,
        width: size.0,
        height: size.1,
        present_mode: wgpu::PresentMode::Fifo,
        alpha_mode: swapchain_capabilities.alpha_modes[0],
        view_formats: vec![],
        desired_maximum_frame_latency: 2,
    };
    surface.configure(&device, &config);

    // Time uniform buffer
    let mut uniform_data = [0.0f32; 4]; // Wrapped in array for 16-byte alignment
    let time_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
        label: Some("Time Buffer"),
        contents: bytemuck::cast_slice(&uniform_data),
        usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
    });

    let bind_group = device.create_bind_group(&wgpu::BindGroupDescriptor {
        layout: &bind_group_layout,
        entries: &[wgpu::BindGroupEntry {
            binding: 0,
            resource: time_buffer.as_entire_binding(), 
        }],
        label: Some("bind_group"),
    });

    // Render loop using requestAnimationFrame
    let f = Rc::new(RefCell::new(None));
    let g = f.clone();

    let start_time = web_sys::window().unwrap().performance().unwrap().now();

    *g.borrow_mut() = Some(Closure::wrap(Box::new(move || {
        let now = web_sys::window().unwrap().performance().unwrap().now();
        let current_width = canvas.client_width() as u32;
        let current_height = canvas.client_height() as u32;
        
        uniform_data[0] = ((now - start_time) / 1000.0) as f32;
        uniform_data[1] = current_width as f32;
        uniform_data[2] = current_height as f32;

        queue.write_buffer(&time_buffer, 0, bytemuck::cast_slice(&uniform_data));

        let frame = match surface.get_current_texture() {
            Ok(frame) => frame,
            Err(_) => {
                let new_size = (canvas.client_width() as u32, canvas.client_height() as u32);
                if new_size.0 != config.width || new_size.1 != config.height {
                    config.width = new_size.0;
                    config.height = new_size.1;
                    if config.width > 0 && config.height > 0 {
                        surface.configure(&device, &config);
                    }
                }
                
                request_animation_frame(f.borrow().as_ref().unwrap());
                return;
            }
        };
        let view = frame
            .texture
            .create_view(&wgpu::TextureViewDescriptor::default());

        let mut encoder = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("Render Encoder"),
        });

        {
            let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                label: Some("Render Pass"),
                color_attachments: &[Some(wgpu::RenderPassColorAttachment {
                    view: &view,
                    resolve_target: None,
                    ops: wgpu::Operations {
                        load: wgpu::LoadOp::Clear(wgpu::Color {
                            r: 0.1,
                            g: 0.2,
                            b: 0.3,
                            a: 1.0,
                        }),
                        store: wgpu::StoreOp::Store,
                    },
                })],
                depth_stencil_attachment: None,
                occlusion_query_set: None,
                timestamp_writes: None,
            });

            render_pass.set_pipeline(&render_pipeline);
            render_pass.set_bind_group(0, &bind_group, &[]);
            render_pass.draw(0..3, 0..1);
        }

        queue.submit(std::iter::once(encoder.finish()));
        frame.present();

        request_animation_frame(f.borrow().as_ref().unwrap());
    }) as Box<dyn FnMut()>));

    request_animation_frame(g.borrow().as_ref().unwrap());
}

fn request_animation_frame(f: &Closure<dyn FnMut()>) {
    web_sys::window()
        .unwrap()
        .request_animation_frame(f.as_ref().unchecked_ref())
        .expect("should register `requestAnimationFrame` OK");
}
