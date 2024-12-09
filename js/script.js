"use strict"

document.addEventListener('DOMContentLoaded', async () => {

    const mainNavbar = document.getElementById('navbar');

    const themeToggler = document.getElementById('theme-toggler');


    // Theme toggle function
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark_mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark_mode');
    }

    // Function to handle theme toggle for both buttons
    function toggleTheme(themeToggler) {
        themeToggler.addEventListener('click', () => {
            document.body.classList.toggle('dark_mode');
            const currentTheme = document.body.classList.contains('dark_mode') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
        });
    }

    // Initialize theme toggle for both main and lower navbar
    toggleTheme(themeToggler);

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

