const fieldName = document.querySelector('.form-nom');
const fieldFirstName = document.querySelector('.form-prenom');
const fieldEmail = document.querySelector('.form-email');
const fieldDate = document.querySelector('.form-date');
const fieldPhone = document.querySelector('.form-phone');
const fieldLogin = document.querySelector('.form-login');
const fieldPassword = document.querySelector('.form-password');
const fieldNationality = document.querySelector('.form-nationality');
const fieldSex = document.querySelector('.form-sex');
const fieldRole = document.querySelector('.form-role');
const fieldRoles = fieldRole.querySelectorAll('input');
const fieldAvatar = document.querySelector('.form-avatar');
const oForm = document.querySelector('form');

const fieldSubmit = document.querySelector('.submit-button');
const pristineField = document.querySelectorAll('[data-pristine=true]');
const today = new Date();
const usedLogin = ['Assia0', 'Benoit', 'Florent', 'Haroon', 'Nicolas', 'Jerome', 'Kevin0', 'Pierre', 'Thomas', 'Denis0'];
const oSugestButton = document.querySelector('#sugestButton');
const oForce = document.querySelectorAll('.force');
const avatarInputField = fieldAvatar.querySelector('#avatarPosition');
const oAvatars = fieldAvatar.querySelector('.avatars img');
const oAvatar = fieldAvatar.querySelector('.avatar img');

const infoName = document.querySelector('.info-nom');
const infoFirstName = document.querySelector('.info-prenom');
const infoEmail = document.querySelector('.info-email');
const infoDate = document.querySelector('.info-date');
const infoPhone = document.querySelector('.info-phone');
const infoAge = document.querySelector('.info-age');
const infoLogin = document.querySelector('.info-login');
const infoPassword = document.querySelector('.info-password');
const infoNationality = document.querySelector('.info-nationality');
const infoSex = document.querySelector('.info-sex');
const infoRole = document.querySelector('.info-role');
const infoAvatar = document.querySelector('.info-avatar');
const oModify = document.querySelector('.modify');
const modify = function (e) {
    oForm.classList.remove('complete');
    oForm.classList.add('incomplete');
    e.preventDefault();
}

const submit = function (e) {
    e.preventDefault();
    if (oForm.classList.contains('incomplete')) {
        validate();
    } else {
        sendForm();
    }
}

oSugestButton.addEventListener('click', (e)=> {
    e.preventDefault();
    suggest();
});

fieldSubmit.addEventListener('click', submit);

fieldName.addEventListener('input', ()=> {
    validateFieldName(fieldName);
});

fieldFirstName.addEventListener('input', ()=> {
    validateFieldFirstName(fieldFirstName);
});

fieldEmail.addEventListener('input', ()=> {
    validateFieldEmail(fieldEmail);
})

fieldDate.addEventListener('input', ()=> {
    validateFieldDate(fieldDate);
})

fieldLogin.addEventListener('input', ()=> {
    validateFieldLogin(fieldLogin);
});

fieldPassword.addEventListener('input', ()=> {
    validateFieldPassword(fieldPassword);
})

fieldNationality.addEventListener('change', ()=> {
    validateFieldNationality(fieldNationality);
})

fieldSex.addEventListener('change', ()=> {
    validateFieldSex(fieldSex);
})

fieldRoles.forEach((role) => { 
    role.addEventListener('click', () => {
        changeRoles(role);
        validateFieldRoles(fieldRole);
    });
});

oModify.addEventListener('click', modify);

fieldAvatar.addEventListener('change', ()=> {
    validateFieldAvatar(fieldAvatar);
})

oAvatars.addEventListener('click', (e) => {
    getAvatar(e);
})

const pristine = (e) => {
    e.target.setAttribute('data-pristine', false);
    e.target.removeEventListener('blur', pristine);
};

pristineField.forEach((field) => {
    field.addEventListener('blur', pristine);
});

/**
 * Fonction validant tous les champs
 */
function validate() {
    let msg = '';
    
    if (!validateFieldName(fieldName)){
        msg += '- Nom\n';
    }

    if (!validateFieldFirstName(fieldFirstName)){
        msg += '- Prénom\n';
    }

    if (!validateFieldEmail(fieldEmail)){
        msg += '- E-mail\n';
    }

    if (!validateFieldDate(fieldDate)){
        msg += '- Date de naissance\n';
    }

    if (!validateFieldPhone(fieldPhone)){
        msg += '- Numéro de téléphone\n';
    }

    if (!validateFieldLogin(fieldLogin)){
        msg += '- Pseudo\n';
    }

    if (!validateFieldPassword(fieldPassword)){
        msg += '- Mot de passe\n';
    }

    if (!validateFieldNationality(fieldNationality)){
        msg += '- Nationalité\n';
    }

    if (!validateFieldSex(fieldSex)){
        msg += '- Genre\n';
    }

    if (!validateFieldRoles(fieldRole)){
        msg += '- Fonctions\n';
    }

    if (!validateFieldAvatar(fieldAvatar)){
        msg += '- Avatar\n';
    }

    if (msg !== '') {
        msg = 'Les champs suivants sont à remplir correctement\n'+msg;
        alert(msg);
        return false;
    } else {
        TransfertData();
        oForm.classList.remove('incomplete');
        oForm.classList.add('complete');
    }
}

/**
 * Fonction qui les classes valide/invalide et error
 */
function removeErrors(field) {
    Array.from(field.classList).forEach((className) => {
        if (className.indexOf('valide') > -1 || className.indexOf('error') > -1) {
            field.classList.remove(className);
        }
    });
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
    removeErrors(nameField);

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
        } else if (valid === 2) {
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
 * Fonction validant valide et met à jour l'affichage pour le champ prenom
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldFirstName(firstNameField) {
    const firstNameInputField = firstNameField.querySelector('input');
    const value = firstNameInputField.value;
    let validReturn = true;
    removeErrors(firstNameField);
    const valid = validateFirstName(value);
    if (valid === 1) {
        firstNameField.classList.add('invalide');
        firstNameField.classList.add('error-min-length');
        validReturn = false;
    } else if (valid === 2) {
        firstNameField.classList.add('invalide');
        firstNameField.classList.add('error-max-length');
        validReturn = false;
    } else {
        firstNameField.classList.add('valide');
    }
    
    return validReturn;
}

/**
 * Fonction validant les règles du champ prenom
 */
function validateFirstName(firstName) {
    if (firstName.length >= 3 && firstName.length <= 50 || firstName.length === 0) {
        return 0;
    } else if (firstName.length < 3) {
        return 1;
    } else {
        return 2;
    }
}


/**
 * Fonction validant valide et met à jour l'affichage pour le champ email
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldEmail(emailField) {
    const emailInputField = emailField.querySelector('input');
    const value = emailInputField.value;
    let validReturn = true;
    removeErrors(emailField);
    const valid = validateEmail(value);
    if (valid === 1) {
        emailField.classList.add('invalide');
        emailField.classList.add('error-format');
        validReturn = false;
    } else {
        emailField.classList.add('valide');
    }
    
    return validReturn;
}

/**
 * Fonction validant les règles du champ email
 */
function validateEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/;
    if (regex.test(email) || email.trim() === '') {
        return 0;
    } else {
        return 1;
    }
}


/**
 * Fonction validant valide et met à jour l'affichage pour le champ date
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldDate(dateField) {
    const dateInputField = dateField.querySelector('input');
    const value = dateInputField.value;
    let validReturn = true;
    removeErrors(dateField);

    const valid = validateDate(value);
    if (valid === 1) {
        dateField.classList.add('invalide');
        dateField.classList.add('error-format');
        validReturn = false;
    } else if (valid === 2) {
        dateField.classList.add('invalide');
        dateField.classList.add('error-min-age');
        validReturn = false;
    } else if (valid === 3) {
        dateField.classList.add('invalide');
        dateField.classList.add('error-max-age');
        validReturn = false;
    } else {
        dateField.classList.add('valide');
    }
    
    return validReturn;
}

/**
 * Fonction validant les règles du champ date
 */
function validateDate(date) {
    
    let ageTime = today.getTime() - new Date(date).getTime();
    let age = ageTime / 1000 / 60 / 60 / 24 / 365;

    const january = new Date('01/01/'+today.getFullYear()); 
    let ageJanuaryTime = january.getTime() - new Date(date).getTime();
    let ageJanuary = ageJanuaryTime / 1000 / 60 / 60 / 24 / 365;
    
    if (isValidDate(date) && age >= 18 && ageJanuary < 67) {
        return 0;
    } else if (!isValidDate(date)) {
        return 1;
    } else if (age < 18) {
        return 2;
    } else {
        return 3
    }
}

function isValidDate(date) {
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let lastDays = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
    lastDays[1] = isBissextile(year) ? 29 : 28;

    return month >= 0 && month <= 11 && day >= 0 && day <= lastDays[month] && date.getTime() < today.getTime();
}

function isBissextile(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}



/**
 * Fonction validant valide et met à jour l'affichage pour le champ telephone
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldPhone(phoneField) {
    const phoneInputField = phoneField.querySelector('input');
    const value = phoneInputField.value;
    let validReturn = true;
    removeErrors(phoneField);
    const valid = validatePhone(value);
    if (valid === 1) {
        phoneField.classList.add('invalide');
        phoneField.classList.add('error-format');
        validReturn = false;
    } else {
        phoneField.classList.add('valide');
    }
    
    return validReturn;
}

/**
 * Fonction validant les règles du champ telephone
 */
function validatePhone(phone) {
    const regex = /^((00|\+)32|0){1}([1-9]{1})\d{5,9}$/;
    if (regex.test(phone) || phone.trim() === '') {
        return 0;
    } else {
        return 1;
    }
}

/**
 * Fonction validant valide et met à jour l'affichage pour le champ login
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldLogin(loginField) {
    const loginInputField = loginField.querySelector('input');
    const value = loginInputField.value;
    let validReturn = true;
    removeErrors(loginField);

    if (value.trim() === '') {
        loginField.classList.add('invalide');
        loginField.classList.add('error-required');
        validReturn = false;
    } else {
        const valid = validateLogin(value);
        if (valid === 1) {
            loginField.classList.add('invalide');
            loginField.classList.add('error-not-available');
            validReturn = false;
        } else if (valid === 2) {
            loginField.classList.add('invalide');
            loginField.classList.add('error-format');
            validReturn = false;
        } else {
            loginField.classList.add('valide');
        }
    }

    return validReturn;
}

/**
 * Fonction validant les règles du champ login
 */
function validateLogin(login) {
    
    if (!usedLogin.includes(login) && isValidLogin(login)) {
        return 0;
    } else if (usedLogin.includes(login)) {
        return 1;
    } else {
        return 2;
    }
}

function suggest() {
    const nameInputField = fieldName.querySelector('input');
    const firstNameInputField = fieldFirstName.querySelector('input');

    let login = nameInputField.value.substring(0,2)+firstNameInputField.value.substring(0,1)+"_";
    let available = false;
    while (!available) {
        login += addChar(7-login.length);
        if (!usedLogin.includes(login)) {
            available = true;
        }
    }
    
    fieldLogin.querySelector('input').value = login;
    fieldLogin.dispatchEvent(new Event('input'));
}

function isValidLogin(login) {
    const regex = /^[a-zA-Z0-9_\-!\$]{6,10}$/;
    return regex.test(login)
}

function addChar(nb) {
    let randomChar = '';
    for (let i = 0; i < nb; i++) {
        randomChar = randomChar.concat(Math.floor(Math.random()*10));
    }

    return randomChar;
}



/**
 * Fonction validant valide et met à jour l'affichage pour le champ password
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldPassword(passwordField) {
    const passwordInputField = passwordField.querySelector('input');
    const value = passwordInputField.value;
    let validReturn = true;
    removeErrors(passwordField);

    if (value.trim() === '') {
        passwordField.classList.add('invalide');
        passwordField.classList.add('error-required');
        validReturn = false;
    } else {
        const valid = validatePassword(value);
        if (valid === 1) {
            passwordField.classList.add('invalide');
            passwordField.classList.add('error-difference');
            validReturn = false;
        } else if (valid === 2) {
            passwordField.classList.add('invalide');
            passwordField.classList.add('error-format');
            validReturn = false;
        } else {
            passwordField.classList.add('valide');
            
        }
    }
    getForce(value);

    return validReturn;
}

/**
 * Fonction validant les règles du champ password
 */
function validatePassword(password) {
    let repeat = fieldPassword.querySelector('#repeat').value;
    if (repeat === password && isValidPassword(password)) {
        return 0;
    } else if (repeat !== password) {
        return 1;
    } else {
        return 2;
    }
}

function isValidPassword(password) {
    const regex = /^[a-zA-Z0-9_\-!\$]{6,10}$/;
    return regex.test(password);
}

function getForce(value) {
    let force = 0;
    if (isValidPassword(value)) {
        if (value.match(/[0-9]/) !== null) {
            force++;
        }; 
        if (value.match(/[a-z]/i) !== null) {
            force++; 
        }; 
        if (value.match(/[_\-\!\$]/) !== null) {
            force++;
        }; 
    }
    
    for (let i = 0; i < 3; i++) {
        if (i < force) {
            oForce[i].classList.add('active');
        } else {
            oForce[i].classList.remove('active');
        }
    }
}

/**
 * Fonction validant valide et met à jour l'affichage pour le champ nationalité
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldNationality(nationalityField) {
    const nationalityInputField = nationalityField.querySelector('select');
    const value = nationalityInputField.options[nationalityInputField.selectedIndex].value;
    let validReturn = true;
    removeErrors(nationalityField);

    const valid = validateNationality(value);
    if (valid === 1) {
        nationalityField.classList.add('invalide');
        nationalityField.classList.add('error-required');
        validReturn = false;
    }  else {
        nationalityField.classList.add('valide');
    }
    
    return validReturn;
}

/**
 * Fonction validant les règles du champ nationalité
 */
function validateNationality(nationality) {
    if (nationality !== "0") {
        return 0;
    }  else {
        return 1;
    }
}



/**
 * Fonction validant valide et met à jour l'affichage pour le champ sexe
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldSex(sexField) {
    const sexInputField = sexField.querySelector('input:checked');
    const value = sexInputField.value;
    let validReturn = true;
    removeErrors(sexField);

    const valid = validateSex(value);
    if (valid === 1) {
        sexField.classList.add('invalide');
        sexField.classList.add('error-required');
        validReturn = false;
    }  else {
        sexField.classList.add('valide');
    }
    
    return validReturn;
}

/**
 * Fonction validant les règles du champ sexe
 */
function validateSex(sex) {
    if (sex !== "0") {
        return 0;
    }  else {
        return 1;
    }
}



/**
 * Fonction validant valide et met à jour l'affichage pour les champs roles
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldRoles(rolesField) {
    const rolesInputField = fieldRole.querySelectorAll('input:checked');
    const value = rolesInputField.length;
    let validReturn = true;
    removeErrors(rolesField);

    const valid = validateRoles(value);
    if (valid === 1) {
        rolesField.classList.add('invalide');
        rolesField.classList.add('error-required');
        validReturn = false;
    }  else {
        rolesField.classList.add('valide');
    }
    
    return validReturn;
}

/**
 * Fonction validant les règles du champ roles
 */
function validateRoles(roles) {
    if (roles !== 0) {
        return 0;
    }  else {
        return 1;
    }
}

function changeRoles(oRole) {
    let role = Number(oRole.value);
    let last = fieldRoles.length-1;
    let values = [];
    for (let i = 0; i < fieldRoles.length; i++) {
        values.push(fieldRoles[i].checked);
    }

    switch (role) {
        case 0:
            if (fieldRoles[0].checked) {
                fieldRoles[0].indeterminate = false;
                for (let i = 0 ; i < values.length-1; i++) {
                    fieldRoles[i].checked = true;
                }
                fieldRoles[last].checked = false;
            } else {
                for (let i = 0 ; i < values.length-1; i++) {
                    fieldRoles[i].checked = false;
                }
                fieldRoles[last].checked = true;
            }
            break;
        case last:
            if (fieldRoles[last].checked) {
                for (let i = 0 ; i < values.length-1; i++) {
                    fieldRoles[i].checked = false;
                    fieldRoles[i].indeterminate = false;
                }
            } else {
                for (let i = 0 ; i < values.length-1; i++) {
                    fieldRoles[i].checked = true;
                }
            }
            break;
        default:
            subValues = [...values].slice(1, last);
            if (fieldRoles[role].checked) {
                // On déactive autre
                fieldRoles[last].checked = false;
                if (subValues.every((item) => { return item;})) { // tous vrai 
                    fieldRoles[0].checked = true;
                    fieldRoles[0].indeterminate = false;
                } else { // un faux
                    fieldRoles[0].checked = false;
                    fieldRoles[0].indeterminate = true;
                }

            } else {
                fieldRoles[0].checked = false;
                if (values.some((item) => { return item;})) {  // un des éléments est vrai
                    fieldRoles[0].indeterminate = true;
                } else {    // tous faux
                    fieldRoles[0].indeterminate = false; 
                }
            }
            break;

    }
}

/**
 * Fonction validant valide et met à jour l'affichage pour le champ Avatar
 * @param <div> entourant l'input
 * @return boolean
 */
function validateFieldAvatar(avatarField) {
    const avatarInputField = avatarField.querySelector('input');
    const value = avatarInputField.value;
    let validReturn = true;
    removeErrors(avatarField);
    const valid = validateAvatar(value);
    if (valid === 1) {
        avatarField.classList.add('invalide');
        avatarField.classList.add('error-required');
        validReturn = false;
    } else {
        avatarField.classList.add('valide');
    }
    
    return validReturn;
}

/**
 * Fonction validant les règles du champ avatar
 */
function validateAvatar(avatar) {
    
    if (avatar !== '0-0') {
        return 0;
    } else {
        return 1;
    }
}

function getAvatar(e) {
    let pos = oAvatars.getBoundingClientRect();
    let w = pos.right - pos.left;
    let h = pos.bottom - pos.top;

    let x = Math.floor((e.pageX - pos.left) /w /0.25) +1;
    let y = Math.floor((e.pageY - pos.top) /h /0.333) +1;
    showAvatar(x,y)
}

showAvatar(0,0);
function showAvatar(x,y) {
    avatarInputField.value = y+"-"+x;
    if (x !== 0 && y !== 0) {
        fieldAvatar.dispatchEvent(new Event('change'));
    }
    let pos = oAvatar.getBoundingClientRect();
    let w = pos.right - pos.left;
    let h = pos.bottom - pos.top;

    oAvatar.style.top = ((1-y)*100)+"%";
    oAvatar.style.left = ((1-x)*100)+"%";
}

function TransfertData() {
    // avatar
    infoAvatar.innerHTML = transformAvatar(fieldAvatar.querySelector('input').value);
    infoName.querySelector('output').innerHTML = fieldName.querySelector('input').value;
    infoFirstName.querySelector('output').innerHTML = fieldFirstName.querySelector('input').value; 
    infoEmail.querySelector('output').innerHTML = fieldEmail.querySelector('input').value; 
    infoAge.querySelector('output').innerHTML = transformAge(fieldDate.querySelector('input').value);
    infoPhone.querySelector('output').innerHTML = fieldPhone.querySelector('input').value;
    infoNationality.querySelector('output').innerHTML = fieldNationality.querySelector('option:checked').innerHTML;
    let sex = fieldSex.querySelector('input:checked').nextSibling.innerHTML;
    if (sex === "Femme") {
        infoSex.querySelector('i').classList.remove('fa-mars');
        infoSex.querySelector('i').classList.add('fa-venus');
    }
    infoSex.querySelector('output').innerHTML = sex;
    infoLogin.querySelector('output').innerHTML = fieldLogin.querySelector('input').value;

    let roles = fieldRole.querySelectorAll('input:checked');
    if (roles[0].value === "0") {
        roles = [roles[0]];
    } 
    infoRole.querySelector('output').innerHTML = transformRole(roles);
}

function transformAge(date) {
    const today = new Date();
    const birthday = new Date(date);
    let ageTime = today.getTime() - birthday.getTime();
    let age = Math.floor(ageTime / 1000 / 60 / 60 / 24 / 365); 

    return age + " ans";
}

function transformRole(roles) {
    let role = '';
    roles.forEach(item => {
        role += item.nextSibling.innerHTML+"<br/>";
    });
    
    return role;
}

function transformAvatar(avatar) {
    avatar = "<img src='img/avataaars-"+avatar+".png' alt='"+avatar+"' />";
    return avatar;
}

function sendForm() {
    
    oModify.removeEventListener('click', modify);
    oModify.style.display = "none";
    fieldSubmit.removeEventListener('click', submit);
    fieldSubmit.style.display = "none";
    alert ('Vos données ont été transmises. Merci !');
}