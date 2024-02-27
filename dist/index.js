"use strict";
const modal = document.getElementById("modal");
const loginLink = document.getElementById("loginLink");
const loginButton = document.getElementById("loginButton");
const closeButton = document.getElementsByClassName("close")[0];
const EMAIL = "mateus@compass.com";
const PASSWORD = "compass";
loginLink.onclick = () => {
    modal.style.display = "block";
};
closeButton.onclick = () => {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
loginButton.onclick = (e) => {
    e.preventDefault();
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput")
        .value;
    loginValidate(email, password);
};
function loginValidate(email, password) {
    if (email === EMAIL && password === PASSWORD) {
        console.log("logged!");
    }
    else {
        alert("Fail! Check your data!");
    }
}
