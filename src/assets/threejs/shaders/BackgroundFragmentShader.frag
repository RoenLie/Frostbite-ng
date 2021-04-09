varying vec2 vUv;
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float audio1;
uniform float adj;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform float orbOpacity;
uniform float intensity;

#define R(p, a) p = p * cos(a) + vec2(-p.y, p.x) * sin(a)
#define time iTime*0.1 
#define tau 6.2831853

mat2 makem2(in float theta){float c = cos(theta);float s = sin(theta);return mat2(c,-s,s,c);}
float noise( in vec2 x ){return texture2D(iChannel0, x*.01).x;}
mat2 m2 = mat2( .80,  0.80, -0.80,  0.80 );

float grid(vec2 p)
{
  float s = sin(p.x)*cos(p.y);
  return s;
}

float flow(in vec2 p)
{
  float z=4.;
  float rz = 0.;
  vec2 bp = p;
  for (float i= 1.;i < 8.;i++ )
  {
    bp += time*1.5;
    vec2 gr = vec2(grid(p*3.-time*2.),grid(p*3.+4.-time))*0.4;
    gr = normalize(gr)*0.4;
    gr *= makem2((p.x+p.y)*.3+time*10.);
    p += gr*0.2;
    
    rz+= (sin(noise(p)*2.)*0.5+0.5) /z;
    
    p = mix(bp,p,.5);
    z *= 1.5;
    p *= 2.5;
    p*=m2;
    bp *= 2.5;
    bp*=m2;
  }
  return rz;  
}

float spiral(vec2 p,float scl) 
{
  float r = length(p);
  r = log(r);
  float a = atan(p.y, p.y);
  return abs(mod(scl*(r-2./scl*a),tau)-1.)*1.;
}


float Sin01(float t) {
    return .5 + 0.5 * sin(6.28319 * t );
}

float SineEggCarton(vec3 p) {
    return .1 + abs(sin(p.x) - cos(p.y) + sin(p.z)) * 1.2* orbOpacity;
}

float Map(vec3 p, float scale) {
    float dSphere = length(p) - 1.0;
    return max(dSphere, (.85 - SineEggCarton(scale * p)) / scale) ;
}

vec3 GetColor(vec3 p) {
    float amount = clamp((1.5 - length(p)) / 2.0, 0.0, 1.0);
    vec3 col = 0.5 + 0.5 * cos(6.28319 * (vec3(0.2, 0.0, 0.0) + amount * (audio1*.6) * vec3(1.0, .9, 0.8)));
    return col * amount * (orbOpacity);
}

void main() {
  vec2 coord = gl_FragCoord.xy;
  coord.x-=(iMouse.x*.003);
  coord.y+=(iMouse.y*.003);

  
  vec2 p = coord / iResolution.xy-0.5;
  p.x *= iResolution.x/iResolution.y;
  p*= .5  ;
  p.y+=.8 ;
  float rz = flow(p) ;
  p /= exp(mod(2.1,2.1));
  rz *= (3.-spiral(p,.5))*.6 * audio1 ; // intensity / thickness of ring
  vec3 col = vec3(.02,0.04,0.09)/rz; // colors
  col=pow(abs(col),vec3(1.01)) - (abs((iMouse.x ))*.00005);
  gl_FragColor+= vec4(col,1.0);


  vec3 rd = normalize(vec3(2.0 * coord - iResolution.xy, -iResolution.y));

    vec3 ro = vec3(-iMouse.x*.0002, iMouse.y*.0002 , -1.4*(1.0-orbOpacity) -.5 +mix(2.5, 2.0, adj + Sin01( (0.05 ) * iTime))) ;
    R(rd.xz, 0.2 * iTime);
    R(ro.xz, 0.2 * iTime);
    R(rd.yz, 0.1 * iTime);
    R(ro.yz, 0.1 * iTime);
    float t = 0.0;
   // gl_FragColor.rgb = vec3(0.0);
    float scale = mix(1.5, 24.0*(orbOpacity*orbOpacity), Sin01(0.3 * iTime*(.01)));
    for (int i = 0; i < 80; i++) {
        vec3 p = ro + t * rd ; // //(orbOpacity) is more solid lines
        float d = Map(p, scale);
        if (t > 80.0 || d < 0.0001) {
            break;
        }
        t += 0.8 * d ;
        gl_FragColor.rgb += (0.05 * GetColor(p) * (audio1*.6)) * orbOpacity;
        gl_FragColor.r-=(abs((iMouse.x ))*.00005);
        //float total = (gl_FragColor.r+gl_FragColor.g+gl_FragColor.b) / 3.0;
        //gl_FragColor.rgb = vec3(total,total,total);
    }
}