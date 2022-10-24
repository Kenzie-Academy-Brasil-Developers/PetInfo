import { login } from "../../scripts/ApiRequest.js";
import { Cadastro } from "../../scripts/apiCadastro.js";

function eventForm() {
  const form = document.querySelector("form");
  const nome = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const avatar = document.querySelector("#avatar");
  const button = document.querySelector(".btnCadastrar");

  const elements = document.querySelectorAll(
    "#username, #email, #password, #avatar"
  );
  elements.forEach((element) => {
    element.addEventListener("change", function () {
      if (
        document.getElementById("username").value !== "" &&
        document.getElementById("email").value !== "" &&
        document.getElementById("password").value !== "" &&
        document.getElementById("avatar").value !== ""
      ) {
        button.disabled = false;
        button.classList.toggle("opacity");
      } else {
        button.disabled = true;
      }
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const body = {
      username: nome.value,
      email: email.value,
      password: password.value,
      avatar: avatar.value,
    };
    const btn = document.querySelector("#botao")
    const anime = document.querySelector("#anime")
    btn.classList.toggle("containerloading")
    anime.classList.toggle("animation")
    
    setTimeout(async()=>{
          await Cadastro(body);
    },2000)
    

  });
}
eventForm();

function voltarPageLogin() {
  const buttonLoginAbaixo = document.querySelector(".btnPageLogin");
  const buttonLoginAcima = document.querySelector(".btnVoltarLogin");

  buttonLoginAbaixo.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.replace("./pages/login/index.html");
  });

  buttonLoginAcima.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.replace("./pages/login/index.html");
  });
}
voltarPageLogin();
