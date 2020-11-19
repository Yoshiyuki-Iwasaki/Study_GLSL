#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float pct = 0.0;
    pct = distance(st, vec2(0.5));

    vec3 color = vec3(pct);
    gl_FragColor = vec4(color,1);
}