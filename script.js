// Sparkly Fairy Cursor
const sparkleColors = ['✨', '💕', '🌸', '💖', '⭐', '🎀'];
const sparkleColorsAlt = ['✨', '💗', '🌷'];

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Create sparkles randomly as user moves
    if (Math.random() > 0.8) {
        createSparkle(mouseX, mouseY);
    }
});

// Click sparkles
document.addEventListener('click', (e) => {
    for (let i = 0; i < 8; i++) {
        createSparkle(e.clientX, e.clientY, true);
    }
});

function createSparkle(x, y, isClick = false) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Choose random sparkle color
    const colors = isClick ? sparkleColors : sparkleColorsAlt;
    sparkle.textContent = colors[Math.floor(Math.random() * colors.length)];
    
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    
    // Random trajectory
    const angle = isClick ? (Math.PI * 2 * Math.random()) : (Math.random() * 0.5 - 0.25);
    const velocity = isClick ? (Math.random() * 200 + 100) : (Math.random() * 50 + 30);
    
    const tx = Math.cos(angle) * velocity;
    const ty = (Math.sin(angle) * velocity) - (isClick ? 50 : 20);
    
    sparkle.style.setProperty('--tx', tx + 'px');
    sparkle.style.setProperty('--ty', ty + 'px');
    
    document.body.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => sparkle.remove(), 1500);
}

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Create celebration sparkles
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createSparkle(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight,
                true
            );
        }, i * 30);
    }
    
    // Reset form
    this.reset();
    
    // Show success message
    alert('✨ Thanks for the sparkles! Message sent! ✨');
});

console.log('✨ Welcome to strawberry.juice.jpg! ✨');
