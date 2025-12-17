// JavaScript Interaction
window.onload = function() {
    const bird = document.querySelector('.bird-animation');
    bird.addEventListener('mouseenter', () => {
        bird.style.transform = 'scale(1.5)';
    });
    bird.addEventListener('mouseleave', () => {
        bird.style.transform = 'scale(1)';
    });
}