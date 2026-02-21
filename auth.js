// ================= REGISTER =================
function register(){

  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let role = document.getElementById("role").value;
  let terms = document.getElementById("terms").checked;

  if(!fullName || !email || !password || !confirmPassword || !role){
    alert("Please fill all fields");
    return;
  }

  if(password !== confirmPassword){
    alert("Passwords do not match");
    return;
  }

  if(!terms){
    alert("Please accept Terms & Conditions");
    return;
  }

  let user = {
    fullName,
    email,
    password,
    role
  };

  localStorage.setItem("fleetUser", JSON.stringify(user));

  alert("Registration Successful!");
  window.location.href = "login.html";
}

// ================= LOGIN =================
function login(){

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let loginRole = document.getElementById("loginRole").value;

  let user = JSON.parse(localStorage.getItem("fleetUser"));

  if(user && user.email === email && user.password === password && user.role === loginRole){

    localStorage.setItem("isLoggedIn","true");
    localStorage.setItem("userRole", user.role);

    // Role-Based Redirect
    switch(user.role){

      case "Fleet Manager":
        window.location.href = "dashboard.html";
        break;

      case "Dispatcher":
        window.location.href = "tracking.html";
        break;

      case "Safety Officer":
        window.location.href = "alerts.html";
        break;

      case "Financial Analyst":
        window.location.href = "analytics.html";
        break;

      default:
        window.location.href = "dashboard.html";
    }

  } else {
    alert("Invalid Credentials or Role");
  }
}

// ================= LOGOUT =================
function logout(){
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userRole");
  window.location.href="login.html";
}

// ================= AUTH CHECK =================
function checkAuth(){
  if(localStorage.getItem("isLoggedIn") !== "true"){
    window.location.href="login.html";
  }
}

// ================= ROLE CHECK =================
function checkRole(allowedRoles){

  let role = localStorage.getItem("userRole");

  if(!allowedRoles.includes(role)){
    alert("Access Denied for your role");
    window.location.href="login.html";
  }
}

// ================= FORGOT PASSWORD =================
function forgotPassword(){
  let user = JSON.parse(localStorage.getItem("fleetUser"));

  if(user){
    alert("Password recovery link sent to " + user.email + " (Demo Mode)");
  } else {
    alert("No registered user found.");
  }
}