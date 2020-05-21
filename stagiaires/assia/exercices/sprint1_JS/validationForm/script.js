// Validation de formulaire par Javascript

const fieldName = document.querySelector('.form-nom');
const fieldFirstName = document.querySelector('.form-prenom');
const fieldEmail = document.querySelector('.form-email');
const fieldDate = document.querySelector('.form-date');
const fieldSubmit = document.querySelector('.submit-button');
const fieldLogin = document.querySelector('.form-login');
const fieldLoginBtn = document.querySelector('login-button');

fieldSubmit.addEventListener('click', (e)=> {
    validate(fieldSubmit); 
    e.preventDefault();
});
fieldName.addEventListener('input', () => {
    console.log('listener NAME');
    validateFieldName(fieldName);
});
fieldFirstName.addEventListener('input', () => {
    validateFieldFirstName(fieldFirstName);
    console.log('listener FirstNAME');
});
fieldDate.addEventListener('input', () => {
    console.log('listener DATE');
    validateFieldDate(fieldDate);
});
fieldEmail.addEventListener('input', () => {
    validateFieldEmail(fieldEmail);
});
fieldLogin.addEventListener('input', () => {
    console.log('listener LOGIN');
    validateFieldLogin(fieldLogin);
});
//-----------------------------------------
/*function isFormValid() {
    let stateOfAllInputField = [validateFieldName, validateFieldDate];
    console.log(stateOfAllInputField);
    return !stateOfAllInputField.some((isAllValid) => {
        console.log(isAllValid);
        return !isAllValid;
    });
}*/

/**
 * Fonction validant tous les champs
 * 
 */
function validate(submitBtn) {
    submitBtn.classList.remove('valide');
    submitBtn.classList.remove('invalide');
    if (!validateFieldName(fieldName) || !validateFieldDate(fieldDate) || !validateFieldFirstName(fieldFirstName)){
        submitBtn.classList.add('invalide');
    }
    else {
        submitBtn.classList.add('valide');
    }
}

function removeClassLists(element) {
    element.classList.remove('valide');
    element.classList.remove('invalide');
    element.classList.remove('error-message');
}

/**
 * Fonction qui valide et met a jour le champ LOGIN 
 * @param {*} loginField 
 * @returns boolean
 */
function validateFieldLogin(loginField) {
    const loginInputField = loginField.querySelector('input');
    const loginValue = loginInputField.value;
    loginField.classList.remove('valide');
    loginField.classList.remove('invalide');
    loginField.classList.remove('error-required');
    loginField.classList.remove('error-min-login');
    loginField.classList.remove('error-max-login');
    loginField.classList.remove('error-login-not-unique');
    loginField.classList.remove('error-symbol-login');
    let validReturn = true;
    if (loginValue.trim() === '') {
        loginField.classList.add('invalide');
        loginField.classList.add('error-required');
        validReturn = false;
    } else {
        const loginStatus = isContentValid(loginValue); console.log('Content CASE : ' + loginStatus);
        switch (loginStatus) {
            case 0:
                loginField.classList.add('valide');
                break;
            case 1:
                loginField.classList.add('invalide');
                loginField.classList.add('error-min-login');
                validReturn = false;
                break;
            case 2:
                loginField.classList.add('invalide');
                loginField.classList.add('error-max-login');
                validReturn = false;
                break;
            case 3:
                loginField.classList.add('invalide');
                loginField.classList.add('error-symbol-login');
                validReturn = false;
                break;
        }
    }
    return validReturn; 
}
/**
 * Fonction qui valide les regles du LOGIN ou du MOT DE PASSE
 * @param {*} <login or password content>
 * @returns 0:valid, 1:too short, 2:too long, 3:invalid content
 */
function isContentValid(content) {
    const dollar = '$';
    const underscore = '_';
    const dash = '-';
    const exclamation = '!';
    if (content.length >= 3 && content.length <= 10) {
        const nonAllowedSymbolsRegex = new RegExp(/[^[:alnum:]]/i); 
        const isNonAllowedSymbols = nonAllowedSymbolsRegex.test(content);
        console.log("content pas authorise : " + isNonAllowedSymbols);
        if (isNonAllowedSymbols == Null) {
            return 0;
        } else {
            return 3;
        }
    } if (content.length < 3) {
        return 1;
    } else {
        return 2
    }
}

/**
 * Fonction qui valide et met a jour le champ EMAIL 
 * @param <div> entourant l'input email
 * @returns boolean
 */
function validateFieldEmail(emailField) {
    const emailInputField = emailField.querySelector('input');
    const emailValue = emailInputField.value;
    emailField.classList.remove('valide');
    emailField.classList.remove('invalide');
    emailField.classList.remove('error-required');
    emailField.classList.remove('error-email');
    let validReturn = true;
    if (emailValue.trim() === '') {
        emailField.classList.add('invalide');
        emailField.classList.add('error-required');
        validReturn = false;
    } else if (!isEmailValid(emailValue)) {
        emailField.classList.add('invalide');
        emailField.classList.add('error-email');
        validReturn = false;
    } else {
        emailField.classList.add('valide');
    }
    return validReturn; 
}

/**
 * Fonction qui valide les regles du champ EMAIL avec expression reguliere
 * @param <value> of email input
 * @returns boolean
 */
function isEmailValid(email) {
    const emailReg = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);
    const isValid = emailReg.test(email);
    return isValid;
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
        const valid = isNameValid(value);
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
 * Fonction validant valide et met à jour l'affichage pour le champ prenom
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldFirstName(firstnameField) {
    const firstnameInputField = firstnameField.querySelector('input');
    const value = firstnameInputField.value; 
    let validReturn = true;
    firstnameField.classList.remove('valide');
    firstnameField.classList.remove('invalide');
    firstnameField.classList.remove('error-min-length');
    firstnameField.classList.remove('error-max-length');
    if (value.trim() === '') {
        firstnameField.classList.add('valide'); //car champ facultatif
    } else {
        const valid = isNameValid(value);
        if (valid === 1) {
            firstnameField.classList.add('invalide');
            firstnameField.classList.add('error-min-length');
            validReturn = false;
        } else if (valid === 2) {
            firstnameField.classList.add('invalide');
            firstnameField.classList.add('error-max-length');
            validReturn = false;
        } else {
            firstnameField.classList.add('valide');
        }
    }
    return validReturn;
}

/**
 * Fonction validant les règles du champ nom
 */
function isNameValid(name) {
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
    const date = dateInputField.valueAsDate; console.log('Valeur champ DATE : '+date);
    let validReturn = true;
    dateField.classList.remove('valide');
    dateField.classList.remove('invalide');
    dateField.classList.remove('error-dateIsFutur');
    dateField.classList.remove('error-ageIsOut');
    dateField.classList.remove('error-required');
    if (date == null) {
        dateField.classList.add('invalide');
        dateField.classList.add('error-required');
        validReturn = false;
    } else {
        valid = isDateOfBirthValid(date);
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
    return validReturn;
}

/**
 * Fonction validant les regles d'age du champ "date de Naissance"
 * @param <input type="date">
 * @returns 0:valid 1:dateInFutur 2:OutofAge 
 */
function isDateOfBirthValid(date_AsDate) {
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