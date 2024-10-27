import homeHTML from './home.html';
import menuHTML from './menu.html';
import contactHTML from './about.html';

const content = document.getElementById('content');
content.innerHTML = `
    <button id="homeButton">Home</button>
    <button id="menuButton">Menu</button>
    <button id="contactButton">Contact</button>
`;

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <button id="homeButton">Home</button>
        <button id="menuButton">Menu</button>
        <button id="contactButton">Contact</button>
    `;
}

function addNavEvents() {
    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const contactButton = document.getElementById('contactButton');

    homeButton.addEventListener('click', () => {
        clearContent();
        content.innerHTML += homeHTML; // Inserts HTML content directly
        addNavEvents(); // Re-bind event listeners
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        content.innerHTML += menuHTML; // Inserts HTML content directly
        addNavEvents(); // Re-bind event listeners
    });

    contactButton.addEventListener('click', () => {
        clearContent();
        content.innerHTML += contactHTML; // Inserts HTML content directly
        addNavEvents(); // Re-bind event listeners
    });
}

// Call this function when your page loads
addNavEvents();
