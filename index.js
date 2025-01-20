
const validEmail = "test@example.com";
const validPassword = "123456";

const loginButton = document.getElementById("loginButton");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const messageDiv = document.getElementById("message");


function validateLogin() {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === validEmail && password === validPassword) {
    messageDiv.textContent = "Login successful!";
    messageDiv.className = "success";
    messageDiv.style.display = "block";
    alert("Login successful!"); 
  } else {
    messageDiv.textContent = "Invalid email or password.";
    messageDiv.className = "error";
    messageDiv.style.display = "block";
    alert("Invalid email or password.");
  }
}

loginButton.addEventListener("click", validateLogin);
