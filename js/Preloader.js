/*
*   THREE.JS SCENE PRELOADER - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import My3DScene from './My3DScene.js';

export default class Preloader{

    constructor(){

        document.addEventListener('DOMContentLoaded', () => {
            // Muestra el preloader
            this.showPreloader();
        
            // Carga la escena de three.js
            this.loadMy3dScene(() => {

                // Oculta el preloader cuando la escena se haya cargado
                this.hidePreloader();
            
                // Lanza un evento personalizado para indicar que la escena se ha cargado
                const loadMy3dSceneEvent = new Event('sceneIsLoaded');
                document.dispatchEvent(loadMy3dSceneEvent);
            });
        });

        document.addEventListener('sceneIsLoaded', () => {
            // do something
          });
              

    }

    loadMy3dScene(callback) {
        // Aquí puedes cargar la escena de three.js y llamar al callback cuando se haya cargado
        // original scene
        this.my3DScene = new My3DScene();  
        if(callback){
            callback();
        }
    }
    
    showPreloader() {
        // Muestra el preloader
        const preloaderElement = document.getElementById("preloader");
        preloaderElement.style.display = "flex";
      }
      
    hidePreloader() {

        setTimeout(function() {
            const preloaderElement = document.getElementById("preloader");
            preloaderElement.classList.add("fade-out");
            setTimeout(function() {
                preloaderElement.style.display = "none";
                preloaderElement.classList.remove("fade-out");

                
            }, 500);
        }, 500);
    }
      
       

}

