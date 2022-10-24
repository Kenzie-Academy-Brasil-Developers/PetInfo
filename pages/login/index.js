import { login } from "../../scripts/ApiRequest.js";

function Logar() {
  const form = document.querySelector("form");
  const elements = [...form.elements];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const body = {};
    elements.forEach(async (elem) => {
      if (elem.tagName == "INPUT") {
        body[elem.id] = elem.value;

        const pageLogar = document.querySelector("#logar");
        const anime = document.querySelector("#animation");
        pageLogar.classList.add("containerloading");
        anime.classList.add("animation");

        setTimeout(async () => {
          await login(body);
        }, 2000);
      }
    });
  });
}
Logar();


function abilitarBotao(){
    
const pageLogar = document.querySelector("#logar");
const elements = document.querySelectorAll(
    "#email, #password"
  );
  elements.forEach((element) => {
    element.addEventListener("change", function () {
      if (
        document.getElementById("email").value !== "" &&
        document.getElementById("password").value !== "" 
      ) {
        pageLogar.disabled = false;
        pageLogar.classList.toggle("opacity");
      } else {
        pageLogar.disabled = true;
      }
    });
  });

}
abilitarBotao()

function irPageCadastro() {
  const pageCadastro = document.querySelector(".btnPageLogin");

  pageCadastro.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.replace("../../index.html");
  });
}
irPageCadastro();
