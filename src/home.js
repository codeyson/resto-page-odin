import video1 from './3945446-uhd_4096_2160_25fps.mp4'; // Video in the same folder as home.js



export default function loadHome() {
  const content = document.getElementById('content');
  const homeContent = `
    <div class="video-grid">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video 1" allowfullscreen></iframe>
      </div>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/3tmd-ClpJxA" title="Video 2" allowfullscreen></iframe>
      </div>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/2Vv-BfVoq4g" title="Video 3" allowfullscreen></iframe>
      </div>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/YQHsXMglC9A" title="Video 4" allowfullscreen></iframe>
      </div>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/LsoLEjrDogU" title="Video 5" allowfullscreen></iframe>
      </div>
      <div class="video-container">
        <video controls>
          <source src="${video1}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div class="description">
      Explore the best cinematic experiences! Enjoy our curated collection of timeless classics and thrilling new releases.
    </div>
  `;
  content.innerHTML += homeContent;
}
