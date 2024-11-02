// about.js
export default function loadAbout() {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('tab-content'); // Add class for styling if needed
    aboutDiv.innerHTML = `
        <h1>About Us</h1>
        <p>Learn more about our journey and values.</p>
    `;
    document.getElementById('content').appendChild(aboutDiv);
}
