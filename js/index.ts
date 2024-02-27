const modal = document.getElementById("modal")! as HTMLElement;
const loginLink = document.getElementById("loginLink")! as HTMLElement;
const loginButton = document.getElementById(
  "loginButton"
)! as HTMLButtonElement;
const closeButton = document.getElementsByClassName("close")[0] as HTMLElement;

const EMAIL = "mateus@compass.com";
const PASSWORD = "compass";

loginLink.onclick = () => {
  modal.style.display = "block";
};

closeButton.onclick = () => {
  modal.style.display = "none";
};

window.onclick = function (event: MouseEvent) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

loginButton.onclick = (e: MouseEvent) => {
  e.preventDefault();
  let email = (<HTMLInputElement>document.getElementById("emailInput")).value;
  let password = (<HTMLInputElement>document.getElementById("passwordInput"))
    .value;

  loginValidate(email, password);
};


function loginValidate(email: string, password: string) {
  if (email === EMAIL && password === PASSWORD) {
    console.log("logged!");
  } else {
    alert("Fail! Check your data!")
  }
}
