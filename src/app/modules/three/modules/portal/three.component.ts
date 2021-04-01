import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit, OnChanges, AfterViewChecked, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { MeshBasicMaterial, Scene, TorusGeometry, Mesh, PointLight, PerspectiveCamera, WebGLRenderer, Clock, BoxGeometry, SphereGeometry } from 'three';
import * as dat from 'dat.gui'


@Component({
  selector: 'es-three',
  template: `<canvas #canvas></canvas>`,
  styles: [`
  :host {
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
  }
  
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    outline: none;
  }`]
})
export class ThreeComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas") canvasEl: ElementRef | any;
  host: Element;
  hostRect: ClientRect;
  renderer: WebGLRenderer;
  scene: Scene;
  geometry: SphereGeometry;
  material: MeshBasicMaterial;
  sphere: Mesh;
  pointLight: PointLight;
  camera: PerspectiveCamera;
  clock: Clock;

  constructor(public elementRef: ElementRef<Element>, public rd: Renderer2) { }
  ngOnInit() { }
  ngAfterViewInit() {
    this.host = this.elementRef.nativeElement;
    this.syncHostRect();
    
    // Initiate clock
    this.clock = new THREE.Clock();

    // Initiate geometry
    // this.geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
    // this.geometry = new THREE.BoxGeometry(.5, .5, .5);
    this.geometry = new THREE.SphereGeometry(1, 6, 6);

    // Initiate material
    this.material = new THREE.MeshBasicMaterial({ color: "rgb(52,151,219)" });

    // Initiate mesh
    this.sphere = new THREE.Mesh(this.geometry, this.material);

    // Initiate light source
    this.pointLight = new THREE.PointLight(0xffffff, 0.1);
    this.pointLight.position.set(2, 3, 4);

    // Initiate camera
    this.camera = new THREE.PerspectiveCamera(
      75, this.hostRect.width / this.hostRect.height, 0.1, 100);
    this.camera.position.set(0, 0, 2);

    // Create the scene
    this.scene = new THREE.Scene();
    this.scene.add(this.sphere);
    this.scene.add(this.pointLight);
    this.scene.add(this.camera);

    // Attach the renderer to the canvas and set initial dimensions
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasEl.nativeElement,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(this.hostRect.width, this.hostRect.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Initiate the animation cycle
    this.tick();
  }

  tick = () => {
    const elapsedTime = this.clock.getElapsedTime()

    // Update objects
    this.sphere.rotation.y = 0.5 * elapsedTime;
    // this.sphere.rotation.x = 1.5 * elapsedTime;

    // Update Orbital Controls
    // controls.update()

    // Render
    this.renderer.render(this.scene, this.camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(this.tick)
  }

  @HostListener("window:resize", ["$event"])
  resizeCanvas(event: Event) {
    // Update the host rect sizes
    this.syncHostRect();

    // Update camera
    this.camera.aspect = this.hostRect.width / this.hostRect.height;
    this.camera.updateProjectionMatrix()

    // Update renderer
    this.renderer.setSize(this.hostRect.width, this.hostRect.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  syncHostRect() {
    this.hostRect = this.host.getBoundingClientRect();
  }
}
