// crée
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Exemple d'utilisation
setCookie('username', 'JohnDoe', 7); // Crée un cookie 'username' avec la valeur 'JohnDoe' qui expire dans 7 jours


// lire 




function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Exemple d'utilisation
const username = getCookie('username');
if (username) {
    console.log('Username:', username);
} else {
    console.log('Cookie not found');
}



// supprimer
function deleteCookie(name) {
    setCookie(name, "", -1); // En mettant une valeur négative pour les jours, le cookie expire immédiatement
}

// Exemple d'utilisation
deleteCookie('username'); // Supprime le cookie 'username'
