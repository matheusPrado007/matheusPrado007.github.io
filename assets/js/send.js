let sendEmail = document.getElementById('send');
const nome = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');


function validations() {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (nome.value.length <= 2 || !emailRegex.test(email.value) || message.value.length <= 6) {
        Swal.fire(
            'Preencha todos os campos'
        )
    } else if (nome.value.length > 2 && emailRegex.test(email.value) && message.value.length > 6) {
        Swal.fire(
            'Enviado com sucesso'
        )
    }
}


sendEmail.addEventListener('click', (e) => {
    e.preventDefault()
    validations();
});