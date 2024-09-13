document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.querySelector('.hero-text h1');
    const heroParagraph = document.querySelector('.hero-text p');

    function popOutEffect(element) {
        element.style.animation = 'popOut 6s ease-in-out infinite, colorChange 6s ease-in-out infinite';
    }

    popOutEffect(heroText);
    popOutEffect(heroParagraph);
});

let pythonIcon = document.getElementById('pythonIcon');
let jsIcon = document.getElementById('jsIcon');

function rotateIcons() {
    setTimeout(() => {
        pythonIcon.style.opacity = '1';
        jsIcon.style.opacity = '0';
    }, 1000);

    setTimeout(() => {
        pythonIcon.style.opacity = '0';
        jsIcon.style.opacity = '1';
    }, 4000); 
}

rotateIcons();
setInterval(rotateIcons, 5000);
