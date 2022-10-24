import { login } from "../../scripts/ApiRequest.js"

function eventForm() {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const avatar = document.querySelector("#avatar");

    const body = {
      username: nome.value,
      email: email.value,
      password: password.value,
      avatar: avatar.value,
    };

    await Cadastro(body);
    
  });
}
eventForm();

function voltarPageLogin(){
    const buttonLoginAbaixo = document.querySelector(".btnPageLogin")
const buttonLoginAcima = document.querySelector(".btnVoltarLogin")

buttonLoginAbaixo.addEventListener("click",(event)=>{
    event.preventDefault()
          window.location.replace("./pages/login/index.html")
})

buttonLoginAcima.addEventListener("click",(event)=>{
    event.preventDefault()
          window.location.replace("./pages/login/index.html")
})
}
voltarPageLogin()
