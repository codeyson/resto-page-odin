// home.js
export default function loadHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('tab-content'); // Add class for styling if needed
    homeDiv.innerHTML = `
        <h1>Welcome to Our Home Page</h1>
        <p>Enjoy browsing through our services and offerings.</p>
    `;
    document.getElementById('content').appendChild(homeDiv);
}
