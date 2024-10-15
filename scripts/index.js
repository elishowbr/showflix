const email = document.querySelector('#emailEntrada');
const senha = document.querySelector('#senhaEntrada');

email.addEventListener('input', () => {
    email.value = 'bonitinho@email.com'
})

senha.addEventListener('input', () => {
    senha.value = 'senha123'
})

function focusLogin() {
    email.focus()
}

function focusPassword() {
    senha.focus()
}
