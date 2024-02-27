"use strict";
const modal = document.getElementById("modal");
const loginLink = document.getElementById("loginLink");
const loginButton = document.getElementById("loginButton");
const closeButton = document.getElementsByClassName("close")[0];
const singInUp = document.getElementById("signInUp");
const greeting = document.getElementById("greetings");
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
function loginValidate(email, password) {
    if (email === EMAIL && password === PASSWORD) {
        return true;
    }
    else {
        return false;
    }
};



loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput")
        .value;
    const isLogged = loginValidate(email, password);
    if (isLogged) {
        setTimeout(() => {
            singInUp.style.display = "none";
            greeting.style.display = "flex";
            modal.style.display = "none";
        }, 2000);
    }
    else
        console.log("deuerrado!");
});
