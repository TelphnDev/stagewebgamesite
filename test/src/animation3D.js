import TWEEN from '@tweenjs/tween.js';
export function animation_func(voiture_player) {
    const animate2 = (t) => {
        TWEEN.update(t);
        window.requestAnimationFrame(animate2);
    };
    animate2();
    
    const tween = new TWEEN.Tween({ x: 0, y: 0, xRotation: 0 })
        .to({ x: 5, y: 5, xRotation: 10 }, 1500)
        .onUpdate((coords) => {    
            voiture_player.position.x = coords.x;
            voiture_player.position.y = coords.y;
            voiture_player.rotation.x = coords.xRotation;
        })
        .onComplete(() => {
            if (voiture_player.material) {
                voiture_player.material.opacity = 0;
                voiture_player.material.transparent = true; // S'assurer que le matériau est transparent
            }
        });
    
    
    tween.start();
    
}
