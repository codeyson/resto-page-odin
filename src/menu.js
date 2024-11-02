// menu.js
export default function loadMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content'); // Add class for styling if needed
    menuDiv.innerHTML = `
        <h1>Our Menu</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    `;
    document.getElementById('content').appendChild(menuDiv);
}
