const now = new Date();

document.forms[0].addEventListener('submit', e => {
    e.preventDefault();
});
document.forms[0].addEventListener('input', e => {
    console.log(e);
    checkElement(e.target);
})

function checkElement(element) {
    const value = element.value.trim();
    //Vérification reguired
    if(element.required && value === "") {
        element.parentElement.querySelector('.required').style.display = "block";
    } else if(element.required) {
        element.parentElement.querySelector('.required').style.display = "none";
    }
    //Vérification longueur
    if(element.maxLength > 0 && element.minLength > 0) {
        if(element.maxLength < value.length || element.minLength > value.length && value !== "") {
            if(element.maxLength < value.length) {
                element.parentElement.querySelector('.max-length-no-valid').style.display = "block";
            } else {
                element.parentElement.querySelector('.min-length-no-valid').style.display = "block";
            }
        } else {
            element.parentElement.querySelector('.min-length-no-valid').style.display = "none";
            element.parentElement.querySelector('.max-length-no-valid').style.display = "none";
        }
    }
    //Vérification custom
    if(element.hasAttribute('c-function') && window[element.getAttribute('c-function')]) {
        const valid = window[element.getAttribute('c-function')](element);
        if(!valid && value !== "") {
            element.parentElement.querySelector('.custom-error').style.display = "block";
        } else {
            element.parentElement.querySelector('.custom-error').style.display = "none";
        }
    }
}

function check_email(element) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(element.value).toLowerCase());
}

function check_tel(element) {
    const regex = /^(0|\+32|0032)[1-9](\d){6,9}$/;
    return regex.test(String(element.value));
}

function check_birthday(element) {
    const birth = new Date (element.value);
    const diff = now.getFullYear() - birth.getFullYear();
    if(diff >= 18 && diff <= 67) {
        return true;
    } else {
        return false;
    }
}



function setMinMaxBirthDay() {

}