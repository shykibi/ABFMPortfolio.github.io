/*
*   THREE.JS SCENE RENDER - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import My3DScene from '../My3DScene.js';

export default class Renderer {
    constructor() {

        this.my3DScene = new My3DScene();
        this.scene = this.my3DScene.scene;
        this.canvas = this.my3DScene.canvas;
        this.camera = this.my3DScene.camera;

        this.setRenderer();

    }

    setRenderer() {

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        });

        // this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.LinearEncoding;
        // this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setPixelRatio(window.devicePixelRatio); 

    }

    resize() {

        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setPixelRatio(window.devicePixelRatio); 

    }

    update() {

        this.renderer.render(this.scene, this.camera);

    }
}