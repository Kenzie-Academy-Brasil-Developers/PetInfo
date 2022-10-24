import { abrirFecharModalPost } from "../../scripts/Modais.js";
import { criarPost } from "../../scripts/api.js"
import { EditPost } from "../../scripts/api.js";
import { DeletePost } from "../../scripts/api.js";

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const tdsPosts = JSON.parse(localStorage.getItem("posts"));
const Token = JSON.parse(localStorage.getItem("@PetInfoToken"));
const informacao = JSON.parse(localStorage.getItem("informacao")) 
const nomeUser = JSON.parse(localStorage.getItem("@nome")) 

function perfil(arr,name){
const nomeUser = document.querySelector(".nometooltip")
const imgperfil = document.querySelector(".imgPerfi")
imgperfil.src = `${arr}`
nomeUser.innerText = `@${name}`
}
perfil(informacao,nomeUser)


function Deslogar(){
   const deslogar = document.querySelector(".containerDeslogar")
deslogar.addEventListener("click",(event)=>{
   event.preventDefault()
   localStorage.clear()
   window.location.replace("../login/index.html")
})
}
Deslogar()


export function listar(arr){
  const main = document.querySelector("#container")
  main.innerText = ""
  arr.reverse().forEach(element => {
    template(element)
});
}



function DataAtualizada(arr){
const data = new Date();
const mes = arr[data.getMonth()];
const Ano = data.getFullYear()
const string = `${mes} de ${Ano}`
return string
}


async function template(arr){
     const main = document.querySelector("#container")
     const article = document.createElement("article")
     const divContainer = document.createElement("div")
     const div = document.createElement("div")
     const image = document.createElement("img")
     const nome = document.createElement("h5")
     const data = document.createElement("h5")
     const divButtons = document.createElement("div")
     const btnEditar = document.createElement("button")
     const btnDelete = document.createElement("button")
     const titulo = document.createElement("h1")
     const texto = document.createElement("p")
     const abrirPost = document.createElement("a")

     divContainer.classList.add("infPerfil")
     div.classList.add("infPerfil")
     image.classList.add("imgPublicacao")
     nome.classList = "margin nome"
     data.classList = "margin data"
     divButtons.classList.add("marginButton")
     btnEditar.classList.add("btnEdit")
     btnDelete.classList.add("btnExcluir")
     titulo.classList.add("tituloPost")
     texto.classList.add("texto")
     abrirPost.classList.add("ancora")

     image.src = arr.user.avatar
     nome.innerText = arr.user.username
     data.innerText = `${DataAtualizada(meses)}`
     btnEditar.innerText = "Editar"
     btnEditar.id = arr.id

     btnDelete.innerText = "Excluir"
     btnDelete.id = arr.id
     titulo.innerText = arr.title
     texto.innerText = arr.content
     abrirPost.innerText = "Acessar publicação"

     

     btnDelete.addEventListener("click",(e)=>{
      e.preventDefault()
      const deletPost = document.querySelector(".btnExcluirPost")
      const modal = document.querySelector("#modalExcluir")
      modal.classList.toggle("none")
      modal.classList.toggle("flex")

      deletPost.addEventListener("click",async(eve)=>{
         eve.preventDefault()
         modal.classList.toggle("none")
         modal.classList.toggle("flex")
       await  DeletePost(btnDelete.id)
         listar(tdsPosts) 
      })
      
     })

     btnEditar.addEventListener("click",()=>{
   const form = document.querySelector("#formEdit")
   const elements = [...form.elements]
    const title = document.querySelector("#title")
    const texto = document.querySelector("#texto")
    title.value = arr.title
    texto.value = arr.content
       const modal = document.querySelector("#modalEdicao")
       modal.classList.toggle("none")
       modal.classList.toggle("flex")
   form.addEventListener("submit", async (event)=>{

       const body = {}
       elements.forEach(async(elem)=>{
             if(elem.name){
              body[elem.name]= elem.value
       }  
       })
       await  EditPost(body,btnEditar.id) 

   })
     })
     if(arr.user.avatar == informacao){
        div.append(image,nome,data)
        divButtons.append(btnEditar,btnDelete)
        divContainer.append(div,divButtons)
        article.append(divContainer,titulo,texto,abrirPost)
        main.append(article)
        return article
     }else{
        div.append(image,nome,data)
        divContainer.append(div)
        article.append(divContainer,titulo,texto,abrirPost)
        main.append(article)
        return article
     }

}


function FazerPost(){

   const form = document.querySelector("#form")
   const elements = [...form.elements]
   
   form.addEventListener("submit", async (event)=>{

       const body = {}
       elements.forEach(async(elem)=>{
             if(elem.tagName == "INPUT" || elem.tagName == "TEXTAREA"){
              body[elem.name]= elem.value
       }  
       })
       await  criarPost(body)
       setTimeout(()=>{
       const modal = document.querySelector(".telaPrincipalModal")
       modal.classList.toggle("none")
       modal.classList.toggle("flex")
       listar(tdsPosts)  
       },2000)

   })
       
}

function Segurança(){
   if(!Token){
   window.location.replace("../login/index.html")
}
}
Segurança()



listar(tdsPosts)  
FazerPost()
abrirFecharModalPost()





