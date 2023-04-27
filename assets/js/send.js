let sendEmail = document.getElementById('send');
const nome = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');


function validations() {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (nome.value.length <= 2) {
        alert('Nome tem que ter mais que três caracteres');
    }
    if (!emailRegex.test(email.value)) {
        alert('Email incorreto');
    }
    if (message.value.length <= 6) {
        alert('Mensagem menor que 6 caracteres')
    } else {
        alert('Enviado com sucesso')
    }
}


sendEmail.addEventListener('click', () => {
    validations();
});