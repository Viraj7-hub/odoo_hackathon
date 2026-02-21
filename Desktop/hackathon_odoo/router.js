// js/router.js

const publicPages = [
  "index.html",
  "login.html",
  "register.html",
  ""
];

const currentPage = location.pathname.split("/").pop();

if (!publicPages.includes(currentPage)) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}