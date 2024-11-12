// Get the glow effect div
const glowEffect = document.getElementById("glow-effect");

// Listen for the mousemove event
document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Update the position of the glow effect to follow the mouse
    glowEffect.style.left = `${mouseX}px`;
    glowEffect.style.top = `${mouseY}px`;

    // Optionally, make the glow effect size change based on the mouse speed
    const speed = Math.abs(event.movementX) + Math.abs(event.movementY);
    glowEffect.style.width = `${100 + speed / 2}px`; // Increase size based on speed
    glowEffect.style.height = `${100 + speed / 2}px`;

    // Optional: fade effect based on mouse speed
    glowEffect.style.opacity = 0.6 + speed / 2000;
});
