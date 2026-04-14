document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación de las tarjetas al hacer scroll (Intersection Observer)
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% de la tarjeta es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar una vez que ya apareció
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    // 2. Generador de Corazones Flotantes
    const heartsContainer = document.getElementById('hearts-container');
    const heartEmojis = ['❤️', '💖', '💕', '🌸', '✨'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Elige un emoji al azar
        heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        // Posición horizontal aleatoria
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Tamaño aleatorio
        const size = Math.random() * 1.5 + 0.5; // Entre 0.5 y 2em
        heart.style.fontSize = size + 'em';
        
        // Duración de la animación aleatoria (entre 4 y 8 segundos)
        const duration = Math.random() * 4 + 4;
        heart.style.animationDuration = duration + 's';

        heartsContainer.appendChild(heart);

        // Elimina el corazón una vez que termina su animación para no saturar el celular
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // Crea un corazón nuevo cada 800 milisegundos
    setInterval(createHeart, 800);
});