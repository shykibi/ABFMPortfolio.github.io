/*
*   THREE.JS SCENE HTML-INTERACTION - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import PortfolioData from './PortfolioData.js';
import My3DScene from '../My3DScene.js';

export default class HTMLInteraction{

    constructor(){

        this.my3DScene = new My3DScene();
        this.portfolioData = new PortfolioData();

        // Obtener elementos por su clase
        this.navbarOptionGroups = document.querySelectorAll('.navbarOptionGropup');
        this.navbarOptionClose = document.querySelector('.navbarOptionClose');
        this.navbarOptionClose.style.display = 'none';

            // Agregar evento a cada elemento de navbarOptionGroup
            this.navbarOptionGroups.forEach(group => {
                group.addEventListener('click', () => {
                  this.hideElements();
                });
              });
              
              // Agregar evento a navbarOptionClose
              this.navbarOptionClose.addEventListener('click', () => {
                this.showElements();
                this.my3DScene.closeMenu();
              });
              

    }

    showData(objectClicked, cameraInitPos, callback){         
            
        this.my3DScene.mainModels.animateSelectedModel(objectClicked);
        this.my3DScene.mainAudio.playOneShot(this.my3DScene.clickSound);
        this.my3DScene.cameraControls.pushCameraTo(objectClicked, true, cameraInitPos, callback);
        
    }

    hideData(){
        
        this.my3DScene.cameraControls.pushCameraTo(this.my3DScene.cameraInitPos, false, this.my3DScene.cameraInitPos);     
    }
    


    // Función para ocultar elementos
    hideElements() {
        this.navbarOptionGroups.forEach(group => group.style.display = 'none');
        this.navbarOptionClose.style.display = 'block';
    }

    // Función para mostrar elementos
    showElements() {
        this.navbarOptionGroups.forEach(group => group.style.display = 'block');
        this.navbarOptionClose.style.display = 'none';
    }


    
}

