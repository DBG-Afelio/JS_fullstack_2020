const fieldName = document.querySelector('.form-nom');
const fieldSubmit = document.querySelector('.submit-button');

fieldSubmit.addEventListener('click', ()=> {
    validateName();
});

fieldName.addEventListener('input', ()=> {
    validateFieldName(fieldName);
})

const VALIDATION = {
    VALID : {value: 0},
    LENGTH_TOO_SMALL: {value: 1, error: "error-min-length"},
    LENGTH_TOO_BIG: {value: 2, error: "error-max-length"},
    INPUT_REQUIRED : {value: 3, error: "error-required"}
}

function validateName(name) {
    if(name.trim() === '' || name == undefined) return VALIDATION.INPUT_REQUIRED;
    else if(name.length < 3) return VALIDATION.LENGTH_TOO_SMALL;
    else if(name.length > 50) return VALIDATION.LENGTH_TOO_BIG;
    else return VALIDATION.VALID;
}

function  validateFieldName(nameField){
    const validation = validateName(value);
    const nameInputField = nameField.querySelector('input');
    const value = nameInputField.value;
    if(validation == VALIDATION.VALID || validation.value == 0){
    nameField.classList.add('valide');
    }else{
    nameField.classList.add('invalide');
    nameField.classList.add(validation.error);
    }
}
