import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Scene, PerspectiveCamera, WebGLRenderer, Clock, AnimationMixer } from 'three';
import * as THREE from 'three';
import Stats from "three/examples/jsm/libs/stats.module";
import { GUI } from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

@Component( {
  selector: 'es-three',
  template: `
    <div class="stats" #stats></div>
    <canvas #canvas></canvas>
  `,
  styles: [ `
  :host {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    width: 100%;
  }

  .stats {
    width: 100%;
  }
  
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    outline: none;
  }`]
} )
export class ThreeFirstComponent implements OnInit, AfterViewInit {
  @ViewChild( "stats" ) statsEl: ElementRef;
  @ViewChild( "canvas" ) canvasEl: ElementRef;
  host: Element;
  stats: Stats;
  mixer: AnimationMixer;
  hostRect: ClientRect;
  renderer: WebGLRenderer;
  composer: EffectComposer;
  scene: Scene;
  camera: PerspectiveCamera;
  clock: Clock;
  params = {
    exposure: 1.4,
    bloomThreshold: 0,
    bloomStrength: 0.03,
    bloomRadius: 0
  };

  constructor ( public elementRef: ElementRef<Element>, public rd: Renderer2 ) { }

  ngOnInit() { }
  ngAfterViewInit() {
    this.host = this.elementRef.nativeElement;
    this.syncHostRect();

    this.stats = Stats();
    this.statsEl.nativeElement.appendChild( this.stats.dom );
    this.stats.domElement.style.position = "absolute";
    this.stats.domElement.style.right = "0px";
    this.stats.domElement.style.left = "auto";
    this.stats.domElement.style.visibility = "hidden";


    this.clock = new THREE.Clock();

    this.renderer = new THREE.WebGLRenderer( {
      canvas: this.canvasEl.nativeElement,
      antialias: true,
      alpha: true
    } );
    this.renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );
    this.renderer.setSize( this.hostRect.width, this.hostRect.height );
    this.renderer.toneMapping = THREE.ReinhardToneMapping;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera( 40, this.hostRect.width / this.hostRect.height, 1, 100 );
    this.camera.position.set( - 5, 2.5, - 3.5 );
    this.scene.add( this.camera );

    const controls = new OrbitControls( this.camera, this.renderer.domElement );
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minDistance = 1;
    controls.maxDistance = 10;

    this.scene.add( new THREE.AmbientLight( 0x404040 ) );

    const pointLight = new THREE.PointLight( 0xffffff, 1 );
    this.camera.add( pointLight );

    const renderScene = new RenderPass( this.scene, this.camera );

    const bloomPass = new UnrealBloomPass( new THREE.Vector2( this.hostRect.width, this.hostRect.height ), 1.5, 0.4, 0.85 );
    bloomPass.threshold = this.params.bloomThreshold;
    bloomPass.strength = this.params.bloomStrength;
    bloomPass.radius = this.params.bloomRadius;
    this.renderer.toneMappingExposure = Math.pow( this.params.exposure, 4.0 );

    this.composer = new EffectComposer( this.renderer );
    this.composer.addPass( renderScene );
    this.composer.addPass( bloomPass );

    new GLTFLoader().load( "assets/threejs/models/PrimaryIonDrive.glb", ( gltf ) => {
      const model = gltf.scene;

      this.scene.add( model );

      this.mixer = new THREE.AnimationMixer( model );

      const clip = gltf.animations[ 0 ];
      this.mixer.clipAction( clip.optimize() ).play();

      this.render();
    } );

    const gui = new GUI();
    this.statsEl.nativeElement.appendChild( gui.domElement );


    gui.domElement.style.position = "absolute";
    gui.domElement.style.zIndex = "999";
    gui.domElement.style.visibility = "hidden";

    gui.add( this.params, 'exposure', 0.1, 2 ).onChange( ( value ) => {
      this.renderer.toneMappingExposure = Math.pow( value, 4.0 );
    } );

    gui.add( this.params, 'bloomThreshold', 0.0, 1.0 ).onChange( ( value ) => {
      bloomPass.threshold = Number( value );
    } );

    gui.add( this.params, 'bloomStrength', 0.0, 3.0 ).onChange( ( value ) => {
      bloomPass.strength = Number( value );
    } );

    gui.add( this.params, 'bloomRadius', 0.0, 1.0 ).step( 0.01 ).onChange( ( value ) => {
      bloomPass.radius = Number( value );
    } );

    this.render();
  }

  render = () => {
    requestAnimationFrame( this.render );

    const delta = this.clock?.getDelta();
    this.mixer?.update( delta );
    this.stats?.update();
    this.composer?.render();
  };

  @HostListener( "window:resize", [ "$event" ] )
  resizeCanvas( event: Event ) {
    // Update the host rect sizes
    this.syncHostRect();

    // Update camera
    this.camera.aspect = this.hostRect.width / this.hostRect.height;
    this.camera.updateProjectionMatrix();

    // Update renderer
    this.renderer.setSize( this.hostRect.width, this.hostRect.height );
    // this.renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );

    // Update composer
    this.composer.setSize( this.hostRect.width, this.hostRect.height );
  }
  syncHostRect = () => this.hostRect = this.host.getBoundingClientRect();
}
