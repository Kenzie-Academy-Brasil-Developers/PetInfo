import { toast } from "./toast.js";

const urlBase = "http://localhost:3333/";
const header = " application/json";


export async function Cadastro(body) {
    const apiRequest = await fetch(`${urlBase}users/create`, {
      method: "POST",
      headers: {
        "Content-Type": header,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("id", JSON.stringify(res.id));
  
        const id =JSON.parse(localStorage.getItem("id")) ;
        if (res.message == "" || res.id !== undefined) {
            toast("cadastroSucesso")
            setTimeout(()=>{
              window.location.replace("./pages/login/index.html");
            },4000)
          
        } else {
          alert(res.message);
        }
      });
  
    return apiRequest;
  }