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
const summaryCardForm = document.querySelector('#summary-card');
const validerSummaryBtn = document.querySelector('.card-valider-btn');
const modifierSummaryBtn = document.querySelector('.card-modifier-btn');

sexRadioAutre.checked = true;
let today = new Date();

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
    validate(fieldSubmit, fieldName, fieldFirstName, fieldDate, fieldNationality, fieldSex, sexRadioAutre, fieldEmail, fieldLogin, fieldTel, fieldPwd, fieldPwdConfirmed, fieldPwdStrength, summaryCardForm); 
});
validerSummaryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Vos donnees ont bien ete enregistrees. Merci de votre visite.');
});
modifierSummaryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modifierInfo(myForm,summaryCardForm) ;
    
    
});

//-----------------------------------------
/**
 * Fonction validant tous les champs
 * 
 */
function validate(submitBtn, nameF, firstNameF, dateF, nationF, sexF, statusAutre, emailF, loginF, telF, pwdF, pwdConfF, pwdStrengthF, formOutput) {

    let allFieldsStatus = [validateFieldName(nameF), validateFieldFirstName(firstNameF), validateFieldTel(telF), validateFieldEmail(emailF), validateFieldDate(dateF), validateFieldLogin(loginF), validateFieldPassword(pwdF, pwdStrengthF), validateFieldPasswordConfirmation(pwdF, pwdConfF), validateFieldNationality(nationF), validateFieldSex(sexF, statusAutre)];
    let isNotValid = allFieldsStatus.includes(false);

    submitBtn.classList.remove('invalide-form', 'valide-form');
    formOutput.classList.remove('show');

    if (isNotValid) {
        submitBtn.classList.add('invalide-form');
    }
    else {
        submitBtn.classList.add('valide-form');
        //appel fct resumeCard
        const nom = nameF.querySelector('input');
        const prenom = firstNameF.querySelector('input');
        const date = dateF.querySelector('input');
        const nation = nationF.querySelector('select');
        const sex = sexF.querySelector('input');
        const tel = telF.querySelector('input');
        const email = emailF.querySelector('input');
        const login = loginF.querySelector('input');
        const myOutputs = formOutput.querySelectorAll('output');

        let ageTimeMs = today.getTime() - new Date(date.valueAsDate).getTime(); //en ms
        let ageFloat = ageTimeMs / 1000 / 60 / 60 / 24 / 365; //en 'annee,decimale'
        let age = Math.floor(ageFloat) + ' ans';

        myOutputs[0].value = nom.value;
        myOutputs[1].value = prenom.value;
        myOutputs[2].value = age;
        myOutputs[3].value = sex.value;
        myOutputs[4].value = nation.value;
        myOutputs[5].value = email.value;
        myOutputs[6].value = tel.value;
        myOutputs[7].value = login.value;

        formOutput.classList.add('show');
    }

}

function modifierInfo(formInput, formOutput) {
    formOutput.classList.remove('show');
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
    const patternTel = new RegExp(/^(\+32|0032|0)([1-9][0-9]{5,8})$/g);
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
        let loginStatus = isContentValid(loginValue); console.log('Login status : ' + loginStatus);
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
    console.log(password);

    //let matchAZ = password.match(/[a-zA-Z]/); console.log('AZ'+matchAZ);
   // let match09 = password.match(/[0-9]/); console.log('09'+match09);
   // let matchSi = password.match(/[!$-_]/); console.log('sign'+matchSi);

    let isLetters = password.match(/[a-zA-Z]/) !== null ? 1 : 0; console.log(isLetters);
    let isDigits = password.match(/[0-9]/) !== null ? 1 : 0; console.log(isDigits);
    let isSymbols = password.match(/[!]|[$]|[-]|[_]/) !== null ? 1 : 0; console.log(isSymbols);
    return (isLetters + isDigits + isSymbols);    
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
    //(/^([\w-\.]+)@((?:[\w-]+\.)+)([a-zA-Z]{2,})/i)
    const emailReg = new RegExp(/^\w+(\.\w+)*(\-\w+)*@\w+(\.\w+)*(\.[a-zA-Z]{2,})$/);
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
    const date = dateInputField.value; console.log('Valeur champ DATE : '+date);
    let validReturn = true;
    removeUserMessages(dateField);
    if (date == null) {
        dateField.classList.add('invalide', 'error-required');
        validReturn = false;
    } else {
        condition = validateDate(date);

        switch (condition) {
            case 0:
                dateField.classList.add('valide');
                break;
            case 1:
                dateField.classList.add('invalide', 'error-dateIsFutur');
                validReturn = false;
                break;
            case 2:
                validReturn = false;
                dateField.classList.add('invalide', 'error-ageIsOut'); //trop jeune
                break;
            case 3:
                validReturn = false;
                dateField.classList.add('invalide', 'error-ageIsOut');//trop vieux
                break;
        }
    }
    return validReturn;
}
/**
 * Fonction validant les règles du champ date
 */
function validateDate(date) {
  //  let ageTime = today.getTime() - new Date(date).getTime(); //en ms
  //  let age = ageTime / 1000 / 60 / 60 / 24 / 365; //en 'annee,decimale'
    const dateMs = new Date(date).getTime();
   
    const january = new Date('01/01/'+today.getFullYear()); //date a partir de laquelle on verfie que l'age soit >18 ou <67
    let ageJanuaryTime = january.getTime() - dateMs; //age de la personne au 1/1/annee en cours (ms)
    let ageJanuary = ageJanuaryTime / 1000 / 60 / 60 / 24 / 365; // en annee

    if (ageJanuary >= 18 && ageJanuary < 67) {
        return 0;
    } else if (dateMs > today.getTime()) {
        return 1;
    } else if (ageJanuary < 18) {
        return 2;
    } else {
        return 3;
    }
}
/*
function isValidDate(date) {
    //valide la veracite de la valeur date (exclue 32 janvier par ex...) et que date ne soit pas dans le futur
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let lastDays = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
    lastDays[1] = isBissextile(year) ? 29 : 28;

    return month >= 0 && month <= 11 && day >= 0 && day <= lastDays[month] && date.getTime() < today.getTime();
}

function isBissextile(year) {
    //permettra de definir le dernier jour de Fevrier (28 ou 29) en fonction de l'annee entree en param
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
*/