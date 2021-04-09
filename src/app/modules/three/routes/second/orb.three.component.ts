import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Scene, PerspectiveCamera, WebGLRenderer, LoadingManager, Mesh, PlaneGeometry } from 'three';
import * as THREE from 'three';
import Stats from "three/examples/jsm/libs/stats.module";


@Component( {
   selector: 'ro-orb-three',
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
export class OrbThreeComponent implements OnInit, AfterViewInit {
   @ViewChild( "stats" ) statsEl: ElementRef;
   @ViewChild( "canvas" ) canvasEl: ElementRef;
   host: Element;
   hostRect: ClientRect;
   camera: PerspectiveCamera;
   scene: Scene = new THREE.Scene();
   renderer: WebGLRenderer;
   stats: Stats;
   manager: LoadingManager = new THREE.LoadingManager();
   statsEnabled = false;
   textureInformation: any[] = [
      { "file": "assets/threejs/textures/tex1.png", "name": "tex1" },
      { "file": "assets/threejs/textures/sprite1.png", "name": "sprite1" },
      { "file": "assets/threejs/textures/sprite1.png", "name": "sprite2" }
   ];
   backgroundShader: {
      path: {
         fragment: "assets/threejs/shaders/BackgroundFragmentShader.frag",
         vertex: "assets/threejs/shaders/BackgroundVertexShader.vert";
      };
   };
   textures: any = {};
   mouse = new THREE.Vector2();
   clock = new THREE.Clock();
   backgroundPlane: Mesh;
   backgroundUniforms: any;
   intensity = 1.0;
   modelsLoaded: boolean;
   backgroundFragmentShader = "assets/threejs/shaders/BackgroundFragmentShader.frag";
   backgroundVertexShader = "assets/threejs/shaders/BackgroundVertexShader.vert";

   constructor ( public elementRef: ElementRef<Element>, public rd: Renderer2 ) { };
   ngOnInit() { }
   ngAfterViewInit() { this.init(); }

   loader = {
      show: () => { console.log( "show loader" ); },
      hide: () => { console.log( "hide loader" ); },
      update: ( value: any ) => {
         value = Math.round( value * 100 ) / 100;
         console.log( "loader progress: ", value * 100 + "%" );
      }
   };

   init() {
      this.host = this.elementRef.nativeElement;
      this.syncHostRect();

      // set up background scene
      this.camera = new THREE.PerspectiveCamera( 90, this.hostRect.width / this.hostRect.height, 1, 1000 );
      this.camera.position.set( 0, 0, 50 );

      // switch to false anatialis and transparent as needed
      this.renderer = new THREE.WebGLRenderer( { canvas: this.canvasEl.nativeElement, antialias: true, alpha: true } );
      this.renderer.setSize( this.hostRect.width, this.hostRect.height );
      this.renderer.debug.checkShaderErrors = false;

      // default camera target object
      const target = new THREE.Object3D();
      target.position.set( 0, 0, 0 );
      this.scene.add( target );

      // stats
      if ( this.statsEnabled ) {
         this.stats = Stats();
         this.statsEl.nativeElement.appendChild( this.stats.dom );
         this.stats.domElement.style.position = "absolute";
         this.stats.domElement.style.right = "0px";
         this.stats.domElement.style.left = "auto";
      }

      // loading manager
      this.manager.onProgress = ( item: string, loaded: number, total: number ) => {
         this.loader.update( loaded / total );
      };

      this.manager.onLoad = () => {
         // add objects to scene and set initial 3D states
         this.initObjects();

         // load background shader
         if ( !this.backgroundFragmentShader || !this.backgroundVertexShader ) return;

         this.shaderLoader( this.backgroundVertexShader, this.backgroundFragmentShader );
      };

      // load textures
      const loader = new THREE.TextureLoader( this.manager );
      this.textureInformation.forEach( ( t: any ) => {
         loader.load( t.file, ( object ) => {
            this.textures[ t.name ] = object;
         } );
      } );
   };

   initObjects() {
      console.log( "init webgl objects" );

      // ambient sprites
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const materials = [];
      const parameters = [
         [ [ 0.3, 0.7, 0.9 ], this.textures[ "sprite1" ], .3 ],
         [ [ 0.3, 0.3, 0.8 ], this.textures[ "sprite2" ], .3 ]
      ];

      for ( let i = 0; i < 350; i++ ) {
         const x = Math.random() * 60 - 30;
         const y = Math.random() * 60 - 30;
         const z = Math.random() * 60 - 30;
         vertices.push( x, y, z );
      }
      geometry.setAttribute( "position", new THREE.Float32BufferAttribute( vertices, 3 ) );

      for ( let i = 0; i < parameters.length; i++ ) {
         const color = parameters[ i ][ 0 ];
         const sprite = parameters[ i ][ 1 ];
         const size = parameters[ i ][ 2 ];
         materials[ i ] = new THREE.PointsMaterial( { size: size, map: sprite, blending: THREE.AdditiveBlending, depthTest: false, transparent: true, opacity: .35 } );
         materials[ i ].color.setRGB( color[ 0 ], color[ 1 ], color[ 2 ] );
         const particles = new THREE.Points( geometry, materials[ i ] );
         particles.rotation.x = Math.random() * 6;
         particles.rotation.y = Math.random() * 6;
         particles.rotation.z = Math.random() * 6;
         this.scene.add( particles );
      }

      // start animating
      this.render();
   }

   render = () => {
      const ready = this.scene
         && this.camera
         && this.backgroundUniforms;

      if ( !ready ) {
         requestAnimationFrame( this.render );
         return;
      }

      const delta = this.clock.getDelta();

      this.backgroundUniforms.iTime.value += delta;
      this.backgroundUniforms.audio1.value = 128.0 / 48.0 + Math.random() * .1;
      this.backgroundUniforms.iMouse.value = this.mouse;
      this.backgroundUniforms.intensity.value = this.intensity;

      for ( let i = 0; i < this.scene.children.length; i++ ) {
         const object = this.scene.children[ i ];
         const isInstanceOf = object instanceof THREE.Points;
         if ( !isInstanceOf ) continue;

         object.rotation.z = -.03 * this.backgroundUniforms.iTime.value * ( i < 4 ? i + 1 : - ( i + 1 ) );
      }

      const vector = new THREE.Vector3(
         ( -this.mouse.x * .01 - this.camera.position.x ) * .05,
         ( this.mouse.y * .01 - this.camera.position.y ) * .05,
         1
      );

      // this formula makes the lerp framerate independant
      const alpha = 1.0 - Math.pow( 0.001, delta );
      this.camera.position.lerp( vector, alpha );

      this.renderer.render( this.scene, this.camera );

      if ( this.statsEnabled ) { this.stats.update(); }

      requestAnimationFrame( this.render );
   };

   createBackgroundShader( vertex: any, fragment: any ) {
      console.log( "background shader loaded" );

      // create a bakgorund shader plane;
      this.backgroundUniforms = {
         iTime: { type: "f", value: 100.0 },
         iResolution: { type: "v2", value: new THREE.Vector2() },
         iMouse: { type: "v2", value: new THREE.Vector2() },
         audio1: { type: "f", value: 0.0 },
         adj: { type: "f", value: 0.0 },
         orbOpacity: { type: "f", value: 1.0 },
         intensity: { type: "f", value: 1.0 },
         iChannel0: { type: 't', value: this.textures[ 'tex1' ] }
      };
      this.backgroundUniforms.iResolution.value.x = this.hostRect.width;
      this.backgroundUniforms.iResolution.value.y = this.hostRect.height;

      this.backgroundUniforms.adj.value = .2 - this.hostRect.height / this.hostRect.width;

      // create custom shader material
      const material = new THREE.ShaderMaterial( {
         uniforms: this.backgroundUniforms,
         vertexShader: vertex,
         fragmentShader: fragment
      } );

      // create object mesh, set size so it fills screen
      // base this on resolution from above
      const aspect = this.hostRect.width / this.hostRect.height;

      const geometry = new PlaneGeometry( 1, 1 );
      this.backgroundPlane = new THREE.Mesh( geometry, material );
      this.backgroundPlane = new THREE.Mesh( geometry, material );
      this.backgroundPlane.scale.set( 110 * aspect, 110, 1 );

      this.scene.add( this.backgroundPlane );

      this.modelsLoaded = true;
   }

   @HostListener( "mousemove", [ "$event" ] )
   mouseMove( e: MouseEvent ) {
      this.mouse.x = ( e.clientX - this.hostRect.width / 2 );
      this.mouse.y = ( e.clientY - this.hostRect.height / 2 );
   }

   @HostListener( "window:resize", [ "$event" ] )
   resize( event?: Event ) {
      this.syncHostRect();
      const width = this.hostRect.width;
      const height = this.hostRect.height;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( width, height );
      this.backgroundPlane.scale.set( 110 * this.camera.aspect, 110, 1 );
      this.backgroundUniforms.iResolution.value.x = width;
      this.backgroundUniforms.iResolution.value.y = height;
      this.backgroundUniforms.adj.value = .2 - this.hostRect.height / this.hostRect.width;
   }

   shaderLoader( vertex_url: string, fragment_url: string, onLoad?: any, onProgress?: any, onError?: any ) {
      const vertex_loader = new THREE.FileLoader( THREE.DefaultLoadingManager );
      vertex_loader.setResponseType( 'text' );

      vertex_loader.load( vertex_url, ( vertex_text ) => {
         const fragment_loader = new THREE.FileLoader( THREE.DefaultLoadingManager );
         fragment_loader.setResponseType( 'text' );
         fragment_loader.load( fragment_url, ( fragment_text ) => {
            this.createBackgroundShader( vertex_text, fragment_text );
         } );
      }, onProgress, onError );
   }

   syncHostRect = () => this.hostRect = this.host.getBoundingClientRect();
}