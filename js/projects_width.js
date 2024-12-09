"use strict"

// adjustable 768px threshold
let lastWidth = window.innerWidth;

window.addEventListener('resize', function () {
    const currentWidth = window.innerWidth;

    if ((lastWidth > 768 && currentWidth <= 768) || (lastWidth <= 768 && currentWidth > 768)) {
        location.reload(); // Reload the page
    }

    lastWidth = currentWidth;
});


document.addEventListener('DOMContentLoaded', async () => {
    // Populating projects
    const projectsSection = document.getElementById("projects-section");
    const projectTemplate = document.getElementById("project-template");

    try {
        // Fetch the JSON data
        const response = await fetch("data/projects.json");
        if (!response.ok) {
            throw new Error("Failed to fetch project data");
        }
        const projects = await response.json();

        console.log(projects);

        // Loop through each project and populate the template
        Object.values(projects).forEach(project => {
            const clone = projectTemplate.content.cloneNode(true);
            const link = clone.querySelector("a");
            const title = clone.querySelector("h3");
            const stack = clone.querySelector("p");

            // Populate the template with data
            link.href = project.url;
            title.textContent = project.title;
            stack.textContent = `Stack: ${project.stack}`;

            // Append the populated template to the section
            projectsSection.appendChild(clone);
        });
    } catch (error) {
        console.error("Error loading projects:", error);
    }
});