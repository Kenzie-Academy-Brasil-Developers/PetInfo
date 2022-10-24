import { listar } from "../pages/home/index.js";
import { toast } from "./toast.js";

const urlBase = "http://localhost:3333/";
const header = " application/json";


export async function pesquisaPerfil() {
  const Token = JSON.parse(localStorage.getItem("@PetInfoToken"));
 
  const apiRequest = await fetch(`${urlBase}users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": header,
      Authorization:`Bearer ${await Token.token}` 
    }

  })
  .then((res)=> res.json())
  .then((res)=> {
    localStorage.setItem("informacao", JSON.stringify(res.avatar));
    localStorage.setItem("@nome", JSON.stringify(res.username));

  })

  return apiRequest
}
pesquisaPerfil()


export async function buscarPosts() {
  const Token = JSON.parse(localStorage.getItem("@PetInfoToken"));
 
  const apiRequest = await fetch(`${urlBase}posts`, {
    method: "GET",
    headers: {
      "Content-Type": header,
      Authorization:`Bearer ${await Token.token}` 
    }

    })
    .then((res)=> res.json())
    .then((res)=>{
      localStorage.setItem("posts", JSON.stringify(res));
      const tdsPosts = JSON.parse(localStorage.getItem("posts"));
      listar(tdsPosts) 
  })
  return apiRequest
}
buscarPosts()


export async function criarPost(body) {
  const Token = JSON.parse(localStorage.getItem("@PetInfoToken"));
 
  const apiRequest = await fetch(`${urlBase}posts/create`, {
    method: "POST",
    headers: {
      "Content-Type": header,
      Authorization:`Bearer ${await Token.token}` 
    },
    body: JSON.stringify(body)

    })
    .then((res)=> res.json())
    .then((res)=>{
      localStorage.setItem("post", JSON.stringify(res));
      const tdsPosts = JSON.parse(localStorage.getItem("posts"));
      listar(tdsPosts) 
  })
  return apiRequest
}


export async function EditPost(body,id) {
  const Token = JSON.parse(localStorage.getItem("@PetInfoToken"));
 
  const apiRequest = await fetch(`${urlBase}posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": header,
      Authorization:`Bearer ${await Token.token}` 
    },
    body: JSON.stringify(body)

    })
    .then((res)=> res.json())
    .then((res)=>{
      const tdsPosts = JSON.parse(localStorage.getItem("posts"));
      listar(tdsPosts)   
  })
  return apiRequest
}

export async function DeletePost(id) {
  const Token = JSON.parse(localStorage.getItem("@PetInfoToken"));
 
  const apiRequest = await fetch(`${urlBase}posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": header,
      Authorization:`Bearer ${await Token.token}` 
    }

    })
    .then((res)=> res.json())
    .then((res)=>{
       const tdsPosts = JSON.parse(localStorage.getItem("posts"));
       toast("Sucesso!")
      listar(tdsPosts)
  })
  return apiRequest
}