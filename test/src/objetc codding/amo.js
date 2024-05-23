import * as THREE from 'three';

export function amo_funct(scene) {
    // 3D ammo
   
    const geometryD = new THREE.CylinderGeometry(0, 0.3, 1, 64); 
    const materialD = new THREE.MeshBasicMaterial({color: 0xCCC220}); 
    const cylinderA = new THREE.Mesh(geometryD, materialD); 

    const geometryA = new THREE.CylinderGeometry(0.3, 0.3, 1, 64); 
    const materialA = new THREE.MeshBasicMaterial({color: 0xCCC220}); 
    const cylinderB = new THREE.Mesh(geometryA, materialA); 
    cylinderB.position.y = -1

    const geometryC = new THREE.CylinderGeometry(0.3, 0.4, 0.2, 64); 
    const materialC = new THREE.MeshBasicMaterial({color: 0xCCC220}); 
    const cylinderC = new THREE.Mesh(geometryC, materialC); 
    cylinderC.position.y = -1.5
    cylinderC.position.x = 0
    




    // création du groupe
    const groupvoit = new THREE.Group();
    groupvoit.add(cylinderA);
    groupvoit.add(cylinderB);
    groupvoit.add(cylinderC);
    /*
    groupvoit.add(cylinderE);
*/


    // Add the cubes to the scene
    scene.add(groupvoit);
    // Return the cubes as an array
    return groupvoit
}
