document.getElementById("loginform").addEventListener("submit", login);

function login(e) {
  e.preventDefault();

  const lname = document.getElementById("lname").value;
  const lpassword = document.getElementById("lpassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    user => user.username === lname && user.password === lpassword
  );

  if (validUser) {
    localStorage.setItem("loggedInUser", validUser.username);
    alert("Login Successful");
  } else {
    alert("Login Failed! Check Username & Password");
  }
}

