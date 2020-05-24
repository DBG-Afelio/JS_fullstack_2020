// Validation de formulaire par Javascript

const fieldName = document.querySelector('.form-nom');
const fieldFirstName = document.querySelector('.form-prenom');
const fieldEmail = document.querySelector('.form-email');
const fieldDate = document.querySelector('.form-date');
const fieldSubmit = document.querySelector('.submit-button');
const fieldLogin = document.querySelector('.form-login');
const fieldLoginBtn = document.querySelector('.login-button');
const fieldTel = document.querySelector('.form-tel');
const fieldPwd = document.querySelector('.form-mdp');
const fieldPwdConfirmed = document.querySelector('.form-mdp-confirm');
const fieldPwdStrength = document.querySelector('.form-mdp-strength');
const fieldNationality = document.querySelector('.form-nationality');
const fieldSex = document.querySelector('.form-sex');
const sexRadioAutre = document.querySelector("#autre");
const myForm = document.querySelector('#myform');

sexRadioAutre.checked = true;

fieldName.addEventListener('input', () => {
    validateFieldName(fieldName);
});
fieldFirstName.addEventListener('input', () => {
    validateFieldFirstName(fieldFirstName);
});
fieldTel.addEventListener('input', () => {
    validateFieldTel(fieldTel);
});
fieldDate.addEventListener('input', () => {
    validateFieldDate(fieldDate);
});
fieldEmail.addEventListener('input', () => {
    validateFieldEmail(fieldEmail);
});
fieldLogin.addEventListener('input', () => {
    validateFieldLogin(fieldLogin);
});
fieldLoginBtn.addEventListener('click', () => {
    suggestLogin(fieldFirstName, fieldName, fieldLogin);
});
fieldPwd.addEventListener('input', () => {
    validateFieldPassword(fieldPwd, fieldPwdStrength);
});
fieldPwdConfirmed.addEventListener('input', () => {
    validateFieldPasswordConfirmation(fieldPwd, fieldPwdConfirmed);
});
fieldNationality.addEventListener('change', () => {
    validateFieldNationality(fieldNationality);
});
fieldSex.addEventListener('input', () => {
    validateFieldSex(fieldSex, sexRadioAutre);
});

fieldSubmit.addEventListener('click', (e)=> {
    e.preventDefault();
    validate(fieldSubmit); 
});

//-----------------------------------------
/**
 * Fonction validant tous les champs
 * 
 */
function validate(submitBtn) {
    let allFieldsStatus = [validateFieldName(fieldName), validateFieldFirstName(fieldFirstName), validateFieldTel(fieldTel), validateFieldEmail(fieldEmail), validateFieldDate(fieldDate), validateFieldLogin(fieldLogin), validateFieldPassword(fieldPwd, fieldPwdStrength), validateFieldPasswordConfirmation(fieldPwd, fieldPwdConfirmed), validateFieldNationality(fieldNationality), validateFieldSex(fieldSex, sexRadioAutre)];
 
    let isNotValid = allFieldsStatus.includes(false);
    console.log(isNotValid);
    submitBtn.classList.remove('invalide-form', 'valide-form');
    if (isNotValid) {
        submitBtn.classList.add('invalide-form');
    }
    else {
        submitBtn.classList.add('valide-form');
    }
}


function removeUserMessages(element) {
    element.classList.remove('valide', 'invalide', 'error-required', 'error-min-login', 'error-max-login', 'error-login-used', 'error-pattern', 'error-tel', 'error-different-pwd', 'error-email', 'error-min-length', 'error-max-length', 'error-dateIsFutur', 'error-ageIsOut', 'mdp-faible', 'mdp-moyen', 'mdp-fort');
}
function validateFieldSex(sexField, optionAutre) {
    const isAutreChecked = optionAutre.checked;
    let validReturn = true;
    removeUserMessages(sexField);
    if (isAutreChecked) {
        sexField.classList.add('invalide', 'error-required');
        validReturn = false;
    } else {
        sexField.classList.add('valide');
    }
    return validReturn; 
}
function validateFieldNationality(nationalityField) {
    const nationSelectField = nationalityField.querySelector('select');
    const nationSelected = nationSelectField.value; 
    let validReturn = true;
    removeUserMessages(nationalityField);
    if (nationSelected === 'nothingSelected') {
        nationalityField.classList.add('invalide', 'error-required');
        validReturn = false;
    } else {
        nationalityField.classList.add('valide');
    }
    return validReturn;
}
/**
 * fonction qui valide et met a jour le champ TEL
 * @param 
 * @returns boolean
 */
function validateFieldTel(telField) {
    const telInputField = telField.querySelector('input');
    const telValue = telInputField.value;
    removeUserMessages(telField);
    let validReturn = true;

    if (telValue.trim() == '') {
        telField.classList.add('invalide', 'error-required');
        validReturn = false;
    } else {
        let valid = isTelValid(telValue);
        if (valid) {
            telField.classList.add('valide');
        } else {
            telField.classList.add('invalide', 'error-tel');
            validReturn = false;
        }
    }
    return validReturn;
}
/**
 * Fonction qui valide le numero de tel a partir d'un pattern (+32 ou 0032 ou 0)+(6 a 9 digit sauf 0)
 * @param 
 * @returns boolean
 */
function isTelValid(telNumber) {
    const patternTel = new RegExp(/(?:(^([+32]{3}|[0032]{4}|[0])([1-9])([0-9]{5,8})$))/g);
    const isValid = patternTel.test(telNumber); console.log('isTelValid fct ? : ' +isValid);
    return isValid;
}

function suggestLogin(firstNameField, lastNameField, loginField) {
    const firstName = firstNameField.querySelector('input').value;
    const lastName = lastNameField.querySelector('input').value;
    const loginGenerated = firstName.charAt(0) + lastName.substr(0, 2) + '_' + (Math.floor(Math.random() * (999 - 100 + 1)) + 100); //random entre 100 et 999 pour les 3digits
    const loginInputField = loginField.querySelector('input');
    loginInputField.value = loginGenerated;
    validateFieldLogin(loginField);
}

/**
 * Fonction qui valide et met a jour le champ LOGIN 
 * @param {*} loginField 
 * @returns boolean
 */
function validateFieldLogin(loginField) {
    const loginUsedList = ['abcdef12', 'J54f_$g67', '82j!u-Z']; //pour les tests
    const loginInputField = loginField.querySelector('input');
    const loginValue = loginInputField.value;
    const hasLoginBeenUsed = loginUsedList.includes(loginValue);
    removeUserMessages(loginField);
    let validReturn = true;
    
    if (loginValue.trim() === '') {
        loginField.classList.add('invalide', 'error-required');
        validReturn = false;
    } else if (hasLoginBeenUsed) {
        loginField.classList.add('invalide', 'error-login-used');
        validReturn = false;
    } else {
        let loginStatus = isContentValid(loginValue); console.log('Content CASE : ' + loginStatus);
        switch (loginStatus) {
            case 0:
                loginField.classList.add('valide');
                break;
            case 1:
                loginField.classList.add('invalide', 'error-pattern');
                validReturn = false;
                break;
            case 2:
                loginField.classList.add('invalide', 'error-min-login');
                validReturn = false;
                break;
            case 3:
                loginField.classList.add('invalide', 'error-min-login', 'error-pattern');
                validReturn = false;
                break;
            case 4:
                loginField.classList.add('invalide', 'error-max-login');
                validReturn = false;
                break;
            case 5:
                loginField.classList.add('invalide', 'error-max-login', 'error-pattern');
                validReturn = false;
                break;
        }
    }
    return validReturn; 
}

function validateFieldPassword(pwdField, strengthPwdField) {
    const pwdInputField = pwdField.querySelector('input');
    const pwdValue = pwdInputField.value;
    removeUserMessages(pwdField);
    removeUserMessages(strengthPwdField);
    let validReturn = true;
    if (pwdValue.trim() === '') {
        pwdField.classList.add('invalide', 'error-required');
        validReturn = false;
    } else {
        const pwdStatus = isContentValid(pwdValue); 
        switch (pwdStatus) {
            case 0:
                pwdField.classList.add('valide');
                switch (getPasswordStrength(pwdValue)) {
                    case 1:
                        strengthPwdField.classList.add('mdp-faible');
                        break;
                    case 2:
                        strengthPwdField.classList.add('mdp-moyen');
                        break;
                    case 3:
                        strengthPwdField.classList.add('mdp-fort');
                        break;
                }
                break;
            case 1:
                pwdField.classList.add('invalide', 'error-pattern');
                validReturn = false;
                break;
            case 2:
                pwdField.classList.add('invalide', 'error-min-login');
                validReturn = false;
                break;
            case 3:
                pwdField.classList.add('invalide', 'error-min-login', 'error-pattern');
                validReturn = false;
                break;
            case 4:
                pwdField.classList.add('invalide', 'error-max-login');
                validReturn = false;
                break;
            case 5:
                pwdField.classList.add('invalide', 'error-max-login', 'error-pattern');
                validReturn = false;
                break;
        }
    }
    return validReturn; 
}

function validateFieldPasswordConfirmation(pwdField, pdwConfField) {
    const pwdInputField = pwdField.querySelector('Input');
    const pwdValue = pwdInputField.value;
    const pwdConfInputField = pdwConfField.querySelector('input');
    const pwdConfValue = pwdConfInputField.value;
    let validReturn = true;
    removeUserMessages(pdwConfField);
    if (pwdConfValue.trim() == '') {
        pdwConfField.classList.add('invalide', 'error-required');
        validReturn = false;
    } else {
        const status = (pwdConfStatus(pwdValue, pwdConfValue));
        switch (status) {
            case 0:
                pdwConfField.classList.add('valide');
                break;
            case 1:
                pdwConfField.classList.add('invalide');
                validReturn = false;
                break;
            case 2:
                pdwConfField.classList.add('invalide', 'error-different-pwd');
                validReturn = false;
                break;
        }
    }
    return validReturn;
}

function pwdConfStatus(pwd1, pwd2) {
    if (pwd2 === pwd1) {
        return 0; //both equal - stop typing
    } else {
        if (pwd2 === pwd1.substr(0, (pwd2.length))) {
            return 1; // typing ongoing is correct so far but not done yet
        } else {
            return 2; // mismatch detected
        }
    }
}
/**
 * Fonction qui determine la robustesse du mot de passe
 * @param {string} password 
 * @returns 1:Faible, 2:Moyen, 3:Fort
 */
function getPasswordStrength(password) {
    const regex = RegExp(/(?<letters>[a-zA-Z])*(?<digits>[0-9])*(?<symbols>[-_!$])*/);
    const matches = password.match(regex);

    const isLetters = matches.groups.letters;
    const isDigits = matches.groups.digits;
    const isSymbols = matches.groups.symbols;
    
    let l = isLetters != undefined ? 1 : 0;
    let d = isDigits != undefined ? 1 : 0;
    let s = isSymbols != undefined ? 1 : 0;
    return l + d + s;
}

/**
 * Fonction qui valide les regles du LOGIN ou du MOT DE PASSE
 * @param  
 * @returns 0-5 cases, 0 = only valid case
 */
function isContentValid(content) { 
    const min = 6;
    const max = 10;
    if (content.length >= min && content.length <= max) {
        if (!isPatternWrong(content)) {
            return 0; //Valid
        } else {
            return 1; //Right length but doesn't match pattern 
        }
    } else if (content.length < min) { 
        if (!isPatternWrong(content)) {
            return 2;   //Too short but matches pattern 
        } else {
            return 3;   //Too short and doesn't match pattern 
        }
    } else {
        if (!isPatternWrong(content)) {
            return 4;   //Too long but matches pattern 
        } else {
            return 5;   //Too long and doesn't match pattern 
        }
    }
}

/**
 * Fonction qui valide le contenu du LOGIN ou du MOT DE PASSE
 * @param <login or password content>
 * @returns 0:valid, 1:invalid content
 */
function isPatternWrong(string) {
    const regex = new RegExp(/[^a-zA-Z0-9-_!$]/g); 
    const isWrong = regex.test(string); console.log('is missmatch pattern ? :' +isWrong);
    return isWrong;
}

/**
 * Fonction qui valide et met a jour le champ EMAIL 
 * @param <div> entourant l'input email
 * @returns boolean
 */
function validateFieldEmail(emailField) {
    const emailInputField = emailField.querySelector('input');
    const emailValue = emailInputField.value;
    removeUserMessages(emailField);
    let validReturn = true;
    if (emailValue.trim() === '') {
        emailField.classList.add('invalide', 'error-required');
        validReturn = false;
    } else if (!isEmailValid(emailValue)) {
        emailField.classList.add('invalide', 'error-email');
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
    const emailReg = new RegExp(/^([\w-\.]+)@((?:[\w-]+\.)+)([a-zA-Z]{2,})/i);
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
    removeUserMessages(nameField);
    if (value.trim() === '') {
        nameField.classList.add('invalide', 'error-required');
        validReturn = false;
    } else {
        const valid = isNameValid(value);
        if (valid === 1) {
            nameField.classList.add('invalide', 'error-min-length');
            validReturn = false;
        } else if(valid === 2) {
            nameField.classList.add('invalide', 'error-max-length');
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
    removeUserMessages(firstnameField);
    if (value.trim() === '') {
        firstnameField.classList.add('valide'); //car champ facultatif
    } else {
        const valid = isNameValid(value);
        if (valid === 1) {
            firstnameField.classList.add('invalide', 'error-min-length');
            validReturn = false;
        } else if (valid === 2) {
            firstnameField.classList.add('invalide', 'error-max-length');
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
    const min = 3;
    const max = 50;
    if (name.length >= min && name.length <= max) {
        return 0;
    } else if (name.length < min) {
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
    removeUserMessages(dateField);
    if (date == null) {
        dateField.classList.add('invalide', 'error-required');
        validReturn = false;
    } else {
        valid = isDateOfBirthValid(date);
        if (valid == 0) {
            dateField.classList.add('valide');
        } else if (valid == 1) {
            dateField.classList.add('invalide', 'error-dateIsFutur');
            validReturn = false;
        } else {
            dateField.classList.add('invalide', 'error-ageIsOut');
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