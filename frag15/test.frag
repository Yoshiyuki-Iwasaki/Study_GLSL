#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    gl_FragColor = vec4(st.y,0,st.x,1);
}