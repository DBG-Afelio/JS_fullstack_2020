// Validation de formulaire par Javascript

const fieldName = document.querySelector('.form-nom');
const fieldSubmit = document.querySelector('.submit-button');
const fieldSurnameName = document.querySelector('.form-nom');


fieldSubmit.addEventListener('click', ()=> {
    validate();
});

fieldName.addEventListener('input', ()=> {
    validateFieldName(fieldName);
})

/**
 * Fonction validant tous les champs
 */
function validate () {
    if (!validateFieldName(fieldName)){
        alert ('erreur dans le nom');
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