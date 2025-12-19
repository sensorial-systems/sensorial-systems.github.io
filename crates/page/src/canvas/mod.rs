use crate::theme::Theme;
use gpu::*;
use std::borrow::Cow;
use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::JsCast;
use wasm_bindgen::closure::Closure;
use web_component::prelude::*;
use wgpu::*;

pub struct CanvasComponent {}

impl FromProperties<NoProperties> for CanvasComponent {
    fn from_properties(_: NoProperties) -> Self {
        Self {}
    }
}

impl WebComponent for CanvasComponent {
    type Properties = NoProperties;

    fn render(mut component: Signal<Self>) -> Element {
        rsx! {
            canvas {
                id: "background-canvas",
                style: "width: 100%; height: 100%; display: block;",
                onmounted: move |evt| {
                    async move {
                         use dioxus::web::WebEventExt;
                         let element = evt.as_web_event();
                         if let Some(canvas) = element.dyn_ref::<web_sys::HtmlCanvasElement>() {
                              // We need to pass web_sys::Element to on_mount_with_element
                              component.write().on_mount_with_element(canvas.clone().into());
                         }
                    }
                }
            }
        }
    }

    fn on_mount_with_element(&mut self, element: web_sys::Element) {
        if let Ok(canvas) = element.dyn_into::<web_sys::HtmlCanvasElement>() {
            spawn(async move {
                let size = (canvas.client_width() as u32, canvas.client_height() as u32);

                // Use wgpu types directly, but apply gpu extension traits
                let instance = wgpu::Instance::new(&wgpu::InstanceDescriptor::default());
                let surface =
                    wgpu::Surface::new(&instance, wgpu::SurfaceTarget::Canvas(canvas.clone()))
                        .unwrap();

                let adapter = wgpu::Adapter::new(&instance, &surface).await.unwrap();

                let (device, queue) = wgpu::Device::new(
                    &adapter,
                    &wgpu::DeviceDescriptor::new()
                        .with_required_limits(wgpu::Limits::downlevel_webgl2_defaults()),
                )
                .await
                .unwrap();

                let shader = wgpu::ShaderModule::new(
                    &device,
                    wgpu::ShaderSource::Wgsl(Cow::Borrowed(include_str!("shader.wgsl"))),
                );

                let entries = &[BindGroupLayoutEntry::new(
                    0,
                    ShaderStages::FRAGMENT,
                    BindingType::buffer(BufferBindingType::Uniform, false, None),
                )];

                let bind_group_layout = BindGroupLayout::new(
                    &device,
                    &BindGroupLayoutDescriptor::new(entries).with_label(Some("bind_group_layout")),
                );

                let render_pipeline_layout = PipelineLayout::new(
                    &device,
                    &PipelineLayoutDescriptor::new().with_bind_group_layouts(&[&bind_group_layout]),
                );

                let swapchain_capabilities = surface.get_capabilities(&adapter);
                let swapchain_format = swapchain_capabilities.formats[0];

                let render_pipeline = RenderPipeline::new(
                    &device,
                    &RenderPipelineDescriptor::new(
                        VertexState::new(&shader, "vs_main"),
                        PrimitiveState::default(),
                    )
                    .with_layout(&render_pipeline_layout)
                    .with_fragment(Some(
                        FragmentState::new(&shader, "fs_main")
                            .with_targets(&[Some(swapchain_format.into())]),
                    )),
                );

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

                // Uniform buffer: [time, width, height, padding, r, g, b, padding]
                let mut uniform_data = [0.0f32; 8];
                let theme = Theme::default();
                uniform_data[4] = theme.primary_color.0 / 255.0;
                uniform_data[5] = theme.primary_color.1 / 255.0;
                uniform_data[6] = theme.primary_color.2 / 255.0;

                let time_buffer = Buffer::new(
                    &device,
                    &wgpu::util::BufferInitDescriptor::new(
                        &uniform_data,
                        BufferUsages::UNIFORM | BufferUsages::COPY_DST,
                    ),
                );

                let bind_group = BindGroup::new(
                    &device,
                    &BindGroupDescriptor::new(
                        &bind_group_layout,
                        &[BindGroupEntry::new(0, time_buffer.as_entire_binding())],
                    ),
                );

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

                    let data: &[u8] = bytemuck::cast_slice(&uniform_data);
                    queue.write_buffer(&time_buffer, 0, data);

                    let frame = match surface.get_current_texture() {
                        Ok(frame) => frame,
                        Err(_) => {
                            let new_size =
                                (canvas.client_width() as u32, canvas.client_height() as u32);
                            if new_size.0 != config.width || new_size.1 != config.height {
                                config.width = new_size.0;
                                config.height = new_size.1;
                                if config.width > 0 && config.height > 0 {
                                    surface.configure(&device, &config);
                                }
                            }

                            Self::request_animation_frame(f.borrow().as_ref().unwrap());
                            return;
                        }
                    };
                    let view = frame
                        .texture
                        .create_view(&wgpu::TextureViewDescriptor::default());

                    let mut encoder =
                        device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
                            label: Some("Render Encoder"),
                        });

                    {
                        let mut render_pass = RenderPass::new(
                            &mut encoder,
                            &RenderPassDescriptor::new().with_color_attachments(&[Some(
                                RenderPassColorAttachment::new(&view),
                            )]),
                        );

                        render_pass.set_pipeline(&render_pipeline);
                        render_pass.set_bind_group(0, &bind_group, &[]);
                        render_pass.draw(0..3, 0..1);
                    }

                    queue.submit(std::iter::once(encoder.finish()));
                    frame.present();

                    Self::request_animation_frame(f.borrow().as_ref().unwrap());
                }) as Box<dyn FnMut()>));

                Self::request_animation_frame(g.borrow().as_ref().unwrap());
            });
        }
    }
}

impl CanvasComponent {
    fn request_animation_frame(f: &Closure<dyn FnMut()>) {
        web_sys::window()
            .unwrap()
            .request_animation_frame(f.as_ref().unchecked_ref())
            .expect("should register `requestAnimationFrame` OK");
    }
}

expose_component!(CanvasComponent as WgpuCanvas);
