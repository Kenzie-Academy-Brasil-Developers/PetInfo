const urlBase = "http://localhost:3333/";
const header = " application/json";

  export async function login(body) {
    const apiRequest = await fetch(`${urlBase}login`, {
      method: "POST",
      headers: {
        "Content-Type": header,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("@PetInfoToken", JSON.stringify(res) || "");
  
        setTimeout(() => {
          const token = JSON.parse(localStorage.getItem("@PetInfoToken"));
          if (
            token !== "" &&
            token.message !== "A senha está incorreta" &&
            token.message !== "O email está incorreto"
          ) {
  
            window.location.replace("../home/index.html");
          } else {
            if(token.message == "A senha está incorreta"){
            const inputSenha = document.querySelector("#password")
            inputSenha.classList.add("border")
            const alert = document.querySelector("#alert")
            alert.innerHTML =  res.message
            }
            if(token.message == "O email está incorreto"){
              const inputEmail = document.querySelector("#email")
              inputEmail.classList.add("border")
              const alert = document.querySelector("#alert")
              alert.innerHTML =  res.message
              }
           
          }
        }, 1500);
      });
  
    return apiRequest;
  }