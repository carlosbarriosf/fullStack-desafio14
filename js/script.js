const firstName = document.getElementById('firstName');
const surname = document.getElementById('surname');
const dni = document.getElementById('dni');
const cuil = document.getElementById('cuil');
const docNumber = document.getElementById('docNumber');
const address = document.getElementById('address');

//boolean to check if the form is valid or not
let isValid = false;
const isFormValid = [];

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
        showError(e, "Este campo es obligatorio");
        input.style = 'border-color: var(--color-error);';
        isValid = false;
    } else {
        if(names.length > 3) {
            showError(e, msg)
            input.style = 'border-color: var(--color-error);';
            isValid = false;
        } else if (!fun(input.value)) {
            showError(e, "El formato del nombre ingresado no es correcto");
            input.style = 'border-color: var(--color-error);';
            isValid = false;
        } else {
            hideError(e);
            if(input.required || input.value !== "") {
                input.style = 'border-color: var(--color-success);'
                isValid = true;
            } else {
                input.style = 'border-color: var(--color-purple300);'
                isValid = true;
            }
        }
    }
}

function showInfo(e) {
    const box = e.target.parentElement.querySelector('[data-info]');
    box.style = 'transform: scale(1);';
}

function hideInfo(e) {
    const box = e.target.parentElement.querySelector('[data-info]');
    box.style = 'transform: scale(0);';
}

firstName.addEventListener('blur', (e) => {
    validateString(firstName, upToThreeNamesValidator, e, "Sólamente puede ingresar de 1 a 3 nombres.")
    isFormValid[0] = isValid;
})

firstName.addEventListener('mouseover', showInfo)
firstName.addEventListener('mouseout', hideInfo)

surname.addEventListener('blur', (e) => {
    validateString(surname, surnameValidator, e, "Sólamente puede ingresar de 1 a 3 apellidos.");
    isFormValid[1] = isValid;
})

surname.addEventListener('mouseover', showInfo)
surname.addEventListener('mouseout', hideInfo)

docNumber.addEventListener('blur', (e) => {
    if(dni.checked) {
        if(!dniValidator(docNumber.value)) {
            showError(e, "El formato no es correcto.");
            docNumber.style = 'border-color: var(--color-error);';
            isValid = false;
        } else {
            hideError(e);
            docNumber.style = 'border-color: var(--color-success);'
            isValid = true;
        }
    } else if(cuil.checked) {
        if(!cuilValidator(docNumber.value)) {
            showError(e, "El formato no es correcto.");
            docNumber.style = 'border-color: var(--color-error);';
            isValid = false;
        } else {
            hideError(e);
            docNumber.style = 'border-color: var(--color-success);'
            isValid = true;
        }
    } else {
        showError(e, "Por favor seleccione un tipo de documento");
        docNumber.style = 'border-color: var(--color-error);';
        isValid = false;
    }
    isFormValid[2] = isValid;
})

docNumber.addEventListener('mouseover', showInfo)
docNumber.addEventListener('mouseout', hideInfo)

address.addEventListener('blur', (e) => {
    if(!addressValidator(address.value)) {
        showError(e, "Este campo no debe contener caracteres especiales como @, #, $, etc. (Entre 10 y 200 caracteres)");
        address.style = 'border-color: var(--color-error);';
        isValid = false;
    } else {
        hideError(e);
        if(address.value === "") {
            address.style = 'border-color: var(--color-purple300);';
        } else {
            address.style = 'border-color: var(--color-success);';
        }
        isValid = true;
    }
    isFormValid[3] = isValid;
})

address.addEventListener('mouseover', showInfo)
address.addEventListener('mouseout', hideInfo)

function resetStyles() {
    const inputs = document.querySelectorAll('input[type="text"]');
    console.log(inputs)
    inputs.forEach((element) => {
        element.style = 'border-color: var(--color-purple300);'
    })
}



function onFormSubmit(e) {
    e.preventDefault();
    if(isFormValid.indexOf(false) === -1) {
        alert("El formulario se ha enviado correctamente");
        resetStyles();
        document.querySelector('.form').reset();
    } else {
        alert("El formulario no se ha enviado porque hay campos con errores");
    }
}

const resetBtn = document.querySelector('button[type="reset"]');
resetBtn.addEventListener('click', () => {
    const errors = Array.from(document.querySelectorAll('[data-error]'));
    errors.forEach((element) => {
        element.style = 'transform: scale(0);'
        element.innerText = "";
    })
    resetStyles();
})