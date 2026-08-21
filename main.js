document.addEventListener('DOMContentLoaded', () => {

    // 1. Setup the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When the element scrolls into view...
            if (entry.isIntersecting) {
                // Add the active class to trigger the CSS fade in
                entry.target.classList.add('active');
            }
        });
    }, {
        // Triggers when 30% of the element is visible
        threshold: 0.3
    });

    // 2. Grab all elements with the 'reveal' class
    const hiddenElements = document.querySelectorAll('.reveal');

    // 3. Tell the observer to watch them
    hiddenElements.forEach((el) => observer.observe(el));

    // 4. Force the first screen to reveal immediately on load
    setTimeout(() => {
        const firstScreenElements = document.querySelectorAll('.fullscreen:nth-child(1) .reveal');
        firstScreenElements.forEach(el => el.classList.add('active'));
    }, 100);
});