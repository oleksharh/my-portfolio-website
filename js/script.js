"use strict"

document.addEventListener('DOMContentLoaded', () => {

    // Fetch and append the template content to both navbars
    const templateContent = document.querySelector('#navbar-template').content;

    const mainNavbar = document.getElementById('main-navbar');
    const lowerNavbar = document.getElementById('lower-navbar');

    if (mainNavbar) {
        const mainNavbarContent = templateContent.cloneNode(true);
        const mainThemeToggler = mainNavbarContent.querySelector('.navbar__theme-toggler');
        mainThemeToggler.id = 'theme-toggler-main'; // Assign a unique ID
        mainNavbar.appendChild(mainNavbarContent);
    }

    if (lowerNavbar) {
        const lowerNavbarContent = templateContent.cloneNode(true);
        const lowerThemeToggler = lowerNavbarContent.querySelector('.navbar__theme-toggler');
        lowerThemeToggler.id = 'theme-toggler-lower'; // Assign a unique ID
        lowerNavbar.appendChild(lowerNavbarContent);
    }

    // Fetch the theme togglers after appending the content
    const themeTogglerMain = document.getElementById('theme-toggler-main');
    const themeTogglerLower = document.getElementById('theme-toggler-lower');



    // Check if the required elements exist in the DOM
    if (!lowerNavbar || !themeTogglerMain || !themeTogglerLower) {
        console.error('Required elements are missing from the DOM.');
        return;
    }

    let lastScrollY = window.scrollY;
    const threshold = 80;

    lowerNavbar.classList.remove('visible');

    // Throttled scroll event listener
    let isThrottled = false;
    const throttleDuration = 80;

    window.addEventListener('scroll', () => {
        if (isThrottled) return;

        isThrottled = true;
        setTimeout(() => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > threshold) {
                lowerNavbar.classList.add('visible');
            } else if (currentScrollY <= threshold) {
                lowerNavbar.classList.remove('visible');
            }

            lastScrollY = currentScrollY;
            isThrottled = false;
        }, throttleDuration);
    });

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
    toggleTheme(themeTogglerMain);
    toggleTheme(themeTogglerLower);

    // Get the current page from the URL
    const currentPage = window.location.pathname.split("/").pop(); // e.g., "index.html"

    // Select navbar links AFTER appending template content
    const navLinks = document.querySelectorAll(".navbar__links a");
    console.log(navLinks);

    // Loop through links and hide the matching one
    navLinks.forEach(link => {
        console.log(link.getAttribute("href"), currentPage);
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("muted"); // Hide the corresponding button

            link.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent navigation
                console.log("Link is blocked.");
            });
        }
    });
});


const projects = document.querySelectorAll('.project');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');
const detailsTitle = document.getElementById('details-title');
const detailsStack = document.getElementById('details-stack');
const detailsDescription = document.getElementById('details-description');
const detailsImage = document.getElementById('details-image');

function showProjectDetails(event) {
    const project = event.currentTarget;

    // Populate details box with project details
    detailsTitle.textContent = project.querySelector('h3').textContent;
    detailsStack.textContent = project.querySelector('p').textContent;
    detailsDescription.textContent = project.getAttribute('data-details');

    // Handle the project image
    const projectImage = project.querySelector('img');
    if (projectImage) {
        detailsImage.src = projectImage.src; // Copy project image to overlay
        detailsImage.style.display = 'block';
    } else {
        detailsImage.style.display = 'none'; // Hide image if not available
    }

    // Show overlay
    overlay.style.display = 'flex';
}

function closeOverlay() {
    overlay.style.display = 'none'; // Hide overlay when close button is clicked
}

// Attach click events
projects.forEach(project => project.addEventListener('click', showProjectDetails));
closeButton.addEventListener('click', closeOverlay);

// Close overlay when clicking outside the details box
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
});
