export function abrirFecharModalPost(){
    const btnAbrir = document.querySelector(".btnCriar")
    const btnFechar = document.querySelector(".btnFechar")
    const Fechar = document.querySelector("#fechar")
    const fechando = document.querySelector("#cancel")
    const fechou = document.querySelector("#fechando")
    const fechaModalExcluir = document.querySelector("#btnfecharModalExcluir")
    const btnCancelar = document.querySelector(".btnCancelar")
    const btnFecharModal = document.querySelector("#fechandoOModal")
 
    btnAbrir.addEventListener("click",(event)=>{
       event.preventDefault()
       const modal = document.querySelector(".telaPrincipalModal")
       modal.classList.toggle("none")
       modal.classList.toggle("flex")
 
    })
    btnFechar.addEventListener("click",(event)=>{
       event.preventDefault()
       const modal = document.querySelector(".telaPrincipalModal")
       modal.classList.toggle("none")
       modal.classList.toggle("flex")
 
    })
 
    btnCancelar.addEventListener("click",(event)=>{
       event.preventDefault()
       const modal = document.querySelector(".telaPrincipalModal")
       modal.classList.toggle("none")
       modal.classList.toggle("flex")
 
    })

     
    Fechar.addEventListener("click",(event)=>{
      event.preventDefault()
      const modal = document.querySelector("#modalEdicao")
      modal.classList.toggle("none")
      modal.classList.toggle("flex")

   })

        
   fechando.addEventListener("click",(event)=>{
      event.preventDefault()
      const modal = document.querySelector("#modalEdicao")
      modal.classList.toggle("none")
      modal.classList.toggle("flex")

   })

   fechou.addEventListener("click",(event)=>{
      event.preventDefault()
      const modal = document.querySelector("#modalExcluir")
      modal.classList.toggle("none")
      modal.classList.toggle("flex")

   })

   fechaModalExcluir.addEventListener("click",(event)=>{
      event.preventDefault()
      const modal = document.querySelector("#modalExcluir")
      modal.classList.toggle("none")
      modal.classList.toggle("flex")

   })

   btnFecharModal.addEventListener("click",(event)=>{
      event.preventDefault()
      const modal = document.querySelector("#postClicado")
      modal.classList.toggle("none")
      modal.classList.toggle("flex")

   })
 
 }

