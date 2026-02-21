// js/login.js

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // mock authentication success
    localStorage.setItem("loggedIn", "true");

    window.location.href = "dashboard.html";
  });

  document.getElementById("forgotBtn").addEventListener("click", () => {
    alert("Password reset link sent to your email (mock)");
  });

});