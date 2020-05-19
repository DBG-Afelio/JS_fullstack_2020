const fieldName = document.querySelector('.form-nom');
const fieldSurname=document.querySelector('.form-prenom');
const fieldEmail=document.querySelector('.form-email');
const fieldSubmit = document.querySelector('.submit-button');


fieldSubmit.addEventListener('click', ()=> {
    validate();
});

fieldName.addEventListener('input', ()=> {
    validateFieldName(fieldName);
})
fieldSurname.addEventListener('input', ()=> {
    validateFieldSurname(fieldSurname);
})
fieldEmail.addEventListener('input', ()=> {
    validateFieldEmail(fieldEmail);
})
/**
 * Fonction validant tous les champs
 */
function validate () {
    if (!validateFieldName(fieldName)){
        alert ('erreur dans le nom');
    }
    if(!validateFieldSurname(fieldSurname)){
        alert('erreur dans le prénom');
    }
    if(!validateFieldSurname(fieldSurname)){
        alert("erreur dans l'email");
    }
}

/**
 * Fonction validant valide et met à jour l'affichage pour le champ nom
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldName(nameField) {
    const nameInputField = nameField.querySelector('input');
    const value = nameInputField.value;
    let validReturn = true;
    nameField.classList.remove('valide');
    nameField.classList.remove('invalide');
    if (value.trim() === '') {
        nameField.classList.add('invalide');
        nameField.classList.add('error-required');
        document.getElementById('nameRequired').classList.remove('hidden');
        validReturn = false;
    } else {
        const valid = validateName(value);
        if (valid === 1) {
            nameField.classList.add('invalide');
            nameField.classList.add('error-min-length');
            document.getElementById('nameMin').classList.remove('hidden');
            validReturn = false;
        } else if(valid === 2) {
            nameField.classList.add('invalide');
            nameField.classList.add('error-max-length');
            document.getElementById('nameMax').classList.remove('hidden')
            validReturn = false;
        } else {
            nameField.classList.add('valide');
        }
    }
    return validReturn;
}


/**
 * Fonction validant les règles du champ nom
 */
function validateName(name) {
    if (name.length >= 3 && name.length <= 50) {
        return 0;
    } else if (name.length < 3) {
        return 1;
    } else {
        return 2;
    }
}
//..............................................................................



function validateFieldSurname(surnameField) {
    const surnameInputField = surnameField.querySelector('input');
    const value = surnameInputField.value;
    let validReturn = true;
    surnameField.classList.remove('valide');
    surnameField.classList.remove('invalide');
    if(!(value.trim() === '')){
    const valid = validateSurname(value);
        if (valid === 1) {
            surnameField.classList.add('invalide');
            surnameField.classList.add('error-min-length');
            document.getElementById('surnameMin').classList.remove('hidden');
            validReturn = false;
        } else if(valid === 2) {
            surnameField.classList.add('invalide');
            surnameField.classList.add('error-max-length');
            document.getElementById('surnameMin').classList.remove('hidden');
            validReturn = false;
        } else {
            surnameField.classList.add('valide');
        }
    }
    return validReturn;
}

function validateSurname(surname){
    if(surname.length>=3 && surname.length <= 50){

        return 0;
    }else if (surname.length < 3) {

        return 1
        }else {

            return 2;
        }
}
//..............................................................................
function validateFieldEmail(emailField) {
    const emailInputField = emailField.querySelector('input');
    const value = emailInputField.value;
    let validReturn = true;
    emailField.classList.remove('valide');
    emailField.classList.remove('invalide');
    if(!(value.trim() === '')){
        const valid = validateEmail(value);
        if (valid === 1) {
            emailField.classList.add('invalide');
            emailField.classList.add('error-invalid');
            document.getElementById('emailInvalid').classList.remove('hidden');
            validReturn = false;
        }else if(valid===0) {
            emailField.classList.add('valide');
        }
    }
    return validReturn;
}


const mailRule = /^\w+([.-]\w+)*@\w+([.-]\w+)*(.\w{2,})$/;
function validateEmail(email){
    if(email.match(mailRule)){
        return 0
    }else {
        return 1
    }
}