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
const fieldNationality = document.querySelector('.form-nationality');

fieldSubmit.addEventListener('click', (e)=> {
    validate(fieldSubmit); 
    e.preventDefault();
});
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
    validateFieldPassword(fieldPwd);
});
fieldPwdConfirmed.addEventListener('input', () => {
    validateFieldPasswordConfirmation(fieldPwd, fieldPwdConfirmed);
});
fieldNationality.addEventListener('change', () => {
    validateFieldNationality(fieldNationality);
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

function validateFieldNationality(nationalityField) {
    const nationSelectField = nationalityField.querySelector('select');
    const nationSelected = nationSelectField.value; 
    const validReturn = true;
    nationalityField.classList.remove('valide');
    nationalityField.classList.remove('invalide');
    nationalityField.classList.remove('error-required');
    if (nationSelected == 'nothingSelected') {
        nationalityField.classList.add('invalide');
        nationalityField.classList.add('error-required');
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
    console.log('telValue : ' + telValue);
    telField.classList.remove('valide');
    telField.classList.remove('invalide');
    telField.classList.remove('error-required');
    telField.classList.remove('error-tel');
    let validReturn = true;
    if (telValue.trim == '') {
        telField.classList.add('invalide');
        telField.classList.add('error-required');
        validReturn = false;
    } else {
        const isValid = isTelValid(telValue); console.log('isValid : ' + isValid);
        // BUG :why isValid = false when isTelValid() returns true ????
        if (isValid) {
            telField.classList.add('valide');
        } else {
            telField.classList.add('invalide');
            telField.classList.add('error-tel');
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
    const patternTel = new RegExp(/(?:(^([+32]{3}|[0032]{4}|[0])([1-9]{6,9})$))/g);
    console.log('return pattern tel : ' + (patternTel.test(telNumber)));
    return patternTel.test(telNumber);
}

function suggestLogin(firstNameField, lastNameField, loginField) {
    const firstName = firstNameField.querySelector('input').value;
    const lastName = lastNameField.querySelector('input').value;
    const loginGenerated = firstName.charAt(0) + lastName.substr(0, 2) + '_' + (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
    console.log(loginGenerated);
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
    const loginUsedList = ['abcdef12', 'J54f_$g67', '82j!u-Z'];
    const loginInputField = loginField.querySelector('input');
    const loginValue = loginInputField.value;
    const hasLoginBeenUsed = loginUsedList.includes(loginValue);
    loginField.classList.remove('valide');
    loginField.classList.remove('invalide');
    loginField.classList.remove('error-required');
    loginField.classList.remove('error-min-login');
    loginField.classList.remove('error-max-login');
    loginField.classList.remove('error-login-used');
    loginField.classList.remove('error-pattern');
    let validReturn = true;
    console.log('methode includes : '+hasLoginBeenUsed);
    if (loginValue.trim() === '') {
        loginField.classList.add('invalide');
        loginField.classList.add('error-required');
        validReturn = false;
    } else if (hasLoginBeenUsed) {
        loginField.classList.add('invalide');
        loginField.classList.add('error-login-used');
        validReturn = false;
    } else {
        const loginStatus = isContentValid(loginValue); console.log('Content CASE : ' + loginStatus);
        switch (loginStatus) {
            case 0:
                loginField.classList.add('valide');
                break;
            case 1:
                loginField.classList.add('invalide');
                loginField.classList.add('error-pattern');
                validReturn = false;
                break;
            case 2:
                loginField.classList.add('invalide');
                loginField.classList.add('error-min-login');
                validReturn = false;
                break;
            case 3:
                loginField.classList.add('invalide');
                loginField.classList.add('error-min-login');
                loginField.classList.add('error-pattern');
                validReturn = false;
                break;
            case 4:
                loginField.classList.add('invalide');
                loginField.classList.add('error-max-login');
                validReturn = false;
                break;
            case 5:
                loginField.classList.add('invalide');
                loginField.classList.add('error-max-login');
                loginField.classList.add('error-pattern');
                validReturn = false;
                break;
        }
    }
    return validReturn; 
}

function validateFieldPassword(pwdField) {
    const pwdInputField = pwdField.querySelector('input');
    const pwdValue = pwdInputField.value;
    pwdField.classList.remove('valide');
    pwdField.classList.remove('invalide');
    pwdField.classList.remove('error-required');
    pwdField.classList.remove('error-min-login');
    pwdField.classList.remove('error-max-login');
    pwdField.classList.remove('error-pattern');
    let validReturn = true;
    if (pwdValue.trim() === '') {
        pwdField.classList.add('invalide');
        pwdField.classList.add('error-required');
        validReturn = false;
    } else {
        const pwdStatus = isContentValid(pwdValue); 
        switch (pwdStatus) {
            case 0:
                pwdField.classList.add('valide');
                break;
            case 1:
                pwdField.classList.add('invalide');
                pwdField.classList.add('error-pattern');
                validReturn = false;
                break;
            case 2:
                pwdField.classList.add('invalide');
                pwdField.classList.add('error-min-login');
                validReturn = false;
                break;
            case 3:
                pwdField.classList.add('invalide');
                pwdField.classList.add('error-min-login');
                pwdField.classList.add('error-pattern');
                validReturn = false;
                break;
            case 4:
                pwdField.classList.add('invalide');
                pwdField.classList.add('error-max-login');
                validReturn = false;
                break;
            case 5:
                pwdField.classList.add('invalide');
                pwdField.classList.add('error-max-login');
                pwdField.classList.add('error-pattern');
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
    pdwConfField.classList.remove('valide');
    pdwConfField.classList.remove('invalide');
    pdwConfField.classList.remove('error-required');
    pdwConfField.classList.remove('error-different-pwd');
    if (pwdConfValue.trim() == '') {
        pdwConfField.classList.add('invalide');
        pdwConfField.classList.add('error-required');
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
                pdwConfField.classList.add('invalide');
                pdwConfField.classList.add('error-different-pwd');
                validReturn = false;
                break;
        }
    }
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

function setPasswordStrength(password) {
    //const regExpLetters = new RegExp(/[a-zA-Z]/i);
  //  const pattern = RegExp(/(?<letters>[a-zA-Z]{6,10})|(?<digits>[0-9]{6,10})|(?<symbols>[-_!$]{6,10})/);
    
   // const groupsExp = password.matchAll(pattern).groups;
 //   const match = pattern.exec(password);
 //   return match;
   // const isLetters = groupsExp.letters;
  //  const isDigits = groupsExp.digits;
  //  const isSymbols = groupsExp.symbols;

  //  console.log('letters = '+isLetters, 'digits = '+isDigits, 'Symbols = '+isSymbols);
}

/**
 * Fonction qui valide les regles du LOGIN ou du MOT DE PASSE
 * @param <login or password content>
 * @returns 0-5 cases, 0 = only valid case
 */
function isContentValid(content) { 
    if (content.length >= 3 && content.length <= 10) {
        if (!isPatternWrong(content)) {
            return 0; //Valid
        } else {
            return 1; //Right length but doesn't match pattern 
        }
    } else if (content.length < 3) { 
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
    const regex = new RegExp(/[^a-zA-Z0-9-_!$]/i); 
    const isWrong = regex.test(string); 
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