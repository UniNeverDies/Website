// Add some harmless interactivity
let isAnimating = true;

function stopAnimation() {
    const elements = document.querySelectorAll('*');
    
    if (isAnimating) {
        elements.forEach(el => el.classList.add('stopped'));
        document.querySelector('.stop-btn').textContent = 'Start the Madness!';
        document.body.style.background = '#333';
        isAnimating = false;
    } else {
        elements.forEach(el => el.classList.remove('stopped'));
        document.querySelector('.stop-btn').textContent = 'Stop the Madness!';
        document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'gradientShift 3s ease infinite';
        isAnimating = true;
    }
}

// Add some random movement to the page
document.addEventListener('click', function(e) {
    if (e.target.className !== 'stop-btn') {
        const face = document.getElementById('face1');
        face.style.transform = `scale(${Math.random() * 0.5 + 0.8})`;
        
        setTimeout(() => {
            face.style.transform = 'scale(1)';
        }, 200);
    }
});

// Prevent context menu for that authentic feel
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
