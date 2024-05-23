import * as THREE from 'three';

export function arrow_helper_func(scene) {
    // Si la scène est déjà déclarée, utilisez directement celle-ci
    // const scene = new THREE.Scene(); // Cette ligne devrait être commentée ou supprimée si 'scene' est déjà déclaré

    // Le reste du code pour ajouter les flèches des axes
    const dirX = new THREE.Vector3( 1, 0, 0 );
    const dirY = new THREE.Vector3( 0, 1, 0 );
    const dirZ = new THREE.Vector3( 0, 0, 1 );

    dirX.normalize();
    dirY.normalize();
    dirZ.normalize();

    const origin = new THREE.Vector3( 0, 0, 0 );
    const length = 1;
    const colorX = 0xff0000;
    const colorY = 0x00ff00;
    const colorZ = 0x0000ff;

    const arrowHelperX = new THREE.ArrowHelper( dirX, origin, length, colorX );
    const arrowHelperY = new THREE.ArrowHelper( dirY, origin, length, colorY );
    const arrowHelperZ = new THREE.ArrowHelper( dirZ, origin, length, colorZ );

    const arrow_help = new THREE.Group();
    arrow_help.add(arrowHelperX);
    arrow_help.add(arrowHelperY);
    arrow_help.add(arrowHelperZ);
    scene.add( arrow_help );
    /*
    scene.add( arrowHelperX );
    scene.add( arrowHelperY );
    scene.add( arrowHelperZ );
    */
   return arrow_help
}