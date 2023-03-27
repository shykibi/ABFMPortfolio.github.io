/*
*   THREE.JS SCENE CONTROLS - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import { TWEEN } from 'https://unpkg.com/three@0.126.1/examples/jsm/libs/tween.module.min'
import My3DScene from '../My3DScene.js';

export default class Controls{

    constructor(){

        this.my3DScene = new My3DScene();
        this.camera = this.my3DScene.camera;
        this.orbitControls = this.my3DScene.orbitControls;
        this.endPoint = new THREE.Vector3(0.0,0.0,0.0);

    }

    setPath(origin, destination){

        // Crear la curva para el movimiento de la cámara
        this.curve = new THREE.LineCurve3(origin, destination);
        this.endPoint.set(destination.x, destination.y, destination.z);

    }

    animateCamera(isReset, callback){
        
        // Crear la animación con Tween.js
        const tween = new TWEEN.Tween({ t: 0 })
            .to({ t: 1 }, 1000) // Duración de 1000ms (1 segundo)
            .onUpdate(() => {
            const point = this.curve.getPoint(tween._object.t); // Obtener el punto en la curva correspondiente a la posición actual de la cámara
            this.camera.position.set(point.x, point.y, point.z); // Mover la cámara a ese punto                                
            // this.camera.lookAt(this.endPoint.x, this.endPoint.y, this.endPoint.z); // Hacer que la cámara mire hacia el punto de destino
            })
            .onComplete(() => {

                if(isReset){

                    this.my3DScene.oneMenuOpen = false;    
                    this.my3DScene.cvMenuOpen = false;
                    this.my3DScene.expMenuOpen = false;   
                    this.my3DScene.careerMenuOpen = false;        
                    this.my3DScene.masterMenuOpen = false;        
                }else{

                    if (typeof callback === 'function') {

                        callback();
                    }
                }

              }).start();

    }

    pushCameraTo(objectClicked, isMesh, cameraInitPos, callback){

        const cameraActualPos = this.camera.position.clone();
    
        if(!isMesh){
            
            // place camera where it was  
            this.setPath(cameraActualPos, cameraInitPos);
            this.animateCamera(true);
            this.my3DScene.mainCamera.resetOrbitControlsPosition();
            return;
        }
    
        // transform object to world position
        const toWorldPos = new THREE.Vector3();
        toWorldPos.setFromMatrixPosition(objectClicked.matrixWorld);
        
        // add offset to its position
        const offset = new THREE.Vector3(1.0,0.0,0.0);
        const sum = new THREE.Vector3();
        sum.addVectors(toWorldPos, offset);
    
        // create path and animate camera
        this.setPath(cameraActualPos, sum);
        this.animateCamera(false, callback); 
        this.orbitControls.target.set(toWorldPos.x, toWorldPos.y, toWorldPos.z);
        this.orbitControls.update();

        
    }
    
}