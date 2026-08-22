document.addEventListener('mousemove', (e) => {
    // Passes the exact X and Y coordinates of the mouse to our CSS variables
    document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
});