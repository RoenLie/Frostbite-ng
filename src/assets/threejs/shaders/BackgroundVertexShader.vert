varying vec2 vUv;
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float audio1;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
 
void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
}