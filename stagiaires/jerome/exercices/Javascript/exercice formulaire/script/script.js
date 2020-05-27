const fieldName = document.querySelector('.form-nom');
const fieldSurname=document.querySelector('.form-prenom');
const fieldEmail=document.querySelector('.form-email');
const fieldPhone=document.querySelector('.form-tel');
const fieldLogin = document.querySelector('.form-login');
const buttonLogin = document.getElementById('login-button');
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
fieldPhone.addEventListener('input', ()=> {
    validateFieldPhone(fieldPhone);
})
fieldLogin.addEventListener('input', ()=> {
    validateFieldlogin(fieldLogin);
})
//..............................................................................
//reload
/*window.addEventListener('load',()=>{
    let Inputs=document.querySelectorAll('Input');

    for(items of Inputs ){
        items.value="";
    }
})*/
/**
 * Fonction validant tous les champs + Boutton couleur
 */
function validate () {
    if (!validateFieldName(fieldName)){
        alert ('erreur dans le nom');
    }
    if(!validateFieldSurname(fieldSurname)){
        alert('erreur dans le prénom');
    }
    if(!validateFieldEmail(fieldEmail)){
        alert("erreur dans l'email");
    }
    if(!validateFieldPhone(fieldPhone)){
        alert("erreur dans le téléphone");
    }
    if(!validateFieldlogin(fieldLogin)){
        alert("erreur dans le login");
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
//..............................................................................
//Prénom


function validateFieldSurname(surnameField) {
    const surnameInputField = surnameField.querySelector('input');
    const value = surnameInputField.value;
    let validReturn = true;
    surnameField.classList.remove('valide');
    surnameField.classList.remove('invalide');
    if(!(value.trim() === '')){
    const valid = validateName(value);
        if (valid === 1) {
            surnameField.classList.add('invalide');
            surnameField.classList.add('error-min-length');
            validReturn = false;
        } else if(valid === 2) {
            surnameField.classList.add('invalide');
            surnameField.classList.add('error-max-length');
            validReturn = false;
        } else {
            surnameField.classList.add('valide');
        }
    }
    return validReturn;
}
//..............................................................................
//Email


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
//..............................................................................
//Téléphone
function validateFieldPhone(phoneField) {
    const phoneInputField = phoneField.querySelector('input');
    const value = phoneInputField.value;
    let validReturn = true;
    phoneField.classList.remove('valide');
    phoneField.classList.remove('invalide');
    if(!(value.trim() === '')){
        const valid = validatephone(value);
        if (valid === 1) {
            phoneField.classList.add('invalide');
            phoneField.classList.add('error-invalid');
            validReturn = false;
        }else if(valid===0) {
            phoneField.classList.add('valide');
        }
    }
    return validReturn;
}

const phoneRule=/^(((0032)|(\+32))([1-9]{1})(\d{6,9})$)|(^(0)(\d{6,9})$)/;
function validatephone(phone){
    if(phone.match(phoneRule)){
        return 0
    }else {
        return 1
    }
}
//..............................................................................
//date de naissance

//..............................................................................
//login
const tabLogin=["jgr_123","ngr_123","sgr_123","egr_123"];
function validateFieldlogin(loginField) {
    const loginInputField = loginField.querySelector('input');
    const value = loginInputField.value;
    let validReturn = true;
    loginField.classList.remove('valide');
    loginField.classList.remove('invalide');
    if (value.trim() === '') {
        loginField.classList.add('invalide');
        loginField.classList.add('error-required');
        validReturn = false;
    }else if(tabLogin.some((element)=>{element===loginField.querySelector('input').value;})){
        loginField.classList.add('invalide');
        loginField.classList.add('error-sim');
        validReturn = false;
    }else {
        const valid = validatelogin(value);
        if (valid === 1) {
            loginField.classList.add('invalide');
            loginField.classList.add('error-min-length');
            validReturn = false;
        }else if (valid === 2) {
            loginField.classList.add('invalide');
            loginField.classList.add('error-max-length');
            validReturn = false;
        }else if(valid===0) {
            loginField.classList.add('valide');
        }
    }
    return validReturn;
}

function validatelogin(login){
    if(login.length >= 6 && login.length <= 10) {
        return 0;
    }else if (name.length < 6) {
        return 1;
    } else if (name.length >10) {
        return 2;
    }

}

buttonLogin.addEventListener('click',()=>{

})
//..............................................................................
//password