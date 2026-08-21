document.addEventListener('DOMContentLoaded', () => {

    const stickyContainer = document.getElementById('sticky-container');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        // Change the class based on how many screen-heights (vh) the user has scrolled
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

    // Initialize state immediately on load
    window.dispatchEvent(new Event('scroll'));
});