/*
*   THREE.JS PORTFOLIO DATA - PORTFOLIO
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//

import My3DScene from '../My3DScene.js';

export default class PortfolioData{

    constructor(){


        this.masterVideogamesData = [
            {
                img:'./imgs/genericAnimations.png',
                title: 'Generic Animations',
                description: 'Rig, skin and pose by pose animation of a model, in 3DMax, and export it to a scene in unity. First contact with Unity and 3DMax.\n'+
                    '<button onclick="window.open(\'https://youtu.be/j-HpDx8_XDw\')">'+
                       '<i class="fab fa-youtube"></i> Watch demo'+
                    '</button>',
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/humanoidAnimations.png',
                title: 'Humanoid Animations',
                description: 'Implement a scene in unity and animate a humanoid model with Mixamo.com animations and inverse kinematics animations. First contact with Unity.\n'+
                    '<button onclick="window.open(\'https://youtu.be/0MuM3SRJmhY\')">'+
                    '<i class="fab fa-youtube"></i> Watch demo'+
                    '</button>',
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/Runok.png',
                title: 'Runok',
                description: 'Group project in which a video game was developed. Runok is a 3D platform game where I worked on game mechanics, modeling, sound effects and music, and interface design. This was my first time developing a videogame.\n'+
                        '<p>'+
                            '<a href= "https://symplecticgames.itch.io/runok" target="_blank" class="link-info">'+
                                'Try it!'+
                            '</a>'+
                        '</p>'+
                    '<button onclick="window.open(\'https://www.youtube.com/watch?v=52VqOMPcKGc\')">'+
                       '<i class="fab fa-youtube"></i> Watch trailer'+
                    '</button>',
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/Undeafeatable.png',
                title: 'Undeafeatable',
                description: 'Solo game developed for the master\'s thesis. Undeafeatable is an introductory video game to Spanish sign language through game mechanics and using a handtracking system. \n'+
                        '<p>'+
                            '<a href= "https://shykibi5.itch.io/undeafeatable?password=Undeafeatable" target="_blank" class="link-info">'+
                                'Try it!'+
                            '</a>'+
                        '</p>'+
                    '<button onclick="window.open(\'https://youtu.be/6GKEg8HbTn4\')">'+
                       '<i class="fab fa-youtube"></i> Watch trailer'+
                    '</button>',
                smallText: 'GI,games and VR master'
            }
        ];
        
        const thisMasterVideogamesData = this.masterVideogamesData;

        this.masterVRData = [
            {
                img:'./imgs/vrMuseum.png',
                title: 'VR Museum',
                description: 'Project for VR Box with 3D sound logic. It\'s an interactive scene of a Museum where the paintings are "alive" and you can hear them; also there\'s a room where you can listen to the different instruments separately.',
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/vrVisor.png',
                title: 'Hand-made VR visor',
                description: 'OpenCV project where you can move cubes in a scene and rotate the camera by using a QR image, simulating a VR viewer.',
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/vrHaptic.png',
                title: 'Haptic illusions',
                description: 'Project to simulate the interaction with different surfaces using novint falcon.',
                smallText: 'GI, Games and VR master'
            }
        ];
        const thisMasterVRData = this.masterVRData;

        this.masterCGData = [
            {
                img:'./imgs/morphing.gif',
                title: 'Computer Animation',
                description: 'Different proyects where I used the Computer Animation theory to: image morphing, IK animation.',
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/glslIntroduction.png',
                title: 'GLSL Introduction',
                description: 'First contact with GLSL where I\'d to modify a scene, using vertex and fragment shader.',
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/3DGraphicsShaders',
                    text: 'Visit repository'
                },
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/glslIlumination.png',
                title: 'GLSL Ilumination',
                description: 'Implemented different lighting in GLSL.',
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/3DGraphicsIllumination',
                    text: 'Visit repository'
                },
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/oglIntroduction.png',
                title: 'OpenGL Programming',
                description: 'Adjusted light properties, defined projection matrix, used multiple programs for scene cubes, controlled camera with keyboard, and applied anisotropic filter.',
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/3DGraphicsOpenGL',
                    text: 'Visit repository'
                },
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/oglPostProcessing.png',
                title: 'Post-Processing (MRT)',
                description: 'Implemented DOF control with depth buffer and convolution masks, concatenated Gaussian filters and post-processing techniques, and used Deferred Shading.',
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/3DGraphicsDeferredShading',
                    text: 'Visit repository'
                },
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/runokShaders.png',
                title: 'Unity custom shader',
                description: 'custom Water shader, outline + toon shader and tessellation shader with Unity.',
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/ShadersDemoRunok',
                    text: 'Visit repository'
                },
                smallText: 'GI, Games and VR master'
            },
            {
                img:'./imgs/carrousel.png',
                title: 'OpenGL Carrousel',
                description: 'Developed an OpenGL scene with object and camera movement, as well as independent movements and rotations of the object\'s joints in a paired project.',
                buttonYT:    {
                    link:'https://youtube.com/shorts/m38SzcPZNOE?feature=share',
                    text: 'Watch demo'
                },
                buttonGit:    {
                    link:'https://github.com/shykibi/OpenGLCarousel_Tex-Anim',
                    text: 'Visit repository'
                },
                smallText: 'Computer Engineering degree'
            },
            {
                img:'./imgs/starwarsOGL.png',
                title: 'Star Wars Scene',
                description: 'Created an OpenGL scene with animations, models, materials, textures, and lighting system as a paired project while learning rendering basics.',
                buttonYT:    {
                    link:'https://youtu.be/iUWEw1ckbLk',
                    text: 'Watch demo'
                },
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/StarWarsIG',
                    text: 'Visit repository'
                },
                smallText: 'Computer Engineering degree'
            }
        ];
        
        const thisMasterCGData = this.masterCGData;

        this.careerData = [
            {
                img:'./imgs/flightBooking.png',
                title: 'Flight booking page',
                description: 'Web page consisting of a single HTML element that is dynamically updated with javaScript and uses an "H2" database. The HTML and JS elements were self-developed and Boostrap was used for styling along with a self-developed CSS file.',
                buttonYT:    {
                    link:'https://youtu.be/DpAswsdCF_I',
                    text: 'Watch demo'
                },
                smallText: 'Computer Engineering degree'
            },
            {
                img:'./imgs/tictactoe.png',
                title: 'TicTacToe web',
                description: 'Implementation of a concurrent website with TicTacToe game ranking and user login.',
                buttonYT:    {
                    link:'https://youtu.be/JDrtAqHSx8M',
                    text: 'Watch demo'
                },
                smallText: 'Computer Engineering degree'
            },
            {
                img:'./imgs/artGallery.png',
                title: 'Art gallery web',
                description: 'implementation of a static web page with a H2 database.',
                buttonYT:    {
                    link:'https://youtu.be/Z5B-TwxgmsQ',
                    text: 'Watch demo'
                },
                smallText: 'Computer Engineering degree'
            },
            {
                img:'./imgs/fortranToC.png',
                title: 'Fortran to C Language processor',
                description: 'Language processor that compiles FORTRAN code and converts it to C code, displaying (custom) error messages if present.',
                buttonGit:    {
                    link:'https://github.com/Ivancrto/PL',
                    text: 'Visit repository'
                },
                smallText: 'Computer Engineering degree'
            },
            {
                img:'./imgs/minishell.png',
                title: 'Minishell',
                description: 'Basic self-developed minishell. Developed in C, using pipelines.',
                buttonYT:    {
                    link:'https://youtu.be/vrNK06AV0gs',
                    text: 'Watch demo'
                },
                smallText: 'Computer Engineering degree'
            },
            {
                img:'./imgs/cParking.png',
                title: 'Automatic parking',
                description: 'Automatic parking developed in C, using threads.',
                buttonYT:    {
                    link:'https://youtu.be/9wUZJnlhsZA',
                    text: 'Watch demo'
                },
                smallText: 'Computer Engineering degree'
            },
            {
                img:'./imgs/myPortfolio.png',
                title: 'My portfolio',
                description: 'This portfolio itself. It\'s the first time I use the three.js library in an HTML page. It is a mix of my two studies: computer science and computer graphics.',
                smallText: 'Post studies'
            }
        ];
        const thisCareerData = this.careerData;

        const my3DScene = new My3DScene();
        this.loadData();


        document.querySelector('#exitPCSectionMenu').addEventListener('click', closeMenuCareer);
        document.querySelector('#exitMasterSectionMenu').addEventListener('click', closeMenuMaster);

        function closeMenuCareer(){ 
            console.log('close menu career');     
            my3DScene.closeMenuCareer();
        }

        function closeMenuMaster(){
            my3DScene.closeMenuMaster();
        }


        ////////////////////////////////////

        document.querySelector('#masterSectionMenuVideogames').addEventListener('click', openSectionMenuMasterVideogames);
        document.querySelector('#masterSectionMenuVR').addEventListener('click', openSectionMenuMasterVR);
        document.querySelector('#masterSectionMenuCG').addEventListener('click', openSectionMenuMasterCG);

        // Obtener los elementos relevantes del DOM
        const pcSectionSelectionMenu = document.querySelector('#pcSectionSelectionMenu');
        const pcSectionItem = document.querySelector('#pcSectionItem');

        // Agregar un evento de clic a cada botón en pcSectionSelectionMenu
        pcSectionSelectionMenu.querySelectorAll('.pcSectionSelection').forEach((button, index) => {
        button.addEventListener('click', () => {
            openSectionMenuCareer();
            // Obtener la información del objeto careerData correspondiente al botón clicado
            const { img, title, description, buttonYT, buttonGit, smallText } = thisCareerData[index];

            // Actualizar el contenido de pcSectionItem con la información correspondiente
            pcSectionItem.querySelector('.progamName').textContent = title;
            pcSectionItem.querySelector('.pcSectionImage').src = img;
            pcSectionItem.querySelector('.card-text').textContent = description;
            pcSectionItem.querySelector('.text-muted').textContent = smallText;

            if(buttonYT){
                // Crear el botón
                var btn = document.createElement("button");

                // Establecer el atributo onclick
                btn.setAttribute("onclick", "window.open(\""+buttonYT.link+"\")");

                // Agregar la clase CSS y el contenido HTML
                btn.className = "my-button";
                btn.innerHTML = '<i class="fa fa-youtube"></i> '+buttonYT.text+'';

                var p = document.createElement("p");
                p.appendChild(btn);

                pcSectionItem.querySelector('.card-text').appendChild(p);
            }

            if(buttonGit){
                // Crear el botón
                var btn = document.createElement("button");

                // Establecer el atributo onclick
                btn.setAttribute("onclick", "window.open(\""+buttonGit.link+"\")");

                // Agregar la clase CSS y el contenido HTML
                btn.className = "my-button";
                btn.innerHTML = '<i class="fab fa-github"></i>'+buttonGit.text+'';

                var p = document.createElement("p");
                p.appendChild(btn);

                pcSectionItem.querySelector('.card-text').appendChild(p);
            }

        });
        });

        function openSectionMenuCareer(){
            my3DScene.openSectionMenuCareer();
        }

        function openSectionMenuMasterVideogames(){
            my3DScene.openSectionMenuMasterVideogames();
        }

        function openSectionMenuMasterVR(){
            my3DScene.openSectionMenuMasterVR();
        }
        function openSectionMenuMasterCG(){
            my3DScene.openSectionMenuMasterCG();
        }

        ////////////////////////////////////

        document.querySelector('#exitPCSectionSelectionMenu').addEventListener('click', closeSectionMenuCareer);

        function closeSectionMenuCareer(){
            my3DScene.closeSectionMenuCareer();
        }



        const vrVisorSection = document.getElementById('vrVisorSection');
        const prevButton = document.getElementById('vrVisorPrev');
        const nextButton = document.getElementById('vrVisorNext');
        const vrVisorLeft = vrVisorSection.querySelector('.vrVisorWindow-left');
        const vrVisorRight = vrVisorSection.querySelector('.vrVisorWindow-right');

        let currentVRIndex = 0;

        prevButton.addEventListener('click', () => {
            if (currentVRIndex > 0) {
                currentVRIndex--;        
            }else{
                currentVRIndex = thisMasterVRData.length - 1;
            }
            updateVRVisor();
        });

        nextButton.addEventListener('click', () => {
            if (currentVRIndex < thisMasterVRData.length - 1) {
                currentVRIndex++;
            }else{
                currentVRIndex = 0;
            }
            updateVRVisor();
        });

        function updateVRVisor() {
        const currentVR = thisMasterVRData[currentVRIndex];
        vrVisorLeft.style.backgroundImage = `url(${currentVR.img})`;
        vrVisorRight.querySelector('.vrTitle').textContent = currentVR.title;
        vrVisorRight.querySelector('.vrDescription').textContent = currentVR.description;
        }



        const masterSectionGC = document.getElementById('masterSectionGC');
        const cgPrevButton = document.getElementById('CGPrev');
        const cgNextButton = document.getElementById('CGNext');

        let cgCurrentIndex = 0;

        cgPrevButton.addEventListener('click', () => {
            if (cgCurrentIndex > 0) {
                cgCurrentIndex--;        
            }else{
                cgCurrentIndex = thisMasterCGData.length - 1;
            }
            updateCGContent();
        });

        cgNextButton.addEventListener('click', () => {
            if (cgCurrentIndex < thisMasterCGData.length - 1) {
                cgCurrentIndex++;
            }else{
                cgCurrentIndex = 0;
            }
            updateCGContent();
        });

        function updateCGContent() {
            const { img, title, description, buttonYT, buttonGit, smallText } = thisMasterCGData[cgCurrentIndex];
            masterSectionGC.querySelector('.CGTitle').textContent = title;
            masterSectionGC.querySelector('.CGDescription').textContent = description;  
            document.getElementById("myImage").src = img;


            if(buttonYT){
                // Crear el botón
                var btn = document.createElement("button");

                // Establecer el atributo onclick
                btn.setAttribute("onclick", "window.open(\""+buttonYT.link+"\")");

                // Agregar la clase CSS y el contenido HTML
                btn.className = "my-button";
                btn.innerHTML = '<i class="fa fa-youtube"></i> '+buttonYT.text+'';

                var p = document.createElement("p");
                p.appendChild(btn);

                // Agregar el botón al DOM
                masterSectionGC.querySelector('.CGDescription').appendChild(p);
            }

            if(buttonGit){
                // Crear el botón
                var btn = document.createElement("button");

                // Establecer el atributo onclick
                btn.setAttribute("onclick", "window.open(\""+buttonGit.link+"\")");

                // Agregar la clase CSS y el contenido HTML
                btn.className = "my-button";
                btn.innerHTML = '<i class="fab fa-github"></i>'+buttonGit.text+'';

                var p = document.createElement("p");
                p.appendChild(btn);

                // Agregar el botón al DOM
                masterSectionGC.querySelector('.CGDescription').appendChild(p);
            }


        }


        ////////////////////////////////////

        document.querySelector('.navbarOption--blue').addEventListener('click', openMenuCareer);
        document.querySelector('.navbarOption--green').addEventListener('click', openMenuMaster);
        document.querySelector('.navbarOption--purple').addEventListener('click', openMenuExperience);
        document.querySelector('.navbarOption--yellow').addEventListener('click', openMenuCV);

        function openMenuCareer(){
            my3DScene.openMenuCareer();
        }

        function openMenuMaster(){
            my3DScene.openMenuMaster();
        }

        function openMenuExperience(){
            my3DScene.openMenuExperience();
        }

        function openMenuCV(){
            my3DScene.openMenuCV();
        }

        ////////////////////////////////////

        const webPage = document.getElementById('htmlPage');

        // Manejador de evento para el clic del botón
        webPage.addEventListener('click', (event) => {
        event.stopPropagation();
        // Aquí puedes agregar tu lógica para hacer algo cuando se hace clic en el botón
        });


    }

    loadMasterData(){

        this.loadMasterMenuData();
        this.loadMasterVideogamesData();
        this.loadMasterVRData();
        this.loadMasterCGData();
                    
    }
    loadMasterMenuData(){
        const masterCGSectionItem = document.querySelector('#masterSection');
        
        let sectionHTML = `        
        <div id="masterSectionSelectionMenu">
            <button id="masterSectionMenuVideogames" class="masterButton">
                Videogames
            </button>
            <br>
            <button id="masterSectionMenuVR" class="masterButton">
                Virtual Reality
            </button>
            <br>
            <button id="masterSectionMenuCG" class="masterButton">
                Computer Graphics
            </button>
            <br>
            <button id="exitMasterSectionMenu" class="masterButton">Exit</button>
        
        </div>
                    `;

        masterCGSectionItem.innerHTML += sectionHTML;
    }
    loadMasterVideogamesData(){

        const masterVideogamesSectionItem = document.querySelector('#masterSection');
        
        let sectionHTML = `<div class="myVideogames" >`;
        this.masterVideogamesData.forEach(section => {
            sectionHTML += `    
                            <div class="cartridge">
                                <div class="cartridgeBody">
                                    <div class="stripes"></div>
                                    <div class='nintendo'>
                                        ${section.title}
                                    </div>
                                    <div class="game">
                                        <img src="${section.img}" class="card-img " alt="..." >
                                        <div>
                                            ${section.description}
                                        </div>
                                    </div>
                                    <div class="arrow">
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                            `;
        });

        sectionHTML += `
                        </div>
        `;

        masterVideogamesSectionItem.innerHTML += sectionHTML;

    }
    loadMasterVRData(){

        const masterVRSectionItem = document.querySelector('#masterSection');
        
        let sectionHTML = `        
        <div id="vrVisorSection">
            <div class="row vrVisorButtons">
                <button id="vrVisorPrev" type="button" class="btn btn-default btn-circle btn-dark">
                    &lt;
                </button>
                <button id="vrVisorNext" type="button" class="btn btn-default btn-circle btn-dark">
                    &gt;
                </button>
            </div>
            <div class="row vrVisor" >
                <div class="col-md-6">
                    <div class="vrVisorWindow vrVisorWindow-left" 
                        style="
                        background-image: url('./imgs/vrMuseum.png');
                        background-size: cover;
                        background-position: center;">
                    </div>                  
                </div>
                <div class="col-md-6">
                    <div class="vrVisorWindow vrVisorWindow-right">
                        <h1 class="vrTitle">
                            VR Museum
                        </h1>
                        <p class="vrDescription">
                        Project for VR Box with 3D sound logic. It\'s an interactive scene of a Museum 
                        where the paintings are "alive" and you can hear them; also there\'s a room where
                        you can listen to the different instruments separately.
                        </p>
                    </div>
                
                </div>
            </div>
        </div>
                    `;

        masterVRSectionItem.innerHTML += sectionHTML;

    }
    loadMasterCGData(){
        const masterCGSectionItem = document.querySelector('#masterSection');
        
        let sectionHTML = `       
        <div id="masterSectionGC">            
            <div class="points">
                <div class="CGTitle">
                    StarWarsScene
                </div>
                <div class="CGDescription">
                    Paired project in which a scene was developed in OpenGL with its animations, models, materials and textures and lighting system. 
                    This was the first time learning rendering basics.
                </div>
                <img id="myImage" src="./imgs/morphing.gif">
                <div class="CGButtons">
                    <button id= "CGPrev">
                        prev
                    </button>
                    <button id= "CGNext">
                        next
                    </button>
                </div>
            </div>
        </div>
                    `;

        masterCGSectionItem.innerHTML += sectionHTML;
    }
    
    loadCareerData(){
        
        this.loadCareerMenuData();
        this.loadCareerSelectionData();
    }        
    loadCareerMenuData(){   

        const pcSectionItem = document.querySelector('#pcSection');
        
        let sectionHTML = `<div id="pcSectionSelectionMenu">`;
        this.careerData.forEach(section => {
            sectionHTML += `    
                                <button class="pcButton pcSectionSelection" id="${section.title}">
                                    ${section.title}.exe
                                </button>
                                <br>
                            `;
        });

        sectionHTML += `
                            <hr class="solid">
                            <button id="exitPCSectionMenu" class="pcButton">&lt; Exit</button>
                            <div class="progamName"> Run: myPrograms</div>
                        </div>
        `;

        pcSectionItem.innerHTML += sectionHTML;
        
    }
    loadCareerSelectionData(){
        
        const pcSectionItem = document.querySelector('#pcSection');
        
        let sectionHTML = `
        <div id="pcSectionItem">
            <div class="progamName">FlightBookingPage.exe</div>            
            <div class="pcSectionText clearfix">
                <img src="./imgs/flightBooking.png" class="card-img portfolioSectionImage pcSectionImage" alt="..." >
                <p class="card-text">Web page consisting of a single HTML element that is dynamically updated with javaScript and uses an "H2" database. The HTML and JS elements were self-developed and Boostrap was used for styling along with a self-developed CSS file.</p>
                <p class="card-text"><small class="text-muted">Computer Engineering degree</small></p>
            </div>

            <hr class="solid">
            <button id="exitPCSectionSelectionMenu" class="pcButton">&lt; Exit</button>
            <div class="progamName"> Run: myPrograms</div>
        </div>
        `;

        pcSectionItem.innerHTML += sectionHTML;

    }
    
    loadData(){
        
        this.loadCareerData();
        this.loadMasterData();
    }
    
}
