import * as THREE from 'three';
import { loadervoit } from './src/object_codding/loadervoiture.js';
import { map1 } from './src/object_codding/map.js';
import { tank_funct } from './test/src/objetc codding/tank.js';


// lancement du rendue du debut
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// fin du rendue de debut


// apelle de voiture et map
const map1_cosnt = map1(scene)
const groupvoit = tank_funct(scene);






// Fonction pour mettre à jour la position de groupvoit en fonction de sa rotation
function updatePosition(groupvoit) {
    // Calculer la direction basée sur la rotation actuelle de groupvoit
    let speed = 0.1;
    groupvoit.position.add(
        new THREE.Vector3(0, 0, speed).transformDirection(groupvoit.matrixWorld)
    );


}





















// modifieur de la camera
camera.position.x = 35;
camera.lookAt(0, 0, 0);


// debut vérif si touche est préssé
var keysPressed = {};
var alerte = false;

document.addEventListener("keydown", function (event) {
    keysPressed[event.key] = true;

    if (event.key === "z") {
        if (alerte === false) {
            alert(groupvoit.rotation.x);
            var result = groupvoit.rotation.x / 90;
            confirm(result);
            alerte = true;
        }
    } else if (event.key === "a") {
        alerte = false;
    } else if (event.key === "e") {
        groupvoit.rotation.x = 1.57;
    } else if (event.key === "ArrowUp") {
        groupvoit.position.y += 0.1;
    } else if (event.key === "ArrowDown") {
        groupvoit.position.y -= 0.1;
    } else if (event.key === "ArrowLeft") {
        if (groupvoit.rotation.x >= 6.29) {
            groupvoit.rotation.x = 0;
        }
        groupvoit.rotation.x += 0.1;
    } else if (event.key === "ArrowRight") {
        if (groupvoit.rotation.x <= 0) {
            groupvoit.rotation.x = 6.29;
        }
        groupvoit.rotation.x -= 0.1;
    } else if (event.key === " ") {
        console.log(groupvoit.position.x," ; ", groupvoit.position.y);
        console.log(groupvoit.rotation.x);
    }
    // Si la touche "*" gauche est enfoncée
    else if (event.key === "*") {
        window.location.href = "test/test.html";
    }
});


document.addEventListener("keyup", function (event) {
    // Réinitialisez l'état de la touche lorsque la touche est relâchée
    keysPressed[event.key] = false;
});
// fin vérif si touche est préssé


// resizer de l'ecran
window.addEventListener('resize', onResize, false); 
function onResize() { 
    camera.aspect = window.innerWidth / window.innerHeight; 
    camera.updateProjectionMatrix(); 
    renderer.setSize(window.innerWidth, window.innerHeight); 
} 


// rendue de la 3D
function animate(groupvoit) {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    updatePosition(groupvoit);
}
animate(groupvoit)