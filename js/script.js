const firstName = document.getElementById('firstName');
const surname = document.getElementById('surname');
const dni = document.getElementById('dni');
const cuil = document.getElementById('cuil');
const docNumber = document.getElementById('docNumber');
const address = document.getElementById('address');

function showError (e, message) {
    const error = e.target.parentElement.querySelector('[data-error]');
    error.style = 'transform: scale(1);'
    error.innerText = message;
}

function hideError (e) {
    const error = e.target.parentElement.querySelector('[data-error]');
    error.style = 'transform: scale(0);'
    error.innerText = "";
}

function validateString(input, fun , e, msg) {
    const names = input.value.split(" ");
    if(input.value === "" && input.required) {
        showError(e, "Este campo es obligatorio")
    } else {
        if(names.length > 3) {
            showError(e, msg)
        } else if (!fun(input.value)) {
            showError(e, "El formato del nombre ingresado no es correcto");
        } else {
            hideError(e);
        }
    }
}

firstName.addEventListener('blur', (e) => {
    validateString(firstName, upToThreeNamesValidator, e, "Sólamente puede ingresar de 1 a 3 nombres. No añadir espacios al final del último nombre")
})

surname.addEventListener('blur', (e) => {
    validateString(surname, surnameValidator, e, "Sólamente puede ingresar de 1 a 3 apellidos. No añadir espacios al final del último apellido");
})

docNumber.addEventListener('blur', (e) => {
    console.log(dni.checked)
    if(dni.checked) {
        if(!dniValidator(docNumber.value)) {
            showError(e, "El formato no es correcto. Utilice un formato similar a 12(.)234(.)567 ó 20(-)33444555(-)6.");
        } else {
            hideError(e);
        }
    } else if(cuil.checked) {
        if(!cuilValidator(docNumber.value)) {
            showError(e, "El formato no es correcto. Utilice un formato similar a 12(.)234(.)567 ó 20(-)33444555(-)6.");
        } else {
            hideError(e);
        }
    } else {
        showError(e, "Por favor seleccione un tipo de documento");
    }
})

address.addEventListener('blur', (e) => {
    if(!addressValidator(address.value)) {
        showError(e, "Este campo debe contener entre 10 y 200 caracteres y no debe contener caracteres especiales como @, #, $, etc.");
    } else {
        hideError(e);
    }
})