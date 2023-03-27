/*
*   THREE.JS My3DScene - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import Lighting from './sceneElements/Lighting.js';
import Models from './sceneElements/Models.js';
import Renderer from './sceneElements/Renderer.js';
import PostProcessing from './sceneElements/PostProcessing.js';
import Camera from './sceneElements/Camera.js';
import Scene from './sceneElements/Scene.js';
import Controls from './sceneElements/Controls.js';
import Audio from './sceneElements/Audio.js';
import HTMLInteraction from './sceneTools/HTMLInteraction.js';
import SceneInText from './sceneTools/SceneInText.js';
import { TWEEN } from 'https://unpkg.com/three@0.126.1/examples/jsm/libs/tween.module.min'
// import Stats from 'https://unpkg.com/three@0.126.1/examples/jsm/libs/stats.module.js'        

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export default class My3DScene {

    static instance;
    constructor(canvas) {
        if (My3DScene.instance) {
            return My3DScene.instance;
        }
        My3DScene.instance = this;
        
        /*
        //#region WORK
        let suitcase,suitcasePapers;
        //#endregion 

        //#region DEGREE
        let pcDisplay,keyboard,mouseScene;
        //#endregion

        //#region MASTER
        let rabbit,vrVisor, gbaConsole;
        //#endregion 

        //#region ABOUT ME
        let cv;
        //#endregion 
        */
        
        this.doPostProcessing = true;
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //----------------------    SCENE INITIALIZATION    --------------------//

        // 1. create the scene            
        this.mainScene = new Scene();
        this.scene = this.mainScene.scene;
        this.canvas = this.mainScene.canvas;    //canvas to render scene            

        //----------------------     c a m e r a    --------------------//

        // 2. create camera and orbit camera
        this.mainCamera = new Camera();
        this.camera = this.mainCamera.camera;
        this.orbitControls = this.mainCamera.getOrbitControls();

        //----------------------    l i g h t s    --------------------//
        this.mainLights = new Lighting();

        //----------------------     a u d i o    --------------------//

        // create an audio listener and add it to the camera
        this.mainAudio = new Audio();
        this.clickSound = this.mainAudio.clickSound;
        this.hoverSound = this.mainAudio.hoverSound;
                       
        //----------------------    m o d e l s    --------------------//
        
        this.mainModels = new Models();
        this.floor = this.mainModels.floor; // floor
        this.cube = this.mainModels.cube; // box
        this.desktop = this.mainModels.desktop; // table     

        this.cameraControls = new Controls();
        this.cameraInitPos = this.mainCamera.cameraInitPos;

        //----------------------    r e n d e r    --------------------//

        // 3. create the scene renderer (viewport) and set it as child of the document body
        this.mainRenderer = new Renderer();
        this.renderer = this.mainRenderer.renderer;

        //----------------------     p o s t - p r o c e s s i n g    --------------------//
        this.mainComposer = new PostProcessing();

        //----------------------     p o s t - p r o c e s s i n g    --------------------//
        this.mainSceneInText = new SceneInText();

        //----------------------    FUNCTIONS AND EVENTS    --------------------//

        addEventListener( 'resize', this.onWindowResize.bind(this)); // window resize       
        addEventListener('mousemove', this.onMouseHover.bind(this)); // mouse hover      
        addEventListener( 'click', this.onMouseClick.bind(this), false ); // mouse click

        this.scrollY = window.scrollY;
                    
        // call animation loop
        this.animate();


        //----------------------     PORTFOLIO DATA    --------------------//
        
        this.htmlInteraction = new HTMLInteraction();

        this.oneMenuOpen = false;
        this.cvMenuOpen = false;
        this.expMenuOpen = false;
        this.careerMenuOpen = false;        
        this.masterMenuOpen = false;

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
    }

    onWindowResize() {

        this.mainCamera.resize();
        this.mainRenderer.resize();
        this.mainSceneInText.resize();
        this.render();
    }
    
    animate() {
    
        // cube animation
        this.animateCube();
    
        // update camera controls
        this.mainCamera.update();
    
        // update tween animations
        TWEEN.update();   
        
        // update text in scene
        this.mainSceneInText.update();
        
        // render scene
        this.render();
    
        // animation loop
        requestAnimationFrame(this.animate.bind(this));
    
    }
    
    render() {
    
        // render the scene
        if(this.doPostProcessing){
    
            this.mainComposer.update();
            return;
        }
        this.mainRenderer.update();
    }
    
    animateCube(){

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

    }
    
    onMouseHover(event) 
    {

        // normalize mouse position
        this.mouse.x = (event.clientX / innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / innerHeight) * 2 + 1;
    
        // find intersections: create a Ray with origin at the mouse position and direction into the scene (camera direction)
        this.raycaster.setFromCamera(this.mouse, this.camera);


        if(this.mainModels.lookingCV){
            
            this.scrollY = this.mouse.y;
            this.mainModels.scrollCV(this.scrollY);
        }

        // create an array containing all objects in the scene with which the ray intersects
        this.intersects = this.raycaster.intersectObjects(this.scene.children, true);
    
        if ( this.intersects.length == 0)
        {
            document.body.style.cursor = 'auto';
            this.mainSceneInText.hideTooltip();
            return;
        }

        // if there is one (or more) intersections                    
        var objectHovered = this.intersects[0].object;        
        var objectHoveredName = objectHovered.name;

        if(!this.oneMenuOpen){
            switch (objectHoveredName) {
                case 'gbc001':
                case 'vrVISOR002':     
                    document.body.style.cursor = 'pointer';                                             
                break;
        
                case 'pcDisplay002':      
                    document.body.style.cursor = 'pointer';                                                              
                break;
        
                case 'cv003':          
                    document.body.style.cursor = 'pointer';                                  
                break;
                
                case 'lowerSuitcase003':
                case 'upperSuitcase003':
                case 'hingeSuitcase003':
                    document.body.style.cursor = 'pointer';
                break;

                default:                
                    document.body.style.cursor = 'auto';
                break;
            }   
        }else{
            document.body.style.cursor = 'auto';
        }

        if(!this.mainModels.isOpen){
            return;
        }

        const toWorldPos = new THREE.Vector3();
        toWorldPos.setFromMatrixPosition(objectHovered.matrixWorld);          
        const finalPos = new THREE.Vector3(toWorldPos.x, toWorldPos.y+0.1, toWorldPos.z);   
        
        switch (objectHoveredName) {
            case 'Cloud002':

                this.mainSceneInText.showTooltip(finalPos, 'AWS training');
                break;
            case 'uiPath002':
                this.mainSceneInText.showTooltip(finalPos, 'Skills with UIPATH and own proposal for a Schaman automation project');
                break;
            case 'pegasus002':
                this.mainSceneInText.showTooltip(finalPos, 'PEGA training');
                break;
            case 'VodafoneBuilding001':   
                this.mainSceneInText.showTooltip(finalPos, '9 months as a trainee and 3 months on GRADUATE contract');                  
            break;
            default: 
                this.mainSceneInText.hideTooltip();
            break;
        }
        
    }
    
    onMouseClick(event) 
    {
        // the following line would stop any other event handler from firing
        // (such as the mouse's TrackballControls)
        // event.preventDefault();
    
        if ( this.intersects.length == 0 )
        {
            return;
        }
    
        // if there is one (or more) intersections                    
        var objectClicked = this.intersects[0].object;
        var objectClickedName = objectClicked.name;            


        switch (objectClickedName) {
            case 'plane':
                console.log("click on plane");
            break;
    
            case 'cube':
                console.log("click on box");
            break; 
    
            case 'gbc001':
            case 'vrVISOR002': 

            // const textureLoader = new THREE.TextureLoader();
            // const texture = textureLoader.load('./imgs/Undeafeatable.png');
            // const materialConImagen = new THREE.MeshBasicMaterial({ map: texture });
            // this.mainModels.models['gbc001'].material[1] = materialConImagen;

                this.openMenuMaster();                                             
            break;
    
            case 'pcDisplay002':      
                this.openMenuCareer();                                                              
            break;
    
            case 'cv003':          
                this.openMenuCV();                                     
            break;
            
            case 'lowerSuitcase003':
            case 'upperSuitcase003':
            case 'hingeSuitcase003':
                this.openMenuExperience();    
            break;

            default: // suitcase

                console.log("Clicked object: "+ objectClickedName);   
               
            break;
        }                               
    
    }
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    openMenuCareer(){   
        
        if(this.oneMenuOpen){
            return;
        }

        this.oneMenuOpen = true;
        this.careerMenuOpen = true;        

        const objectClicked = this.mainModels.models['pcDisplay002'];    
        this.htmlInteraction.showData(objectClicked, this.cameraInitPos, () => {
            var selectionMenu = document.querySelector('#pcSectionSelectionMenu');
            selectionMenu.style.display = 'block';
        });
        this.htmlInteraction.hideElements();
        
    }
    closeMenuCareer(){         
        
        this.htmlInteraction.showElements();
        this.closeSectionMenuCareer();
        this.htmlInteraction.hideData();
        var selectionMenu = document.querySelector('#pcSectionSelectionMenu');
        selectionMenu.style.display = 'none';
        
    }

    openMenuMaster(){   
        
        if(this.oneMenuOpen){
            return;
        }

        this.oneMenuOpen = true;        
        this.masterMenuOpen = true;
        
        const objectClicked = this.mainModels.models['gbc001'];  
        this.htmlInteraction.showData(objectClicked, this.cameraInitPos, () => {
            var selectionMenu = document.querySelector('#masterSection');
            selectionMenu.style.display = 'block';
        });
        this.htmlInteraction.hideElements();

        this.openSectionMenuMasterVideogames();
    }
    closeMenuMaster(){ 
        
        this.htmlInteraction.showElements();
        this.htmlInteraction.hideData(); 
        var selectionMenu = document.querySelector('#masterSection');
        selectionMenu.style.display = 'none';

        this.closeSectionMenuMasterVideogames();
        this.closeSectionMenuMasterVR();
        this.closeSectionMenuMasterCG();
        

    }

    openMenuExperience(){     
        
        if(this.oneMenuOpen && this.expMenuOpen){
            this.closeMenuExperience();
            return;
        }

        this.oneMenuOpen = true;
        this.expMenuOpen = true;
        
        var nobjectClicked = this.scene.getObjectByName('upperSuitcase003');
        this.htmlInteraction.showData(nobjectClicked, this.cameraInitPos);
        this.htmlInteraction.hideElements(); 
        this.mainModels.animateSuitCase(90);  
    }
    closeMenuExperience(){        
 
        this.oneMenuOpen = false;  

        this.htmlInteraction.showElements();

        var nobjectClicked = this.scene.getObjectByName('upperSuitcase003');
        this.htmlInteraction.hideData(); 
        this.mainModels.animateSuitCase(90);  

    }

    openMenuCV(){  
        
        if(this.oneMenuOpen && this.cvMenuOpen){
            this.closeMenuCV();
            return;
        }

        this.oneMenuOpen = true;
        this.cvMenuOpen = true;

        this.htmlInteraction.hideElements();

        const objectClicked = this.mainModels.models['cv003'];     
        this.mainModels.animateSelectedModel(objectClicked);
        this.mainAudio.playOneShot(this.clickSound);
        this.mainModels.moveObjectTowardsCamera(objectClicked); 
    }
    closeMenuCV(){     

        this.htmlInteraction.showElements();

        this.oneMenuOpen = false;  
        const objectClicked = this.mainModels.models['cv003'];   
        this.mainModels.moveObjectAwayFromCamera(objectClicked);

    }

    closeMenu(){

        if(this.careerMenuOpen){
            this.closeMenuCareer();
        }

        if(this.masterMenuOpen){
            this.closeMenuMaster();
        }

        if(this.expMenuOpen){
            this.closeMenuExperience();
        }

        if(this.cvMenuOpen){
            this.closeMenuCV();
        }
    }

    ////////////////////////////////////

    openSectionMenuCareer(){    

        var selectionMenu = document.querySelector('#pcSectionSelectionMenu');
        selectionMenu.style.display = 'none';

        var selectionMenu = document.querySelector('#pcSectionItem');
        selectionMenu.style.display = 'block';

    }
    closeSectionMenuCareer(){

        var selectionMenu = document.querySelector('#pcSectionSelectionMenu');
        selectionMenu.style.display = 'block';

        var selectionMenu = document.querySelector('#pcSectionItem');
        selectionMenu.style.display = 'none';
    }

    openSectionMenuMasterVideogames(){    

        this.closeSectionMenuMasterVR();
        this.closeSectionMenuMasterCG();

        var selectionMenu = document.querySelector('.myVideogames');
        selectionMenu.style.display = 'block';
    }
    closeSectionMenuMasterVideogames(){

        var selectionMenu = document.querySelector('.myVideogames');
        selectionMenu.style.display = 'none';
    }

    openSectionMenuMasterVR(){

        this.closeSectionMenuMasterVideogames();
        this.closeSectionMenuMasterCG();

        var selectionMenu = document.querySelector('#vrVisorSection');
        selectionMenu.style.display = 'block';        

    }
    closeSectionMenuMasterVR(){

        var selectionMenu = document.querySelector('#vrVisorSection');
        selectionMenu.style.display = 'none';
    }

    openSectionMenuMasterCG(){

        this.closeSectionMenuMasterVR();
        this.closeSectionMenuMasterVideogames();

        var selectionMenu = document.querySelector('#masterSectionGC');
        selectionMenu.style.display = 'block';

    }
    closeSectionMenuMasterCG(){
        var selectionMenu = document.querySelector('#masterSectionGC');
        selectionMenu.style.display = 'none';
    }

}