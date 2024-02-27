const modal = document.getElementById("modal")! as HTMLElement;

const loginButton = document.getElementById("loginLink")! as HTMLElement;

const closeButton = document.getElementsByClassName("close")[0] as HTMLElement;

loginButton.onclick = () => {
  modal.style.display = "block";
};

closeButton.onclick = () => {
  modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }