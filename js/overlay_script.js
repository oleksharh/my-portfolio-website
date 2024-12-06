"use strict";

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark_mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark_mode');
    }

    setTimeout(() => {
        document.body.classList.remove("preload");
        document.body.classList.add("loaded");

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


document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const projectTitle = params.get("title");

    try {
        // Fetch the JSON file
        const response = await fetch("data/projects.json");
        if (!response.ok) throw new Error("Failed to load project data.");
        const projects = await response.json();

        const projectDetails = projects[projectTitle];

        const projectContainer = document.querySelector(".project-detailed");

        if (projectDetails) {
            projectContainer.querySelector("h3").textContent = projectDetails.title;
            projectContainer.querySelector("p:nth-of-type(1)").textContent = `Stack: ${projectDetails.stack}`;
            projectContainer.querySelector("p:nth-of-type(2)").textContent = `Detailed Description: ${projectDetails.description}`;
        }
    } catch (error) {
        console.error("Error fetching project data:", error);

        const projectContainer = document.querySelector(".project-detailed");
        projectContainer.querySelector("h3").textContent = "Error Loading Data";
        projectContainer.querySelector("p:nth-of-type(1)").textContent = "";
        projectContainer.querySelector("p:nth-of-type(2)").textContent = "Could not load project details. Please try again later.";
    }
});

