document.addEventListener('DOMContentLoaded', () => {

    const stickyContainer = document.getElementById('sticky-container');
    const skipBtn = document.querySelector('.bottom-skip');

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

    if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
            e.preventDefault();

            window.scrollTo({
                top: window.innerHeight * 2,
                behavior: 'smooth'
            });
        });
    }

    window.dispatchEvent(new Event('scroll'));
});