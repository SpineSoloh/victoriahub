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

// Show the back-to-top button when scrolling down
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) { // Show when scrolled 300px down
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Smooth scroll to top when clicking the button
document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

