import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import * as THREE from 'three';

    export function loadervoit(scene) {
        const geometry = new THREE.BoxGeometry( 1, 2, 1 ); 
        const material = new THREE.MeshBasicMaterial( {color: 0x0068FF } ); 
        const cubeA = new THREE.Mesh( geometry, material ); 

        const geometryB = new THREE.BoxGeometry( 1, 1, 1 ); 
        const materialB = new THREE.MeshBasicMaterial( {color: 0xF7FF00 } ); 
        const cubeB = new THREE.Mesh( geometryB, materialB ); 
        cubeB.position.y = 1

        const groupvoit = new THREE.Group();
        groupvoit.add( cubeA );
        groupvoit.add( cubeB );
        
        scene.add( groupvoit );
        return groupvoit
    }
