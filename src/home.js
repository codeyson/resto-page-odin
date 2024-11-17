export default function loadHome() {
    const content = document.getElementById('content');
    const homeContent = `
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Cinematic Video" allowfullscreen></iframe>
        </div>
        <div class="description">
            A thrilling experience awaits. Dive into the world of cinema with our latest releases and timeless classics.
        </div>
    `;
    content.innerHTML += homeContent;
}
