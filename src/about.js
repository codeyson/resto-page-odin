export default function loadAbout() {
  const content = document.getElementById('content');
  const aboutContent = `
      <div class="about">
          <h2>About CineView</h2>
          <p>Welcome to CineView, the ultimate platform for movie enthusiasts. Explore, enjoy, and indulge in the cinematic universe.</p>
      </div>
  `;
  content.innerHTML += aboutContent;
}
