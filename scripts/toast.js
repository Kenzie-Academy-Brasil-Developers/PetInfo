export const toast = (title) => { 
    const body = document.querySelector("body")

    const container = document.createElement("div")
    container.classList.add("toast-container")

    const icon = document.createElement("img")
    icon.alt = `Mensagem de ${title}`

    if (title == "Sucesso!") {
        container.classList.add("successToast")
        icon.src = "../../assets/Toltip.png"
    }
    if(title == "cadastroSucesso"){
        container.classList.add("successToast")
        icon.src = "./assets/Toltip (1).png"
    }


    container.append(icon)

    body.appendChild(container)

}
