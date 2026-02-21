// js/auth.js
console.log("auth.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Login clicked");

    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Registered successfully! Now login.");
  });
});