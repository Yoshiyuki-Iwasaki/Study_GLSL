precision highp float;
varying vec2 uv;
uniform sampler2D t;
void main(){
	mat3 rgb2yuv=mat3(
		.2126,.7152,.0722,
		-.114572,-.385428,.5,
		.5,-.454153,-.045847
	);
	mat3 yuv2rgb=mat3(
		1.,0.,1.5748,
		1.,-.187324,-.468124,
		1.,1.8556,0.
	);
	vec3 rgb=texture2D(t,uv).rgb;
	vec3 yuv=rgb*rgb2yuv;

	yuv.x=yuv.x<.3?.3:yuv.x<.5?.5:1.;
}