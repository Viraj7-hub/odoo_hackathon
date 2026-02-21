/* ===============================
   FleetFlow Global App Bootstrap
   =============================== */

// ---- SESSION MANAGEMENT ----
function isAuthenticated() {
  return localStorage.getItem("loggedIn") === "true";
}

function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = "index.html";
  }
}

// ---- NAVIGATION HELPERS ----
function navigate(page) {
  window.location.href = page;
}

// ---- LOGOUT ----
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// ---- GLOBAL INIT ----
function initApp() {
  console.log("FleetFlow App Initialized");

  // Example: auto-attach logout button if present
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }
}

// Auto-run on every page
document.addEventListener("DOMContentLoaded", initApp);