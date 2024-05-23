// Fonction pour créer un gestionnaire d'événements avec voiture_player
export function createKeyPressHandler(voiture_player) {
    return function(event) {
        handleKeyPress(event, voiture_player);
    };
}

// Fonction pour détecter l'appui sur les touches
function handleKeyPress(event, voiture_player) {


    // Récupération du code de la touche appuyée
    var keyCode = event.keyCode;
    // Si la touche "a" est enfoncée
    if (keyCode === 65) {
        voiture_player.rotation.x -= 0.1
    }
    // Si la touche "e" est enfoncée
    else if (keyCode === 69) {
        voiture_player.rotation.x += 0.1
    }
    // Si la touche de la flèche gauche est enfoncée
    else if (keyCode === 37) {
        voiture_player.rotation.y -= 0.1
    }
    // Si la touche de la flèche droite est enfoncée
    else if (keyCode === 39) {
        voiture_player.rotation.y += 0.1
    }
    // Si la touche de la flèche haut est enfoncée
    else if (keyCode === 38) {
        voiture_player.rotation.z += 0.1
    }
    // Si la touche de la flèche bas est enfoncée
    else if (keyCode === 40) {
        voiture_player.rotation.z -= 0.1
    }
    // Si la touche "r" estenfoncée
    else if (keyCode === 82) {
        voiture_player.rotation.x = 0
        voiture_player.rotation.y = 0
        voiture_player.rotation.z = 0
        voiture_player.position.x = 0
        voiture_player.position.y = 0
        voiture_player.position.z = 0
    }
    // Si la touche "*" gauche est enfoncée
    else if (keyCode === 220) {
        window.location.href = "../index.html";
    }
    // Si la touche "z"  est enfoncée
    else if (keyCode === 90) {
        voiture_player.position.y += 0.1
    }
    // Si la touche "s"  est enfoncée
    else if (keyCode === 83) {
        voiture_player.position.y -= 0.1
    }
    // Si la touche "q"  est enfoncée
     else if (keyCode === 81) {
        voiture_player.position.x -= 0.1
    }
    // Si la touche "d"  est enfoncée
    else if (keyCode === 68) {
        voiture_player.position.x += 0.1
    }
    // Si la touche "w"  est enfoncée
    else if (keyCode === 87) {
        voiture_player.position.z += 0.1
    }
    // Si la touche "x"  est enfoncée
    else if (keyCode === 88) {
        voiture_player.position.z -= 0.1
    }
    // Si la touche " "  est enfoncée
    else if (keyCode === 32) {
        console.log("position :")
        console.log("x= ", voiture_player.position.x, ";  y=", voiture_player.position.y, ";  z=", voiture_player.position.z)
        console.log("rotaion :")
        console.log("x= ", voiture_player.rotation.x, ";  y=", voiture_player.rotation.y, ";  z=", voiture_player.rotation.z)
    }
    // Si la touche "c"  est enfoncée
    else if (keyCode === 67) {
        const x_response = prompt('Quel est pos x ?');
        const x_response_int = parseInt(x_response, 10);

        if (!isNaN(x_response_int)) {
            // Si xr_response_int est un nombre entier valide
            voiture_player.position.x = x_response_int;
        } else {
            // Si xr_response n'est pas un nombre entier valide
            voiture_player.position.x = 0;
        }


        const y_response = prompt('Quel est pos y ?');
        const y_response_int = parseInt(y_response, 10);

        if (!isNaN(y_response_int)) {
            // Si xr_response_int est un nombre entier valide
            voiture_player.position.y = y_response_int;
        } else {
            // Si xr_response n'est pas un nombre entier valide
            voiture_player.position.y = 0;
        }

        const z_response = prompt('Quel est pos z ?');
        const z_response_int = parseInt(z_response, 10);

        if (!isNaN(z_response_int)) {
            // Si xr_response_int est un nombre entier valide
            voiture_player.position.z = z_response_int;
        } else {
            // Si xr_response n'est pas un nombre entier valide
            voiture_player.position.z = 0;
        }
    }
    //si la touche "v" este enfoncé
    else if (keyCode === 86) {
        // Poser une question à l'utilisateur
        const xr_response = prompt('Quel est rot x ?');
        const xr_response_int = parseInt(xr_response, 10);

        if (!isNaN(xr_response_int)) {
            // Si xr_response_int est un nombre entier valide
            voiture_player.rotation.x = xr_response_int;
        } else {
            // Si xr_response n'est pas un nombre entier valide
            voiture_player.rotation.x = 0;
        }

        const yr_response = prompt('Quel est rot y ?');
        const yr_response_int = parseInt(yr_response, 10);

        if (!isNaN(yr_response_int)) {
            // Si xr_response_int est un nombre entier valide
            voiture_player.rotation.y = yr_response_int;
        } else {
            // Si xr_response n'est pas un nombre entier valide
            voiture_player.rotation.y = 0;
        }

        
        const zr_response = prompt('Quel est rot z ?');
        const zr_response_int = parseInt(zr_response, 10);

        if (!isNaN(xr_response_int)) {
            // Si xr_response_int est un nombre entier valide
            voiture_player.rotation.z = zr_response_int;
        } else {
            // Si xr_response n'est pas un nombre entier valide
            voiture_player.rotation.z = 0;
        }
    }
}



/*

- clique and drag

// Obtenez l'élément de statut
const statusDiv = document.getElementById('status');
var click_fais = false
var endroit_clicke = []

// Ajoutez un écouteur pour l'événement mousedown
document.addEventListener('mousedown', function(event) {
    if (event.button === 0) { // 0 correspond au bouton gauche de la souris
        click_fais = true
        endroit_clicke.x = Math.min(Math.max(event.clientX, 0), window.innerWidth);
        endroit_clicke.y = Math.min(Math.max(event.clientY, 0), window.innerHeight);
        endroit_clicke.x = (endroit_clicke.x / window.innerWidth) * 6;
        endroit_clicke.y = (endroit_clicke.y / window.innerHeight) * 6;
        console.log(endroit_clicke)
    }
});

// Ajoutez un écouteur pour l'événement mouseup
document.addEventListener('mouseup', function(event) {
    if (event.button === 0) { // 0 correspond au bouton gauche de la souris
        click_fais = false
    }
});


document.addEventListener('mousemove', (event) => {
    if (click_fais) {
        const display = document.getElementById('display');
        let x = event.clientX;
        let y = event.clientY;

        // Limiter x et y dans la fenêtre du navigateur
        x = Math.min(Math.max(x, 0), window.innerWidth);
        y = Math.min(Math.max(y, 0), window.innerHeight);

        // Calculer les valeurs de rotation en fonction de la position de la souris
        const xRotation = (x / window.innerWidth) * 6;
        const yRotation = (y / window.innerHeight) * 6;

        const finalx = endroit_clicke.x - xRotation
        const finaly = endroit_clicke.y - yRotation

        // Appliquer les rotations
        groupvoit.rotation.x = finalx;
        groupvoit.rotation.z = finaly;
    }
});
*/