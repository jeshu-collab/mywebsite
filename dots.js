document.addEventListener('mousemove', (e) => {
    // Passes the exact X and Y coordinates of the mouse to our CSS variables
    document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
});

/* =========================================
   SCROLL REVEAL OBSERVER
   ========================================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // When the footer enters the viewport, add the 'is-visible' class
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 }); // Triggers when 10% of the element is visible

// Attach the tripwire to anything with the 'fade-on-scroll' class
document.querySelectorAll('.fade-on-scroll').forEach(el => observer.observe(el));