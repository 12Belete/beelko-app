function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  alert("Login button is working!");
}

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  alert("Signup button is working!");
}

function wallet() {
  alert("Wallet feature is under development.");
}

function liveRooms() {
  alert("Live Audio Rooms coming soon.");
}

function chat() {
  alert("Chat feature coming soon.");
}
