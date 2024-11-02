import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import './styles.css';

const content = document.getElementById('content');
content.innerHTML = `
    <div id="navButtons">
        <button id="homeButton">Home</button>
        <button id="menuButton">Menu</button>
        <button id="aboutButton">About</button>
    </div>
`;

function clearContent() {
    // Clear all content except the navigation buttons
    content.innerHTML = `
        <div id="navButtons">
            <button id="homeButton">Home</button>
            <button id="menuButton">Menu</button>
            <button id="aboutButton">About</button>
        </div>
    `;
}

function addNavEvents() {
    document.getElementById('homeButton').addEventListener('click', () => {
        clearContent();
        loadHome();
        addNavEvents(); // Re-bind events after clearing content
    });

    document.getElementById('menuButton').addEventListener('click', () => {
        clearContent();
        loadMenu();
        addNavEvents(); // Re-bind events after clearing content
    });

    document.getElementById('aboutButton').addEventListener('click', () => {
        clearContent();
        loadAbout();
        addNavEvents(); // Re-bind events after clearing content
    });
}

// Initialize the page with the Home tab
addNavEvents();
loadHome();
