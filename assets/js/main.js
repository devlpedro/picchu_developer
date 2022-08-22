// Olho para aparecer e desaparecer senha

let password = document.getElementById('password');
let icon = document.querySelector('#eyes');

icon.addEventListener('click', eyeClick);

function eyeClick() {
    let inputTypePassword = password.type === 'password';

    if (inputTypePassword) {
        showPassword()
    } else {
        hidePassword()
    }
}

function showPassword() {
    password.setAttribute('type', 'text');
    icon.setAttribute('src', 'assets/image/eye-off.svg');
}

function hidePassword() {
    password.setAttribute('type', 'password');
    icon.setAttribute('src', 'assets/image/eye.svg');
}

// required 
const fields = document.querySelectorAll("[required]");

function validateField(field) {
    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for (let error in field.validity) {
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }

        return foundError;
    }

    // Mensagem de verificado e inválido dos inputs
    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha esse campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            },
            password: {
                valueMissing: "Senha obrigatório"
            }
        }

        return messages[field.type][typeError]
    }

    // Criando class 'active' para aparecer as mensagens de verificado e inválido dos inputs
    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")

        if (message) {

            spanError.classList.add("active")
            spanError.innerHTML = message

        } else {

            spanError.classList.remove("active")
            spanError.innerHTML = ""

        }
    }

    return function () {
        const error = verifyErrors()
        
        if (error) {
            const message = customMessage(error)
            field.style.borderColor = "rgb(245, 73, 73)"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}

function customValidation(event) {
    const field = event.target;
    const validation = validateField(field);

    validation();
}

for (field of fields) {
    field.addEventListener("invalid", event => {
        // Eliminar o bubble
        event.preventDefault()

        customValidation(event)
    });
    field.addEventListener("blur", customValidation);
}

document.querySelector("form").addEventListener("submit", event => {
    console.log("Enviar o formulário");
    
    event.preventDefault();
})