document.addEventListener('DOMContentLoaded', () => {

    const stickyContainer = document.getElementById('sticky-container');
    const skipBtn = document.querySelector('.bottom-skip');

    // 1. The Scroll State Machine
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        if (scrollY < vh * 0.4) {
            stickyContainer.className = 'state-0';
        }
        else if (scrollY >= vh * 0.4 && scrollY < vh * 1.0) {
            stickyContainer.className = 'state-1';
        }
        else if (scrollY >= vh * 1.0 && scrollY < vh * 1.6) {
            stickyContainer.className = 'state-2';
        }
        else {
            stickyContainer.className = 'state-3';
        }
    });

    // 2. The Skip Button Logic
    if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stop the link from jumping the page instantly

            // Smoothly scroll down to 2x the screen height, landing perfectly in State 3
            window.scrollTo({
                top: window.innerHeight * 2,
                behavior: 'smooth'
            });
        });
    }

    // Initialize state immediately on load
    window.dispatchEvent(new Event('scroll'));
});