/*
*   THREE.JS SCENE CAMERA - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls'
import My3DScene from '../My3DScene.js';

export default class Camera{

    constructor(canvas){

        this.my3DScene = new My3DScene();
        this.canvas = this.my3DScene.canvas;
        this.createPerspectiveCamera();
        this.setOrbitControls();

    }

    getOrbitControls(){
        return this.orbitControls;
    }

    createPerspectiveCamera(){

        const fov = 75;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 1000;
        this.camera = new THREE.PerspectiveCamera( fov, aspect, near, far );                    
        this.camera.position.set( 4.0, 2.5, 0.0 );

        this.cameraInitPos = this.camera.position.clone(); 

    }

    setOrbitControls() {

        this.orbitControls = new OrbitControls(this.camera, this.canvas)
        this.orbitControls.enableZoom = false;
        this.orbitControls.maxAzimuthAngle = Math.PI;
        this.orbitControls.minAzimuthAngle = -Math.PI * 2;
        this.orbitControls.maxPolarAngle = Math.PI / 2;
        this.orbitControls.enableDamping = true;
        this.orbitControls.dampingFactor = 0.1;
        this.orbitControls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: null,
            RIGHT: null
        };
        
        this.resetOrbitControlsPosition();
        this.orbitControls.update();

    }

    resetOrbitControlsPosition(){
        this.orbitControls.target.set(0, 1, 0);
    }

    resize() {

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

    }

    update() {

        this.orbitControls.update();

    }
    
}