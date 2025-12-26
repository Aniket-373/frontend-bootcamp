let resumebtn = document.querySelector("resumebtn");
let touchbtn = document.querySelector("touchbtn");

let name = document.getElementById("name");
let compname = document.getElementById("compname");
let email = document.getElementById("email");

let submitbtn = document.getElementById("submitbtn")

    let onSubmit = (event) => {
    console.log(event)
    
}

submitbtn.addEventListener("click", onSubmit);