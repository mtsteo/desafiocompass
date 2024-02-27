"use strict";
const modal = document.getElementById("modal");
const loginButton = document.getElementById("loginLink");
const closeButton = document.getElementsByClassName("close")[0];
loginButton.onclick = () => {
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
