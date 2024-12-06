"use strict";

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark_mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark_mode');
    }

    // Remove preloader and apply 'loaded' state after a slight delay
    setTimeout(() => {
        document.body.classList.remove("preload");
        document.body.classList.add("loaded");

        // Remove preloader from DOM if needed
        const preloader = document.querySelector(".preloader");
        if (preloader) {
            preloader.remove();
        }
    }, 50);
});

const overlay = document.getElementById('overlay');

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        history.back();
    }
});

function closeOverlay() {
    history.back(); // Navigates back to the previous page in the browser history
}
