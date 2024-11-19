const lowerNavbar = document.getElementById('lower-navbar');

let lastScrollY = window.scrollY;
const threshold = 100;

lowerNavbar.classList.remove('visible');

// Add scroll event listener
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down: hide main navbar, show lower navbar
        lowerNavbar.classList.add('visible');
    } else {
        // Scrolling up: hide lower navbar, show main navbar
        if (currentScrollY <= threshold) {
            // If scroll position is within the threshold, show the main navbar
            lowerNavbar.classList.remove('visible');
        } else {
            // If the user is further down (but not at the top), keep both hidden
            lowerNavbar.classList.add('visible');
        }
    }

    lastScrollY = currentScrollY;
});

