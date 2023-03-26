/*
*   THREE.JS SCENE MODELS - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import * as THREE from 'three'
import { FBXLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/FBXLoader'
import { TWEEN } from 'https://unpkg.com/three@0.126.1/examples/jsm/libs/tween.module.min'
import My3DScene from '../My3DScene.js';

export default class Models {
  constructor() {
    
    this.my3DScene = new My3DScene();

    this.models = {};

    // floor
    this.floor = this.createPlane(2000, 0x86A3B8);
    this.floor.position.set(0.0,-3.0,0.0);
    this.floor.rotation.x = - Math.PI / 2;
    this.floor.receiveShadow = true;
    this.my3DScene.scene.add(this.floor);

    this.models['floor'] = this.floor;

    // box
    this.cube = this.createCube(0.5, 0x00ff00);
    this.cube.position.set(-2,1.5,-2.5);
    this.cube.castShadow = true;
    this.cube.receiveShadow = true;
    this.my3DScene.scene.add( this.cube );
    this.models['cube'] = this.cube;

    // desktop
    const path = './models/portfolioRoom.fbx';
    const modelData = this.importFbxModel(path, this.my3DScene.scene, this.models);

    modelData.then(([objects, childModels, suitCaseModels]) => {

      // add objects to list
      this.desktop = objects;
    
      // add childmodels to dictionary    
      Object.assign(this.models, childModels); 
      this.myCV = this.models['cv003'];     
      this.initialCV = this.myCV.clone();

      // suitCaseModels
      this.suitCaseModels = suitCaseModels;
    
    });

    this.isOpen = false;
    this.lookingCV = false;   
    this.posYCV = 205;     
    this.posXCV = 374;
    this.setpXCV = 4;

  }

  importFbxModel(path, scene, models){
    return new Promise((resolve, reject) => {
      let childModels = {};
      let suitCaseModels = [];
      const fbxLoader = new FBXLoader();
      fbxLoader.load(path, function(object) {
        object.scale.set(0.01, 0.01, 0.01);

        object.children.forEach((child) => {
          child.castShadow = true;
          child.receiveShadow = true;
          childModels[child.name] = child;

          // hide suitcase props
          if(child.name.includes('Cloud') || child.name.includes('uiPath') || child.name.includes('pegasus')
            || child.name.includes('VodafoneBuilding')){
              child.visible = false;
              suitCaseModels.push(child);
          }

          if (child instanceof THREE.Group) {
            child.children.forEach((groupChild) => {
              groupChild.castShadow = true;
              groupChild.receiveShadow = true;
            });
          }
        });
        scene.add(object);        
        const objectsInModel = [object];
        resolve([objectsInModel, childModels, suitCaseModels]);
      });
    });
  }

  createPlane(size, color){

      const material = new THREE.MeshPhongMaterial( { 
          color: color,
          side: THREE.DoubleSide
          } );
      const plane = new THREE.Mesh( new THREE.PlaneGeometry( size, size ), material);
      return plane;

  }

  createCube(size, color){

      const material = new THREE.MeshPhongMaterial( { color: color } );
      const cube = new THREE.Mesh( new THREE.BoxGeometry( size, size, size), material );
      return cube;

  }

  animateSelectedModel(objectClicked){
        
    const scale = new THREE.Vector3(objectClicked.scale.x, objectClicked.scale.y, objectClicked.scale.z); 
    new TWEEN.Tween(objectClicked.scale)
          .to(
              {
                  x: scale.x * 1.1,
                  y: scale.y * 1.1,
                  z:scale.z *  1.1,
              },
              150
          )
          .easing(TWEEN.Easing.Back.In)
          .start()
          .onComplete(() => {
              new TWEEN.Tween(objectClicked.scale)
              .to(
              {
                  x: scale.x,
                  y: scale.y,
                  z:scale.z,
              },
              150
              )
              .easing(TWEEN.Easing.Back.Out)
              .start()
    });        
  }

  animateSuitCase(grad){

    const hingejoint = this.models['hingeSuitcase003'];

    if(this.isOpen){
      
      hingejoint.rotation.setFromVector3(new THREE.Vector3(-1.570796388639078, 1.2175161490102226e-8, 0.6108670234680196)); //originalRot
      
      // hide suitcase props
      this.hideSuitCaseProps();


    }else{
      
      hingejoint.rotation.setFromVector3(new THREE.Vector3(-0.5707963886390776, 5.400000012175159, 1.1108670234680196));  //openRot

      // Show suitcase props
      this.showSuitCaseProps();

    }
    
    this.isOpen = !this.isOpen;
             
  }

  showSuitCaseProps(){

    const suitCaseProps = ['Cloud002', 'uiPath002', 'pegasus002', 'VodafoneBuilding001'];

    suitCaseProps.forEach(prop => {
      const model = this.models[prop];
      model.visible = true;
    });

  }

  hideSuitCaseProps(){

    const suitCaseProps = ['Cloud002', 'uiPath002', 'pegasus002', 'VodafoneBuilding001'];

    suitCaseProps.forEach(prop => {
      const model = this.models[prop];
      model.visible = false;
    });

  }

  moveObjectTowardsCamera(object) {  
    
    // Crear la curva para el movimiento de la cámara
    const cameraActualPos = this.my3DScene.camera.position.clone();
    const curve = new THREE.LineCurve3(cameraActualPos, this.my3DScene.cameraInitPos);
    const endPoint = this.my3DScene.cameraInitPos;

    // Crear la animación con Tween.js
    const tween = new TWEEN.Tween({ t: 0 })
        .to({ t: 1 }, 1000) // Duración de 1000ms (1 segundo)
        .onUpdate(() => {
          const point = curve.getPoint(tween._object.t); // Obtener el punto en la curva correspondiente a la posición actual de la cámara
          this.my3DScene.camera.position.set(point.x, point.y, point.z); // Mover la cámara a ese punto                                
          // this.camera.lookAt(this.endPoint.x, this.endPoint.y, this.endPoint.z); // Hacer que la cámara mire hacia el punto de destino
        })
        .onComplete(() => {
          
          this.my3DScene.mainCamera.resetOrbitControlsPosition();
          
          // definir la posición y rotación de la cámara
          const localCamera = object.worldToLocal(this.my3DScene.camera.position.clone());
          const cameraRot = this.my3DScene.camera.rotation.clone();
          
          const anim1 = new TWEEN.Tween(object.position)
          .to({
            x: localCamera.x,
            y: localCamera.y,
            z: localCamera.z
          }, 1000)
          .onComplete(() => {
            object.lookAt(localCamera);
            const anim2 = new TWEEN.Tween(object.rotation)
              .to({
                x: THREE.MathUtils.degToRad(90),
                y: THREE.MathUtils.degToRad(195)
              }, 0)
              .onComplete(() => {
                const anim3 = new TWEEN.Tween(object.position)
                  .to({
                    x: localCamera.x - 510,
                    y: localCamera.y + 205,
                    z: localCamera.z + 5
                  }, 500)
                  .onComplete(() =>{
                    this.my3DScene.orbitControls.enabled = false;
                    this.lookingCV = true;
                  }).start();                 

              })
              .start();
          }).start();
        })
        .start(); // Iniciar la animación    

  }

  moveObjectAwayFromCamera(object) {

    const cameraActualPos = this.my3DScene.camera.position.clone();
    const curve = new THREE.LineCurve3(this.my3DScene.cameraInitPos, cameraActualPos);
    const endPoint = cameraActualPos;

    const tween = new TWEEN.Tween({ t: 0 })
        .to({ t: 1 }, 0) 
        .onUpdate(() => {
          const point = curve.getPoint(tween._object.t); 
          this.my3DScene.camera.position.set(point.x, point.y, point.z); 

        })
        .onComplete(() => {

          this.my3DScene.mainCamera.resetOrbitControlsPosition();

          const localCamera = object.worldToLocal(this.my3DScene.camera.position.clone());
          const cameraRot = this.my3DScene.camera.rotation.clone();

          const anim1 = new TWEEN.Tween(object.position)
            .to({
              x: this.initialCV.position.x,
              y: this.initialCV.position.y,
              z: this.initialCV.position.z
            }, 350)
            .onComplete(() => {
              const lookAtVector = new THREE.Vector3();              
              object.lookAt(this.initialCV.getWorldDirection(lookAtVector));

                  object.copy(this.initialCV);
                  this.my3DScene.orbitControls.enabled = true;
                  this.lookingCV = false;              
            }).start();
        })
        .start(); 
}

  scrollCV(delta){

    var newLocal = delta * 100;
    this.myCV.position.y = this.posYCV - newLocal;    
    this.myCV.position.x = this.posXCV + newLocal / this.setpXCV;    

  }

}
