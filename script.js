// Load diamonds from localStorage or start at 0
let diamonds = parseInt(localStorage.getItem('diamonds')) || 0;

// Update diamond count display if present
function updateDiamondUI() {
  const el = document.getElementById('diamondCount');
  if (el) el.textContent = diamonds;
}

// Simulate watching an ad: add 1 diamond
function watchAd() {
  diamonds++;
  localStorage.setItem('diamonds', diamonds);
  updateDiamondUI();
  alert("Thanks for watching the ad! +1 Diamond");
}

// Generate alt process with random timer (1-5 minutes)
function generateAlt() {
  if (diamonds < 20) {
    alert("You need 20 diamonds to generate an alt.");
    return;
  }

  diamonds -= 20;
  localStorage.setItem('diamonds', diamonds);
  updateDiamondUI();

  const timerDisplay = document.getElementById('timer');
  const status = document.getElementById('status');
  let waitTime = Math.floor(Math.random() * 5) + 1; // 1 to 5 minutes
  let seconds = waitTime * 60;

  status.textContent = "Generating account... please wait.";

  const countdown = setInterval(() => {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    timerDisplay.textContent = `Estimated Time: ${min}:${sec < 10 ? '0' : ''}${sec}`;

    if (seconds-- <= 0) {
      clearInterval(countdown);
      status.textContent = "Record depleted. Try again later.";
      timerDisplay.textContent = "";
    }
  }, 1000);
}

// Login function: just alert and redirect to plans page
function login() {
  alert("Logged in successfully!");
  window.location.href = "plans.html";
}

// Register function: alert and redirect to plans page
function register() {
  alert("Registered successfully!");
  window.location.href = "plans.html";
}

// Select plan function: only free plan works now
function selectPlan(plan) {
  if (plan === 'free') {
    window.location.href = "generate.html";
  }
}

// Initialize diamond UI count on page load
updateDiamondUI();
