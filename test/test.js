import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import { voiture_player_funct } from './src/objetc codding/voiture_player.js'
import { arrow_helper_func } from './src/objetc codding/arrow_helper.js'
import { createKeyPressHandler } from './src/test_commande.js'
import { tank_funct } from './src/objetc codding/tank.js'
import { amo_funct } from './src/objetc codding/amo.js'
import { boost_funct } from './src/objetc codding/boost.js'
import { plusammo_funct } from './src/objetc codding/plusammo.js'
import { animation_func  } from './src/animation3D.js'





// lancement du rendue du debut
// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xC2C2C2 );
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000 );


// rendue pour afficher ensuite
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// fin du rendue de debut


// modifieur de la camera
camera.position.z = 10;
camera.lookAt(new THREE.Vector3(0,0,0));


//voiture player
//const voiture_player = voiture_player_funct(scene);


const voiture_player = tank_funct(scene)

/*
window.addEventListener('load', function() {
    animation_func(voiture_player)
    // Ajoutez ici le code que vous souhaitez exécuter après le chargement complet de la page
});
*/



// arraow helper
const arow_help = arrow_helper_func(scene)
arow_help.position.x = -10




// platforme teste
/*
const geometryC = new THREE.BoxGeometry( 5, 1, 5 ); 
const materialC = new THREE.MeshBasicMaterial( {color: 0xFFFFFF } ); 
const cubeCvjdh = new THREE.Mesh( geometryC, materialC ); 
cubeCvjdh.position.y = -1
scene.add(cubeCvjdh)

*/
// Ajout d'un écouteur d'événements pour détecter les appuis sur les touches
document.addEventListener("keydown", createKeyPressHandler(voiture_player));


// commande
createKeyPressHandler(voiture_player)







// resizer de l'ecran
window.addEventListener('resize', onResize, false); 
function onResize() { 
    camera.aspect = window.innerWidth / window.innerHeight; 
    camera.updateProjectionMatrix(); 
    renderer.setSize(window.innerWidth, window.innerHeight); 
} 


// rendue de la 3D
function animate() {
    /*
    camera.position.z = 10;
    camera.lookAt(new THREE.Vector3(voiture_player.position.x, voiture_player.position.y, voiture_player.position.z));*
    */
    
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

}
animate()



