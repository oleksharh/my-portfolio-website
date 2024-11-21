// const lowerNavbar = document.getElementById('lower-navbar');

// let lastScrollY = window.scrollY;
// const threshold = 100;

// lowerNavbar.classList.remove('visible');

// // Add scroll event listener
// window.addEventListener('scroll', () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY) {
//         // Scrolling down: hide main navbar, show lower navbar
//         lowerNavbar.classList.add('visible');
//     } else {
//         // Scrolling up: hide lower navbar, show main navbar
//         if (currentScrollY <= threshold) {
//             // If scroll position is within the threshold, show the main navbar
//             lowerNavbar.classList.remove('visible');
//         } else {
//             // If the user is further down (but not at the top), keep both hidden
//             lowerNavbar.classList.add('visible');
//         }
//     }

//     lastScrollY = currentScrollY;
// });


// export function themeToggle() {
//     const themeToggler = document.getElementById('theme-toggler');
//     const darkIcon = document.getElementById('dark-icon');
//     const lightIcon = document.getElementById('light-icon');

//     function updateIcons() {
//         if (document.body.classList.contains('dark_mode')) {
//             darkIcon.style.display = 'inline';
//             lightIcon.style.display = 'none';
//         } else {
//             darkIcon.style.display = 'none';
//             lightIcon.style.display = 'inline';
//         }
//     }

//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//         document.body.classList.add('dark_mode');
//     }
//     updateIcons();

//     themeToggler.addEventListener('click', () => {
//         document.body.classList.toggle('dark_mode');

//         const currentTheme = document.body.classList.contains('dark_mode') ? 'dark' : 'light';
//         localStorage.setItem('theme', currentTheme);

//         updateIcons();
//     });
// }




// document.addEventListener('DOMContentLoaded', () => {
//     themeToggle();
// });


document.addEventListener('DOMContentLoaded', () => {
    const lowerNavbar = document.getElementById('lower-navbar');
    const themeTogglerMain = document.getElementById('theme-toggler-main');
    const themeTogglerLower = document.getElementById('theme-toggler-lower'); // Added the lower navbar theme toggler

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
});
