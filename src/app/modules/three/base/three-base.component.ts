import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit, OnChanges, AfterViewChecked, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { MeshBasicMaterial, Scene, TorusGeometry, Mesh, PointLight, PerspectiveCamera, WebGLRenderer, Clock, BoxGeometry, SphereGeometry } from 'three';
import * as dat from 'dat.gui'


@Component({
  selector: 'es-three',
  templateUrl: "./three-base.component.html",
  styleUrls: ["./three-base.component.scss"]
})
export class ThreeBaseComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas") canvasEl: ElementRef | any;
  host: Element;
  hostRect: ClientRect;
  renderer: WebGLRenderer;
  scene: Scene = new THREE.Scene();
  camera: PerspectiveCamera = new THREE.PerspectiveCamera();
  clock: Clock = new THREE.Clock();

  constructor(public elementRef: ElementRef<Element>, public rd: Renderer2) { }
  ngOnInit() { }
  ngAfterViewInit() {
    this.host = this.elementRef.nativeElement;
    this.syncHostRect();
    
    this.setupCamera();
    this.setupScene();
    this.setupRenderer();
  }

  setupCamera() {
    this.camera.position.set(0, 0, 2);
    this.camera.fov = 75;
    this.camera.aspect = this.hostRect.width / this.hostRect.height;
    this.camera.near = 0.1;
    this.camera.far = 100;

    this.scene.add(this.camera);
  }

  setupScene() { }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasEl.nativeElement,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(this.hostRect.width, this.hostRect.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  render() { }

  start() {
    // Perform render function
    this.render();

    // Render
    this.renderer.render(this.scene, this.camera)

    const _ = this.render.bind(this);

    // Call tick again on the next frame
    window.requestAnimationFrame(_);
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

  syncHostRect = () => this.hostRect = this.host.getBoundingClientRect();
}
