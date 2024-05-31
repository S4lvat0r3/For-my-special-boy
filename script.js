document.addEventListener('DOMContentLoaded', () => {
    const quote = "I wish I could turn back the clock. I'd find you sooner and love you longer.";

    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quote;

    createHearts();
});

function createHearts() {
    const container = document.getElementById('hearts-container');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}
