import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

const content = document.getElementById('content');

// Set up navigation buttons
function clearContent() {
    const navButtons = document.getElementById('navButtons').outerHTML; // Save nav buttons
    content.innerHTML = navButtons; // Replace content with nav buttons
}

function addNavEvents() {
    document.getElementById('homeButton').addEventListener('click', () => {
        clearContent();
        loadHome();
        addNavEvents();
    });

    document.getElementById('menuButton').addEventListener('click', () => {
        clearContent();
        loadMenu();
        addNavEvents();
    });

    document.getElementById('aboutButton').addEventListener('click', () => {
        clearContent();
        loadAbout();
        addNavEvents();
    });
}

// Initialize with Home content
addNavEvents();
loadHome();
