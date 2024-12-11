"use strict"

document.addEventListener('DOMContentLoaded', async () => {

    const themeToggler = document.getElementById('theme-toggler');

    // Check the saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark_mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark_mode');
    }

    // Function to handle theme toggle on button click
    function toggleTheme(themeToggler) {
        themeToggler.addEventListener('click', () => {
            // Toggle dark_mode class on body
            document.body.classList.toggle('dark_mode');

            // Update the saved theme in localStorage
            const currentTheme = document.body.classList.contains('dark_mode') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
        });
    }

    // Initialize theme toggle for button click
    toggleTheme(themeToggler);

    // Function to handle hover theme change (temporary)
    themeToggler.addEventListener('mouseover', () => {
        // Temporarily change the theme based on the current saved theme
        if (document.body.classList.contains('dark_mode')) {
            // If the current theme is dark, temporarily apply light theme on hover
            document.body.classList.add('light_mode_toggle');
        } else {
            // If the current theme is light, temporarily apply dark theme on hover
            document.body.classList.add('dark_mode_toggle');
        }
    });

    // Revert back to the original theme when hover ends
    themeToggler.addEventListener('mouseout', () => {
        // Remove the temporary mode class
        document.body.classList.remove('light_mode_toggle', 'dark_mode_toggle');

        // Reapply the saved theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark_mode');
        } else {
            document.body.classList.remove('dark_mode');
        }
    });

    // Select navbar links AFTER appending template content
    const navLinks = document.querySelectorAll(".navbar-links a");
    console.log(navLinks);

    const images = document.querySelectorAll('img');

    images.forEach(image => {
        // Ensure the images are loaded before applying the transition
        if (image.complete) {
            image.classList.add('loaded');
        } else {
            image.addEventListener('load', () => {
                image.classList.add('loaded');
            });
        }
    });

    setTimeout(() => {
        // Remove "preload" class and add "loaded" class
        document.body.classList.remove("preload");
        document.body.classList.add("loaded");

        // Remove the preloader element
        const preloader = document.querySelector(".preloader");
        if (preloader) {
            preloader.remove();
        }


    }, 200);

});

