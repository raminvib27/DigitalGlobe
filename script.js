// Get the glow effect div
const glowEffect = document.getElementById("glow-effect");

// Listen for the mousemove event
document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Update the position of the glow effect to follow the mouse
    glowEffect.style.left = `${mouseX}px`;
    glowEffect.style.top = `${mouseY}px`;

    // Change the size and opacity of the glow effect based on the speed of mouse movement
    const speed = Math.abs(event.movementX) + Math.abs(event.movementY);

    // Smoothly adjust the size of the glow based on the mouse speed
    const glowSize = 100 + speed / 2;  // Glow size increases with speed
    glowEffect.style.width = `${glowSize}px`;
    glowEffect.style.height = `${glowSize}px`;

    // Optional: Adjust the opacity based on mouse speed to make the effect feel more dynamic
    const glowOpacity = 0.4 + speed / 2000;  // Adjust opacity for a smoother effect
    glowEffect.style.opacity = glowOpacity;

    // Smoothly change the box-shadow glow effect based on size
    glowEffect.style.boxShadow = `0 0 ${glowSize / 4}px rgba(255, 152, 0, 0.7)`;
});
