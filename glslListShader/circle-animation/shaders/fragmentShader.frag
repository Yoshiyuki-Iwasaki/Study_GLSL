// #pragma glslify: random = require(glsl-random)

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 resolution;
uniform float time;

float circle(in vec2 _st){
    vec2 dist=_st-vec2(.5);
    return 1.-smoothstep(.9-(.9*.01),
    .9+(.9*.01),
    dot(dist,dist)*4.);
}

void main(void){
    // vec2 st = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    vec2 st=gl_FragCoord.xy/resolution.xy;
    float x=2.*st.y+tan(time*.1*5.);
    float distort=sin(time*10.)*.1*sin(5.*x)*(-(x-1.)*(x-1.)+1.);
    
    // 座標を歪ませる
    st.x+=distort;
    
    st.x+=sin(st.y*20.)*.05;
    gl_FragColor=vec4(circle(st-vec2(0.,distort)*.3),
    circle(st+vec2(0.,distort)*.3),
    circle(st+vec2(distort,0.)*.3),
1.);
}