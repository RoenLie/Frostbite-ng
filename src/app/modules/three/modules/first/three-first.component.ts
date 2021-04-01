import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit, OnChanges, AfterViewChecked, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { MeshBasicMaterial, Scene, TorusGeometry, Mesh, PointLight, PerspectiveCamera, WebGLRenderer, Clock, BoxGeometry, SphereGeometry } from 'three';
import * as dat from 'dat.gui'
import { ThreeComponent } from "../portal/three.component";
import { ThreeBaseComponent } from '../../base/three-base.component';

@Component({
  selector: 'es-three-first',
  templateUrl: "../../base/three-base.component.html",
  styleUrls:["../../base/three-base.component.scss"]
})
export class ThreeFirstComponent extends ThreeBaseComponent implements OnInit, AfterViewInit {

  sphere: Mesh;

  constructor(public elementRef: ElementRef<Element>, public rd: Renderer2)
  { super(elementRef, rd); }

  ngOnInit() { }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    super.start();
  }

  render() {
    console.log("hei");
    
    
    // const elapsedTime = this.clock.getElapsedTime()


    // Update objects
    // this.sphere.rotation.y = 0.5 * elapsedTime;
  }

  setupScene() {
    const geometry = new THREE.SphereGeometry(1, 6, 6);
    const material = new THREE.MeshBasicMaterial({ color: "rgb(52,151,219)" });
    const sphere = new THREE.Mesh(geometry, material);
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(2, 3, 4);

    this.scene.add(sphere);
    this.scene.add(pointLight);
  }
}
