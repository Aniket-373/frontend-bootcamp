document.getElementById("signupform").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userexists = users.some((user) => user.username === username);

  if (userexists) {
    alert("User already exists");
  } else {
    users.push({ username, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("SignUp Successful");

    e.target.reset();
  }
});


