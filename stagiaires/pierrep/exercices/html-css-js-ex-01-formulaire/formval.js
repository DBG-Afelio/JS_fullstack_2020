// Validation de formulaire par Javascript

const fieldName = document.querySelector('.form-nom');
const fieldSurname = document.querySelector('.form-prenom');

const fieldEmail = document.querySelector('.form-email');

const fieldPhone = document.querySelector('.form-phone');

const fieldBirth = document.querySelector('.form-birth');

const fieldLogin = document.querySelector('.form-login');

const fieldPwd = document.querySelector('.form-pwd');

const fielNationality = document.querySelector('.form-nationality');

const fieldSex = document.querySelector('.form-sex');

const fieldSubmit = document.querySelector('.submit-button');



fieldSubmit.addEventListener('click', ()=> {
    validate();
});
/**
 * Fonction validant tous les champs
 */
function validate () {
    if (!validateFieldName(fieldName)){
        alert ('erreur dans le nom');
    }
};

fieldName.addEventListener('input', ()=> {
    validateFieldName(fieldName);

});

fieldSurname.addEventListener('input', ()=> {
    validateFieldName(fieldSurname);

});

fieldEmail.addEventListener('input', ()=> {
    validateFieldName(fieldEmail);

});


function validateEmail(anyway){

    const emailInputField = anyway.querySelector('input');
    const value = emailInputField.value;
    let validReturn = true; 

    nameField.classList.remove('valide');
    nameField.classList.remove('invalide');

    const valid = validateEmail(value);
    if(valid === 1){

        anyway.classList.add('invalide');
        anyway.classList.add('error-required');
        validReturn = false;
    }
    return validReturn;

}

function validateEmail(email){
    
    let testReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (testReg.test(email)){
        return 1;
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
        validReturn = false;
    } else {
        const valid = validateName(value);
        if (valid === 1) {
            nameField.classList.add('invalide');
            nameField.classList.add('error-min-length');
            validReturn = false;
        } else if(valid === 2) {
            nameField.classList.add('invalide');
            nameField.classList.add('error-max-length');
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

