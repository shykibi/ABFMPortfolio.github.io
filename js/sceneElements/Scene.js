/*
*   THREE.JS SCENE SETUP - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'

export default class Scene{

    constructor(){

        this.canvas = document.querySelector(".webgl");
        this.createScene()

    }

    createScene(){

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0x3F497F );
        this.scene.fog = new THREE.Fog( 0x3F497F, 200, 1000 );

    }


    resize() {



    }

    update() {


    }
    
}