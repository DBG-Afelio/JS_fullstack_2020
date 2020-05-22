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
let numbersInTextField = /\d/g;
let emailRegex = /^[a-zA-Z.0-9-]+@[a-zA-Z.]+[a-zA-Z]{2}$/ ; 

nom.addEventListener("input", function() {
    
    if(nom.value.length === 0) {
        nom.style.borderColor = "lightslategray"
    } else if(nom.value.length >= 3 && nom.value.length <= 50 && !(numbersInTextField.test(nom.value))) {
        nom.style.borderColor = "#2ecc71"
    } else {
        nom.style.borderColor = "#e74c3c"
    }
})

prenom.addEventListener("input", function() {
    
    if(prenom.value.length === 0) {
        prenom.style.borderColor = "lightslategray"
    } else if(prenom.value.length >= 3 && prenom.value.length <= 50 && !(numbersInTextField.test(prenom.value))) {
        prenom.style.borderColor = "#2ecc71"
    } else {
        prenom.style.borderColor = "#e74c3c"
    }
})

email.addEventListener("input", function() {

    if(email.value.length === 0) {
        email.style.borderColor = "lightslategray"
    } else if(emailRegex.test(email.value)) {
        email.style.borderColor = "#2ecc71"
    } else {
        email.style.borderColor = "#e74c3c"
    }

})




submit.addEventListener("submit", function(e) {
    e.preventDefault();

})