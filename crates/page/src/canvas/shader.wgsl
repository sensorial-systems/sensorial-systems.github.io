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

struct Uniforms {
    time: f32,
    width: f32,
    height: f32,
    _pad0: f32,
    primary_color: vec3<f32>,
    _pad1: f32,
};

@group(0) @binding(0)
var<uniform> uniforms: Uniforms;

fn sdSphere(p: vec3<f32>, s: f32) -> f32 {
    return length(p) - s;
}

fn sdCylinder(p: vec3<f32>, h: vec2<f32>) -> f32 {
    let d = abs(vec2<f32>(length(p.xz), p.y)) - h;
    return min(max(d.x, d.y), 0.0) + length(max(d, vec2<f32>(0.0)));
}

// Infinite cylinder along an axis
fn sdInfCylinder(p: vec2<f32>, r: f32) -> f32 {
    return length(p) - r;
}

fn opRep(p: vec3<f32>, c: vec3<f32>) -> vec3<f32> {
    return (p % c) - 0.5 * c;
}

fn map(pos: vec3<f32>) -> f32 {
    let spacing = 4.0;
    // Modulo arithmetic for infinite repetition
    // We need a stable modulo that handles negative numbers correctly for space
    let c = vec3<f32>(spacing);
    let q = (pos % c + c) % c - 0.5 * c;

    // Radius of spheres
    let r_sphere = 0.35;
    // Radius of connecting cylinders
    let r_cyl = 0.12;

    var d = sdSphere(q, r_sphere);
    
    // Cylinders connecting the spheres
    // Cylinder along X axis (distance depends on YZ)
    d = min(d, sdInfCylinder(q.yz, r_cyl));
    // Cylinder along Y axis (distance depends on XZ)
    d = min(d, sdInfCylinder(q.xz, r_cyl));
    // Cylinder along Z axis (distance depends on XY)
    d = min(d, sdInfCylinder(q.xy, r_cyl));

    return d;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let time = uniforms.time;
    let resolution = vec2<f32>(uniforms.width, uniforms.height);
    
    // Normalized pixel coordinates (from 0 to 1)
    // Adjust UV to -1.0 to 1.0 and correct aspect ratio
    var uv = in.uv * 2.0 - 1.0;
    uv.x = uv.x * (resolution.x / resolution.y);

    // Camera setup
    // Move camera continuously along a diagonal
    let speed = 2.0;
    let ro = vec3<f32>(time * speed, 0.0, 0.0);
    
    // Ray direction
    let camTarget = ro + vec3<f32>(0.0, 0.0, 1.0); // Look forward relative to movement? 
    // Actually just simple forward looking camera is enough, but since we move diagonally,
    // let's just align camera axis.
    // For simple infinite lattice, fixed orientation is fine.
    
    // Basic camera matrix approximation
    // let camForward = normalize(vec3<f32>(1.0, 0.5, 1.0)); // Look in movement direction
    // let camRight = normalize(cross(vec3<f32>(0.0, 1.0, 0.0), camForward));
    // let camUp = cross(camForward, camRight);
    let camForward = vec3<f32>(0.0, 0.0, 1.0);
    let camRight = vec3<f32>(1.0, 0.0, 0.0);
    let camUp = vec3<f32>(0.0, 1.0, 0.0);

    let rd = normalize(uv.x * camRight + uv.y * camUp + camForward);

    // Ray marching constants
    let MAX_STEPS = 100;
    let MAX_DIST = 100.0;
    let SURF_DIST = 0.001;

    var t = 0.0;
    var hit = false;

    for (var i = 0; i < MAX_STEPS; i++) {
        let p = ro + rd * t;
        let d = map(p);

        if d < SURF_DIST {
            hit = true;
            break;
        }

        t += d;
        if t > MAX_DIST {
            break;
        }
    }

    let col_bg = uniforms.primary_color;
    let col_net = vec3<f32>(0.0, 0.0, 0.0);

    var final_color = col_bg;
    if hit {
        // Optional: Add some simple shading/fog to make 3D more apparent?
        // User requested "network should be black".
        // Pure black might look flat. Let's stick to pure black for now.
        // We can mix with background based on distance for fog effect.
        // Fog makes it look deeper.

        let fog_density = 0.02;
        let fog_offset = 5.0;
        let fog_amount = 1.0 - exp(-max(0.0, t - fog_offset) * fog_density);
        final_color = mix(col_net, col_bg, clamp(fog_amount, 0.0, 1.0));
    }

    return vec4<f32>(final_color, 1.0);
}
