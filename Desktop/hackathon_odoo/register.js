// js/register.js

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
      name: regName.value,
      gender: regGender.value,
      email: regEmail.value,
      role: regRole.value
    };

    console.log("Registered user:", user);

    alert("Registration successful! Please login.");

    window.location.href = "login.html";
  });

});