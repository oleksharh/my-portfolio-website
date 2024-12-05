"use strict";

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark_mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark_mode');
    }

    // Function to handle theme toggle
    function toggleTheme(themeToggler) {
        themeToggler.addEventListener('click', () => {
            document.body.classList.toggle('dark_mode');
            const currentTheme = document.body.classList.contains('dark_mode') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
        });
    }

    // Assuming theme togglers exist, initialize them
    const themeTogglerMain = document.getElementById('theme-toggler-main');
    const themeTogglerLower = document.getElementById('theme-toggler-lower');

    if (themeTogglerMain) {
        toggleTheme(themeTogglerMain);
    }

    if (themeTogglerLower) {
        toggleTheme(themeTogglerLower);
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
    }, 50); // Adjust delay as needed
});

function closeOverlay() {
    history.back(); // Navigates back to the previous page in the browser history
}
