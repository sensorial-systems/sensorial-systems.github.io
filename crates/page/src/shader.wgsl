struct VertexOutput {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) uv: vec2<f32>,
};

@vertex
fn vs_main(
    @builtin(vertex_index) in_vertex_index: u32,
) -> VertexOutput {
    var out: VertexOutput;
    let x = f32(1 - i32(in_vertex_index)) * 0.5;
    let y = f32(i32(in_vertex_index & 1u) * 2 - 1) * 0.5;
    // Full screen triangle trick or just a quad
    // Let's do a simple quad with 6 vertices or a full screen triangle
    // Full screen triangle: (-1, -1), (3, -1), (-1, 3)
    let uv = vec2<f32>(f32((in_vertex_index << 1u) & 2u), f32(in_vertex_index & 2u));
    out.clip_position = vec4<f32>(uv * 2.0 - 1.0, 0.0, 1.0);
    out.clip_position.y = out.clip_position.y * -1.0;
    out.uv = uv;
    return out;
}

@group(0) @binding(0)
var<uniform> time_data: vec4<f32>;

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let time = time_data.x;
    // Simple gradient
    let r = 0.5 + 0.5 * cos(time + in.uv.xyx + vec3<f32>(0.0, 2.0, 4.0));
    // Darker background style
    let color = mix(vec3<f32>(0.05, 0.05, 0.1), r, 0.2);
    return vec4<f32>(color, 1.0);
}
