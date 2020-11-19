precision mediump float;
uniform float t;// time
uniform vec2 r;// resolution

void main(void){
    vec2 p=(gl_FragCoord.xy*2.-r)/min(r.x,r.y);
    vec2 q=p+vec2(cos(3.*t*gl_FragCoord.x),sin(t*gl_FragCoord.y))*.05*tan(t*gl_FragCoord.x);
    float l=.01/(abs(length(q)-.5*cos(t*gl_FragCoord.x)));

    gl_FragColor=vec4(vec3(l),1.);
}