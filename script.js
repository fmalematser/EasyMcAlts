// Navigation dots
const navGenerate = document.getElementById('nav-generate');
const navAbout = document.getElementById('nav-about');
const navLogout = document.getElementById('nav-logout');

const pageGenerate = document.getElementById('page-generate');
const pageAbout = document.getElementById('page-about');
const pageLogout = document.getElementById('page-logout');

// Function to switch active dot
function setActive(dot) {
  [navGenerate, navAbout, navLogout].forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
}

// Show and hide pages
function showPage(page) {
  pageGenerate.style.display = 'none';
  pageAbout.style.display = 'none';
  pageLogout.style.display = 'none';

  page.style.display = 'block';
}

// Event listeners for navigation dots
navGenerate.addEventListener('click', () => {
  setActive(navGenerate);
  showPage(pageGenerate);
});

navAbout.addEventListener('click', () => {
  setActive(navAbout);
  showPage(pageAbout);
});

navLogout.addEventListener('click', () => {
  setActive(navLogout);
  showPage(pageLogout);
});

// Log out confirmation button
document.getElementById('confirm-logout').addEventListener('click', () => {
  alert('Logged out! Redirecting to login page...');
  // You can redirect here, e.g. window.location.href = 'login.html';
});
