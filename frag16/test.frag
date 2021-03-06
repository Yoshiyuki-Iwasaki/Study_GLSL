#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0);

    vec2 pos = vec2(0.5) -st;
    float r = length(pos)*-3.0;
    float a = atan(pos.y,pos.x);

    float f = cos(a*10.);

    color = vec3(1.-smoothstep(f, f+0.02,r));

    gl_FragColor= vec4(color, 1);
}