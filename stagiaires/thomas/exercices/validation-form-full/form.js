// CHAMPS HTML
const nom = document.querySelector(".nom");
const prenom = document.querySelector(".prenom");
const email = document.querySelector(".email");
const telephone = document.querySelector(".telephone");
const dateDeNaissance = document.querySelector(".date-de-naissance");
const login = document.querySelector(".login");
const suggestLogin = document.querySelector(".suggest-login");
const password = document.querySelector(".mot-de-passe");
const confirmPassword = document.querySelector(".confirm-mot-de-passe");
const passTabs = document.querySelectorAll(".force-passe-cntnr"); 
const country = document.querySelector(".country");
const radiosGender = document.querySelectorAll("input[name='gender']");
const submit = document.querySelector(".submit");
let containerMessage = document.createElement("div");


//FUNCTIONS  

function formatTodayDate() {

    let date = new Date(),
        month = (date.getMonth() + 1),
        day = date.getDate(),
        year = date.getFullYear();

    return `${day}-${month}-${year}`;
}


function getUserAge(dateDeNaissance) {

    let today = new Date();
    let naissance = new Date(dateDeNaissance);
    let age = today.getFullYear() - naissance.getFullYear()
    let mois = today.getMonth() - naissance.getMonth();

    if(mois < 0 || (mois === 0 && today.getDate() < naissance.getDate())) {
        age = age - 1;
    }

    return age
}


// REGEXES
let numbersInTextField = /\d/g;
let emailRegex = /^[a-zA-Z.0-9-]+@[a-zA-Z.]+[a-zA-Z]{2}$/;
let phoneRegex =  /^([0032]{4}|[0]{1}|[+32]{3})[1-9]{6,9}$/;

//NOM

nom.addEventListener("input", function() {
    
    if(nom.value.length === 0) {
        nom.style.borderColor = "lightslategray"
    } else if(nom.value.length >= 3 && nom.value.length <= 50 && !(numbersInTextField.test(nom.value))) {
        nom.style.borderColor = "#2ecc71"
    } else {
        nom.style.borderColor = "#e74c3c"
    }
})

//PRENOM

prenom.addEventListener("input", function() {
    
    if(prenom.value.length === 0) {
        prenom.style.borderColor = "lightslategray"
    } else if(prenom.value.length >= 3 && prenom.value.length <= 50 && !(numbersInTextField.test(prenom.value))) {
        prenom.style.borderColor = "#2ecc71"
    } else {
        prenom.style.borderColor = "#e74c3c"
    }
})

//EMAIL

email.addEventListener("input", function() {

    if(email.value.length === 0) {
        email.style.borderColor = "lightslategray"
    } else if(emailRegex.test(email.value)) {
        email.style.borderColor = "#2ecc71"
    } else {
        email.style.borderColor = "#e74c3c"
    }

})

//TELEPHONE

telephone.addEventListener("input", function() {

    if(telephone.value.length === 0) {
        telephone.style.borderColor = "lightslategray"
    } else if(phoneRegex.test(telephone.value)) {
        telephone.style.borderColor = "#2ecc71"
    } else {
        telephone.style.borderColor = "#e74c3c"
    }
})


dateDeNaissance.addEventListener("change", function() {

    let userAge = getUserAge(dateDeNaissance.value);

    if (userAge > 18 && userAge < 67) {
        dateDeNaissance.style.color = "#2ecc71";
    } else {
        dateDeNaissance.style.color = "#e74c3c";
    }

// DATE FORMATEE -> let dateValue = dateDeNaissance.value.split("-").reverse().join("-");   

})






submit.addEventListener("submit", function(e) {
    e.preventDefault();

})