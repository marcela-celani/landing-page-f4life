// MENU SANDUICHE NAV
clickMenu = () => {
    const menu = document.getElementById('menu-burguer')
    menu.classList.toggle("active")
}

//VALIDAÇÃO CADASTRO EMAIL
const form = document.getElementById('flex-cadastro')
const emailImput = document.getElementById('cadastro')

form.addEventListener("submit", (event) => {

    // verifica se o campo de email está vazio
    if(emailImput.value === "" || !emailValidacao(emailImput.value)){
        alert("Por favor, preencha o campo de e-mail para realizar o cadastro.")
    }

    // se o campo estiver preenchido, envia o form
    form.submit()
})

function emailValidacao(email) {
    const emailRegex = new RegExp(
        // usuario123@host.com
        /^[a-zA-Z0-9._-]+@+[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

        if(emailRegex.test(email)) {
            return true
        } else {
            return false
        }
    )
}
