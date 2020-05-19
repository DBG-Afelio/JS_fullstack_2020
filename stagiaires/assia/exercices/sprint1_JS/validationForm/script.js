// Validation de formulaire par Javascript

const fieldName = document.querySelector('.form-nom');
const fieldDate = document.querySelector('.form-date');
const fieldSubmit = document.querySelector('.submit-button');

//-------------------------------------
fieldSubmit.addEventListener('click', ()=> {
    validate();
});

/* 
(e) => {
        e.preventDefault();
*/

fieldName.addEventListener('input', ()=> {
    validateFieldName(fieldName);
})
fieldDate.addEventListener('input', () => {
    validateFieldDate(fieldDate);
})
//-----------------------------------------
/**
 * Fonction validant tous les champs
 */
function validate () {
    if (!validateFieldName(fieldName)){
      //  alert('erreur dans le nom');
    }
    if (!validateDateOfBirth(fieldDate)) {
        alert('erreur champ date');
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
    nameField.classList.remove('error-required');
    nameField.classList.remove('error-min-length');
    nameField.classList.remove('error-max-length');
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


/**
 * Fonction validant valide et met a jour l'affichage pour le champ Date de Naissance
 * @param 
 * @returns
 */
function validateFieldDate(dateField) {
    const dateInputField = dateField.querySelector('input'); 
    const date = dateInputField.valueAsDate; 
    let validReturn = true;
    dateField.classList.remove('valide');
    dateField.classList.remove('invalide');
    dateField.classList.remove('error-dateIsFutur');
    dateField.classList.remove('error-ageIsOut');
    if (date == null) {
        dateField.classList.add['invalide'];
        dateField.classList.add['error-required'];
        validReturn = false;
    } else {
        valid = validateDateOfBirth(date);
        if (valid == 0) {
            dateField.classList.add('valide');
        } else if (valid == 1) {
            dateField.classList.add('invalide');
            dateField.classList.add('error-dateIsFutur');
            validReturn = false;
        } else {
            dateField.classList.add('invalide');
            dateField.classList.add('error-ageIsOut');
            validReturn = false;
        }
    } 
}

/**
 * Fonction validant les regles d'age du champ "date de Naissance"
 * @param <input type="date">
 * @returns 0:valid 1:dateInFutur 2:OutofAge 
 */
function validateDateOfBirth(date_AsDate) {
    const today = new Date(Date.now()); 
    const dateMin = new Date('January 1, 2002 00:00:00 UTC'); 
    const dateMax = new Date('January 1, 1953 00:00:00 UTC');
  
    if (date_AsDate >= dateMax && date_AsDate <= dateMin) {
        return 0; 
    } else if (date_AsDate > today) {
        return 1;
    }
    else {
        return 2;
    }        
}

