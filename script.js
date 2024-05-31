document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "I love you not because of who you are, but because of who I am when I am with you.",
        "Love is composed of a single soul inhabiting two bodies.",
        "You are my sun, my moon, and all my stars.",
        "I wish I could turn back the clock. I'd find you sooner and love you longer.",
        "I need you like a heart needs a beat."
    ];

    const quoteElement = document.getElementById('quote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
});
