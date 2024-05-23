import * as THREE from 'three';

export function tank_funct(scene) {
    // 3D tank
    const geometry = new THREE.BoxGeometry(4.540, 0.743, 2.320); 
    const material = new THREE.MeshBasicMaterial({color: 0x828282}); 
    const cube1_voitplayer_prepa = new THREE.Mesh(geometry, material); 
    //cube1_voitplayer_prepa.position.y = 1.038;

    const geometryB = new THREE.BoxGeometry(4.540, 1.5, 2.320); 
    const materialB = new THREE.MeshBasicMaterial({color: 0x026500}); 
    const cube2_voitplayer_prepa = new THREE.Mesh(geometryB, materialB); 
    cube2_voitplayer_prepa.position.y = 1,122;
     
    const geometryC = new THREE.BoxGeometry(1.793, 1.4, 2.320); 
    const materialC = new THREE.MeshBasicMaterial({color: 0x026500}); 
    const cube3_voitplayer_prepa = new THREE.Mesh(geometryC, materialC); 
    cube3_voitplayer_prepa.position.y = 2.4;



    const geometryD = new THREE.CylinderGeometry(0.6, 0.6, 0.6, 64); 
    const materialD = new THREE.MeshBasicMaterial({color: 0x000}); 
    const cylinderA = new THREE.Mesh(geometryD, materialD); 
    cylinderA.position.z = 1.5;
    cylinderA.position.y = -0,138;
    cylinderA.position.x = 1.5;
    cylinderA.rotation.x = 1.57;

    const geometryE = new THREE.CylinderGeometry(0.6, 0.6, 0.6, 64); 
    const materialE = new THREE.MeshBasicMaterial({color: 0x000}); 
    const cylinderB = new THREE.Mesh(geometryE, materialE); 
    cylinderB.position.z = 1.5;
    cylinderB.position.y = -0,138;
    cylinderB.position.x = -1.5;
    cylinderB.rotation.x = 1.57;

    // roue 2
    // creatmesh
    const geometryF = new THREE.CylinderGeometry(0.6, 0.6, 0.6, 64); 
    const materialF = new THREE.MeshBasicMaterial({color: 0x000}); 
    const cylinderC = new THREE.Mesh(geometryF, materialF); 
    cylinderC.position.z = -1.45;
    cylinderC.position.y = -0,138;
    cylinderC.position.x = 1.5;
    cylinderC.rotation.x = 1.57;

    const geometryG = new THREE.CylinderGeometry(0.6, 0.6, 0.6, 64); 
    const materialG = new THREE.MeshBasicMaterial({color: 0x000}); 
    const cylinderE = new THREE.Mesh(geometryG, materialG); 
    cylinderE.position.z = -1.45;
    cylinderE.position.y = -0,138;
    cylinderE.position.x = -1.5;
    cylinderE.rotation.x = 1.57;


    const geometryH = new THREE.CylinderGeometry(0.4, 0.4, 4, 64); 
    const materialH = new THREE.MeshBasicMaterial({color: 0x026500}); 
    const cylinderH = new THREE.Mesh(geometryH, materialH); 
    cylinderH.position.z = 0;
    cylinderH.position.y = 2.3;
    cylinderH.position.x = -2.8;
    cylinderH.rotation.z = 1.57;

    // création du groupe
    const grouptank = new THREE.Group();
    grouptank.add(cube1_voitplayer_prepa);
    grouptank.add(cube2_voitplayer_prepa);
    grouptank.add(cube3_voitplayer_prepa);
    grouptank.add(cylinderA);
    grouptank.add(cylinderB);
    grouptank.add(cylinderC);
    grouptank.add(cylinderE);
    grouptank.add(cylinderH);



    // Add the cubes to the scene
    scene.add(grouptank);
    // Return the cubes as an array
    return grouptank
}
