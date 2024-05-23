import * as THREE from 'three';


// map 1 code de création
export function map1(scene) {
    const geometry = new THREE.BoxGeometry( 0.1, 71, 71 ); 


    const loader = new THREE.CubeTextureLoader();
    loader.setPath( '/src/material/' );

    const textureCube = loader.load( [
        'map_materiel.jpg', 'map_materiel.jpg',
        'map_materiel.jpg', 'map_materiel.jpg',
        'map_materiel.jpg', 'map_materiel.jpg'
    ] );

    const material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
    
    const map = new THREE.Mesh( geometry, material ); 
    scene.add( map );
    return map
}