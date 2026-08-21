document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Smooth Scrolling Logic ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 2. Scroll Reveal Logic ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        // 0.1 means trigger when 10% of the element is visible
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element has entered the viewport
            if (entry.isIntersecting) {
                console.log('Revealing element:', entry.target); // Debugging check

                // Add the class that triggers the CSS animation
                entry.target.classList.add('active');

                // Stop watching this element so it doesn't animate again if you scroll up
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Find everything with the .reveal class
    const hiddenElements = document.querySelectorAll('.reveal');

    // Tell the observer to watch them
    hiddenElements.forEach((el) => observer.observe(el));
});