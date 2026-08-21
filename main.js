// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select all navigation links that point to an ID (start with '#')
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent the default HTML jump behavior
            e.preventDefault();

            // Get the target section ID (e.g., "#work")
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // If the section exists, scroll to it smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Aligns the top of the section to the top of the screen
                });
            }
        });
    });
});