/*
*   THREE.JS SCENE POST-PROCESSING - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import Renderer from './Renderer.js';
import { EffectComposer } from 'https://unpkg.com/three@0.118.0/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'https://unpkg.com/three@0.118.0/examples/jsm/postprocessing/RenderPass';
// import { UnrealBloomPass } from 'https://unpkg.com/three@0.118.0/examples/jsm/postprocessing/UnrealBloomPass';
import My3DScene from '../My3DScene.js';

export default class PostProcessing{

    constructor(){

        this.my3DScene = new My3DScene();

        this.scene = this.my3DScene.mainRenderer.scene;
        this.camera = this.my3DScene.mainRenderer.camera;
        this.renderer = this.my3DScene.mainRenderer.renderer;
        this.createComposer();

    }

    createComposer(){

        this.composer = new EffectComposer(this.renderer);
            
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        
        // const bloomRes = new THREE.Vector2(1024,1024);
        // const bloomStrength = 0.5;
        // const bloomRadius = 0.0;
        // const bloomThreshold = 0.9;
        // this.composer.addPass(new UnrealBloomPass(bloomRes, bloomStrength, bloomRadius, bloomThreshold));

    }
    
    update() {

        this.composer.render();

    }
}