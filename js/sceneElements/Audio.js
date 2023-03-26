/*
*   THREE.JS SCENE AUDIO - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import My3DScene from '../My3DScene.js';

export default class Audio {
    constructor() {
      
        this.my3DScene = new My3DScene();
        
        this.listener = new THREE.AudioListener();
        this.my3DScene.camera.add(this.listener);
        
        // create an audio loader to load audio files
        this.audioLoader = new THREE.AudioLoader();
        
        this.clickSound = new THREE.Audio(this.listener);
        this.loadAudio(this.clickSound, 'Audio/click.ogg', 0.4, false);
        
        this.hoverSound = new THREE.Audio(this.listener);
        this.loadAudio(this.hoverSound, 'Audio/hover.ogg', 0.4, false);
           
    }

    loadAudio(audio, path, volume, setLoop) {

        this.audioLoader.load( path,function(buffer){
            audio.setBuffer(buffer);
            audio.setLoop(setLoop);
            audio.setVolume(volume);
        });
    
    }

    playOneShot(sound){
        sound.play();
    }
  
  }