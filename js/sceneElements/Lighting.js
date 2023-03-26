/*
*   THREE.JS SCENE ILUMINATION - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import My3DScene from '../My3DScene.js';

export default class Lighting{

    constructor(){

        this.my3DScene = new My3DScene();
        
        this.lights = [];
        this.createLights();
    }

    createLights(){

        // ambientlight
        this.createAmbientLights();
        this.ambientLights.forEach(light => {
            this.lights.push(light);
            this.my3DScene.scene.add(light);
        });
    

        // directionalLight
        this.createDirectionalLights();
        this.directionalLights.forEach(light => {
            this.lights.push(light);
            this.my3DScene.scene.add(light);
        });
    

        // spotlight
        this.createSpotLights();
        this.spotLights.forEach(light => {
            this.lights.push(light);
            this.my3DScene.scene.add(light);
        });
                
        // // hemispherelight
        // this.createHemisphereLights();
        // this.hemisphereLights.forEach(light => {
        //     this.lights.push(light);
        //     this.my3DScene.scene.add(light);
        // });

    }

    createAmbientLights(){
        this.ambientLights = [];

        var ambientlight = new THREE.AmbientLight( 0xEA8FEA, 0.75);
        
        this.ambientLights.push(ambientlight);
        
    }

    createDirectionalLights(){

        this.directionalLights = [];

        var directionalLight = new THREE.DirectionalLight( 0x39B5E0, 0.25);
        directionalLight.castShadow = true;
        directionalLight.shadow.camera.far = 20;
        directionalLight.shadow.mapSize.set(1024, 1024);
        directionalLight.shadow.normalBias = 0.0;
        directionalLight.position.set(0.5, 0.7, 0.5);
        
        this.directionalLights.push( directionalLight );

        directionalLight = new THREE.DirectionalLight( 0xA31ACB, 0.25);
        directionalLight.castShadow = true;
        directionalLight.shadow.camera.far = 20;
        directionalLight.shadow.mapSize.set(1024, 1024);
        directionalLight.shadow.normalBias = 0.0;
        directionalLight.position.set(-0.25, 0.75, -0.25);
        
        this.directionalLights.push( directionalLight );

    }

    createSpotLights(){

        this.spotLights = [];

        var spotlight = new THREE.SpotLight(0xFF78F0, 0.25);
        spotlight.position.set(-10, 10, 10);
        
        this.spotLights.push(spotlight);
    
        spotlight = new THREE.SpotLight(0xA31ACB, 0.25);
        spotlight.position.set(10, 10, -10);
        
        this.spotLights.push(spotlight);
    
        spotlight = new THREE.SpotLight(0xFC7300, 0.25);
        spotlight.position.set(-10, 10, -10);
        
        this.spotLights.push(spotlight);
    
        spotlight = new THREE.SpotLight(0xF7C04A, 0.25);
        spotlight.position.set(10, 10, 10);
                
        this.spotLights.push(spotlight);
    }

    createHemisphereLights(){

        this.hemisphereLights = [];

        var hemispherelight = new THREE.HemisphereLight( 0xFFAACF, 0xF6E6C2, 0.15);
        this.hemisphereLights.push( hemispherelight );
    }
    
}