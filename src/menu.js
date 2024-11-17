export default function loadMenu() {
  const content = document.getElementById('content');
  const menuContent = `
      <div class="menu">
          <h2>Our Menu</h2>
          <p>Enjoy popcorn, drinks, and snacks while watching your favorite movies!</p>
      </div>
  `;
  content.innerHTML += menuContent;
}
