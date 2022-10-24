import { login } from "../../scripts/ApiRequest.js"

function Logar(){
    const form = document.querySelector("form")
const elements = [...form.elements]

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const body = {}
    elements.forEach(async(elem)=>{
          if(elem.tagName == "INPUT"){
           body[elem.id]= elem.value
        await   login(body)
    }  
    })

})
}
Logar()


function irPageCadastro(){
    const pageCadastro = document.querySelector(".btnPageLogin")

pageCadastro.addEventListener("click",(event)=>{
    event.preventDefault()
    window.location.replace("../../index.html")
})
}
irPageCadastro()
