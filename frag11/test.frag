#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;
void main(){
    vec2 p=gl_FragCoord.xy/resolution*2.-1.;
    float t=time*.5;
    gl_FragColor=vec4(vec2(sin(p.x*9.+t)*sin(p.y*9.+t)+sin(p.x*p.y*9.+t)>0.),0,1.);
}