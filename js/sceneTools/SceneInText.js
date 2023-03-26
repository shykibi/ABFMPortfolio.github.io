/*
*   THREE.JS SCENE INTEXT - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import { TWEEN } from 'https://unpkg.com/three@0.126.1/examples/jsm/libs/tween.module.min'
import {CSS2DRenderer, CSS2DObject} from 'https://unpkg.com/three@0.126.1/examples/jsm/renderers/CSS2DRenderer'
import My3DScene from '../My3DScene.js';

export default class Models {
  constructor() {
    
    this.my3DScene = new My3DScene();
    
    this.scene = this.my3DScene.scene;
    this.camera = this.my3DScene.camera;

    this.labelRenderer = new CSS2DRenderer();
    this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
    this.labelRenderer.domElement.style.position = 'absolute';
    this.labelRenderer.domElement.style.top = '0px';
    this.labelRenderer.domElement.style.pointerEvents = 'none';
    document.body.appendChild(this.labelRenderer.domElement);

    this.createTooltip();

  }

  createTooltip(){

    this.p = document.createElement('p');
    this.p.className = 'tooltip';
    this.p.textContent = 'Hello';
    this.div = document.createElement('div');
    this.div.appendChild(this.p);

    this.cPointLabel = new CSS2DObject(this.div);
    this.scene.add(this.cPointLabel);
        
  }

  showTooltip(position, content){
    this.p.className = 'tooltip show';
    this.cPointLabel.position.set(position.x, position.y, position.z);
    this.p.textContent = content;

  }

  hideTooltip(){
    this.p.className = 'tooltip hide';
  }

  resize(){
    this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
  }

  update(){
    this.labelRenderer.render(this.scene, this.camera);
  }

}