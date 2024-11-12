// Get the glow effect div
const glowEffect = document.getElementById("glow-effect");

// Add event listener for mouse move
document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Update the position of the glow effect to follow the mouse
    glowEffect.style.left = `${mouseX}px`;
    glowEffect.style.top = `${mouseY}px`;
});

// Add event listener for mouse down
document.addEventListener("mousedown", () => {
    // When mouse is pressed down, make the glow effect visible and smooth
    glowEffect.style.transition = "width 0.2s ease, height 0.2s ease, opacity 0.5s ease";
    glowEffect.style.opacity = 1;  // Set opacity to 100% to show the effect
    glowEffect.style.width = "300px";  // Increase size when mouse down
    glowEffect.style.height = "300px"; // Increase size when mouse down
});

// Add event listener for mouse up
document.addEventListener("mouseup", () => {
    // When mouse is released, return the glow effect back to normal state
    glowEffect.style.transition = "width 0.2s ease, height 0.2s ease, opacity 0.5s ease";
    glowEffect.style.opacity = 0;  // Fade out the glow effect
    glowEffect.style.width = "200px";  // Reset size
    glowEffect.style.height = "200px"; // Reset size
});
