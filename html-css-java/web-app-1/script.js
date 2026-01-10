let root = document.getElementById("root");

function dispMessage() {
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPassword").value;

  if (email === "john@gmail.com" && password === "1234") {
    document.getElementById("lblMessage").innerHTML = "Welcome";
  } else {
    document.getElementById("lblMessage").innerHTML = "Access Denied";
  }
}

function showLoginForm() {
  let str = `
    <h3>Login Form</h3>
    <p><label id="lblMessage"></label></p>
    <p><input type="text" id="txtEmail" placeholder="Email" /></p>
    <p><input type="password" id="txtPassword" placeholder="Password" /></p>
    <p><button class="login-btn" onclick="dispMessage()">Log In</button></p>
    <hr>
    <p><button class="register-btn" onclick="showRegisterForm()">Create Account</button></p>
  `;
  root.innerHTML = str;
}

function showRegisterForm() {
  let str = `
    <h3>Registration Form</h3>
    <p>Coming Soon...</p>
    <button onclick="showLoginForm()">Back to Login</button>
  `;
  root.innerHTML = str;
}
