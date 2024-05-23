import * as THREE from 'three';

export function plusammo_funct(scene) {
    // 3D voiture
    const geometry = new THREE.BoxGeometry(2.500, 0.100, 3.817); 
    const material = new THREE.MeshBasicMaterial({color: 0x27E310}); 
    const cube1_voitplayer_prepa = new THREE.Mesh(geometry, material); 
    cube1_voitplayer_prepa.position.z = 1.410;

    const geometryG = new THREE.CylinderGeometry(1, 1, 0.1, 64); 
    const materialG = new THREE.MeshBasicMaterial({color: 0x27E310}); 
    const cylinderE = new THREE.Mesh(geometryG, materialG); 
    cylinderE.position.x = 1.300;
    cylinderE.position.z = 0.500;

    const geometryF = new THREE.CylinderGeometry(1, 1, 0.1, 64); 
    const materialF = new THREE.MeshBasicMaterial({color: 0x27E310}); 
    const cylinderC = new THREE.Mesh(geometryF, materialF); 
    cylinderC.position.x = 1.25;
    cylinderC.position.z = 3.059;

    const geometryB = new THREE.BoxGeometry(2.500, 0.100, 1.500); 
    const materialB = new THREE.MeshBasicMaterial({color: 0x27E310}); 
    const cube2_voitplayer_prepa = new THREE.Mesh(geometryB, materialB); 
    cube2_voitplayer_prepa.position.x = 1.530;
    cube2_voitplayer_prepa.position.z = 1.791;
    cube2_voitplayer_prepa.rotation.x = 0;
    cube2_voitplayer_prepa.rotation.y = 1.55; 


    const geometryC = new THREE.BoxGeometry(2.5, 0.1, 1); 
    const materialC = new THREE.MeshBasicMaterial({color: 0x27E310}); 
    const cube3_voitplayer_prepa = new THREE.Mesh(geometryC, materialC); 
    cube3_voitplayer_prepa.position.z = 3.558;

    const geometryD = new THREE.CylinderGeometry(1, 1, 0.1, 64); 
    const materialD = new THREE.MeshBasicMaterial({color: 0x27E310}); 
    const cylinderA = new THREE.Mesh(geometryD, materialD); 
    cylinderA.position.x = -1.2;
    cylinderA.position.z = 3.06;


    const geometryE = new THREE.CylinderGeometry(1, 1, 0.1, 64); 
    const materialE = new THREE.MeshBasicMaterial({color: 0x27E310}); 
    const cylinderB = new THREE.Mesh(geometryE, materialE); 
    cylinderB.position.x = -1.2;
    cylinderB.position.z = 0.500;

    const geometryZ = new THREE.BoxGeometry(2.5, 0.1, 1); 
    const materialZ = new THREE.MeshBasicMaterial({color: 0x27E310}); 
    const cube4_voitplayer_prepa = new THREE.Mesh(geometryZ, materialZ); 
    cube4_voitplayer_prepa.position.x = -1.7;
    cube4_voitplayer_prepa.position.z = 1.791;
    cube4_voitplayer_prepa.rotation.y = 1.57;


    const fleches = new THREE.Group();

    const geometryZA = new THREE.BoxGeometry(2, 0.1, 0.1); 
    const materialZA = new THREE.MeshBasicMaterial({color: 0xFFFFFF}); 
    const cube5_voitplayer_prepa = new THREE.Mesh(geometryZA, materialZA); 
    cube5_voitplayer_prepa.position.x = 0.936;
    cube5_voitplayer_prepa.position.y = 0.217;
    cube5_voitplayer_prepa.position.z = 2.454;
    cube5_voitplayer_prepa.rotation.y = 0.785;

    const geometryZB = new THREE.BoxGeometry(2, 0.1, 0.1); 
    const materialZB = new THREE.MeshBasicMaterial({color: 0xFFFFFF}); 
    const cube6_voitplayer_prepa = new THREE.Mesh(geometryZB, materialZB); 
    cube6_voitplayer_prepa.position.x = 0.936;
    cube6_voitplayer_prepa.position.y = 0.217;
    cube6_voitplayer_prepa.position.z = 1.073;
    cube6_voitplayer_prepa.rotation.y = -0.785;

    const geometryZC = new THREE.BoxGeometry(2, 0.1, 0.1); 
    const materialZC = new THREE.MeshBasicMaterial({color: 0xFFFFFF}); 
    const cube7_voitplayer_prepa = new THREE.Mesh(geometryZC, materialZC); 
    cube7_voitplayer_prepa.position.y = 0.217;
    cube7_voitplayer_prepa.position.z = 2.454;
    cube7_voitplayer_prepa.rotation.y = 0.785;

    const geometryZD = new THREE.BoxGeometry(2, 0.1, 0.1); 
    const materialZD = new THREE.MeshBasicMaterial({color: 0xFFFFFF}); 
    const cube8_voitplayer_prepa = new THREE.Mesh(geometryZC, materialZC); 
    cube8_voitplayer_prepa.position.y = 0.217;
    cube8_voitplayer_prepa.position.z = 1.073;
    cube8_voitplayer_prepa.rotation.y = -0.785;


    const geometryZE = new THREE.BoxGeometry(2, 0.1, 0.1); 
    const materialZE = new THREE.MeshBasicMaterial({color: 0xFFFFFF}); 
    const cube9_voitplayer_prepa = new THREE.Mesh(geometryZE, materialZE); 
    cube9_voitplayer_prepa.position.x = -0.936;
    cube9_voitplayer_prepa.position.y = 0.217;
    cube9_voitplayer_prepa.position.z = 2.454;
    cube9_voitplayer_prepa.rotation.y = 0.785;

    const geometryZF = new THREE.BoxGeometry(2, 0.1, 0.1); 
    const materialZF = new THREE.MeshBasicMaterial({color: 0xFFFFFF}); 
    const cube10_voitplayer_prepa = new THREE.Mesh(geometryZF, materialZF); 
    cube10_voitplayer_prepa.position.x = -0.936;
    cube10_voitplayer_prepa.position.y = 0.217;
    cube10_voitplayer_prepa.position.z = 1.073;
    cube10_voitplayer_prepa.rotation.y = -0.785;

    fleches.add(cube5_voitplayer_prepa);
    fleches.add(cube6_voitplayer_prepa);
    fleches.add(cube7_voitplayer_prepa);
    fleches.add(cube8_voitplayer_prepa);
    fleches.add(cube9_voitplayer_prepa);
    fleches.add(cube10_voitplayer_prepa);
    //fleches.position.z = -0.15
    // roue 2
    // creatmesh
    

    // création du groupe
    const groupvoit = new THREE.Group();
    groupvoit.add(cube1_voitplayer_prepa);
    groupvoit.add(cube2_voitplayer_prepa);
    groupvoit.add(cube3_voitplayer_prepa);
    groupvoit.add(cube4_voitplayer_prepa);
    groupvoit.add(fleches);
    groupvoit.add(cylinderA);
    groupvoit.add(cylinderB);
    groupvoit.add(cylinderC);
    groupvoit.add(cylinderE);
    

    // Add the cubes to the scene
    scene.add(groupvoit);
    // Return the cubes as an array
    return groupvoit
}


