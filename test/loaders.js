import * as THREE from 'three';

export function loaders_scene_func() {
    // lancement du rendue du debut
    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xC2C2C2 );
    return scene
}

export function loaders_camera_func() {
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // modifieur de la camera
    camera.position.z = 10;
    camera.lookAt(new THREE.Vector3(0,0,0));

    return camera
}

export function loaders_render_func() {

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    // fin du rendue de debut


    return renderer
}

export function loaders_renduefinal_func(renderer, scene, camera) {

    /*
    camera.position.z = 10;
    camera.lookAt(new THREE.Vector3(voiture_player.position.x, voiture_player.position.y, voiture_player.position.z));*
    */
    
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    

    return renderer
}