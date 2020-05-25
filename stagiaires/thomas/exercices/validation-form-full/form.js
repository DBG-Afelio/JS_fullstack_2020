// DOM ELEMENTS

const nom = document.querySelector(".nom");
const prenom = document.querySelector(".prenom");
const email = document.querySelector(".email");
const telephone = document.querySelector(".telephone");
const dateDeNaissance = document.querySelector(".date-de-naissance");
const login = document.querySelector(".login");
const suggestLogin = document.querySelector(".suggest-login");
const password = document.querySelector(".mot-de-passe");
const confirmPassword = document.querySelector(".confirm-mot-de-passe");
const firstTabStrengthPassword = document.querySelector(".force-passe-cntnr:first-child");
const secondTabStrengthPassword = document.querySelector(".force-passe-cntnr:nth-child(2)");
const lastTabStrengthPassword = document.querySelector(".force-passe-cntnr:last-child"); 
const country = document.querySelector(".country");
const submit = document.querySelector(".submit");
const containerMessage = document.createElement("div");
const checkboxFullStack = document.querySelector(".dev-full-stack");
const allJobsCheckboxes = document.querySelectorAll(".job-checkbox");
const jobNone = document.querySelector(".job-none")

// FUNCTIONS  

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

function generateUserLogin(nom, prenom) {

    if(nom.length === 0 || prenom.length === 0) {

    const listOflogins = 
        [
            "Barvia60",
            "Zelro77",
            "Baschies5",
            "Miha88",
            "Monbude10",
            "Farma3",
            "Dephe045",
            "Mebe845",
            "Cesmar102",
            "Fucer437"
        ]

        return listOflogins[Math.floor(Math.random() * Math.floor(listOflogins.length))].toLowerCase();

        } else {

        let numbers = [1,2,3,4,5,6,7,8,9];
        let randomNumbers = []; 

        nom = nom.toLowerCase().substring(0,2);
        prenom = prenom.toLowerCase().substring(0,1);

        for (let i = 0; i < 3; i++) {
            randomNumbers.push(numbers[Math.floor(Math.random() * Math.floor(numbers.length))])
        }

        return `${prenom}-${nom}_${randomNumbers.join("")}`

        }

}

function checkName(champ) {

    if(champ.value.length === 0) {
        champ.style.borderColor = "lightslategray"
    } else if(champ.value.length >= 3 && champ.value.length <= 50 && !(numbersInTextField.test(nom.value))) {
        champ.style.borderColor = "#2ecc71"
    } else {
        champ.style.borderColor = "#e74c3c"
    }

}

function checkMail() {
   
    if(email.value.length === 0) {
        email.style.borderColor = "lightslategray"
    } else if(emailRegex.test(email.value)) {
        email.style.borderColor = "#2ecc71"
    } else {
        email.style.borderColor = "#e74c3c"
    }
}

function checkPhone() {

    if(telephone.value.length === 0) {
        telephone.style.borderColor = "lightslategray"
    } else if(phoneRegex.test(telephone.value)) {
        telephone.style.borderColor = "#2ecc71"
    } else {
        telephone.style.borderColor = "#e74c3c"
    }
}

function checkAge() {

    let userAge = getUserAge(dateDeNaissance.value);

    if (userAge > 18 && userAge < 67) {
        dateDeNaissance.style.color = "#2ecc71";
    } else {
        dateDeNaissance.style.color = "#e74c3c";
    }
}

function checkLogin() {
    
    if(login.value.length === 0) {
        login.style.borderColor = "lightslategray"
    } else if(loginRegex.test(login.value)) {
        login.style.borderColor = "#2ecc71"
    } else {
        login.style.borderColor = "#e74c3c"
    }
}


// REGEXES
const numbersInTextField = /\d/g;
const emailRegex = /^[a-zA-Z.0-9-]+@[a-zA-Z.]+[a-zA-Z]{2}$/;
const phoneRegex =  /^([0032]{4}|[0]{1}|[+32]{3})[1-9]{6,9}$/;
const loginRegex = /^[a-zA-Z!$0-9-_]{6,10}$/;
const passwordRegex = /^[a-zA-Z!$0-9-_]{6,10}$/;

// NOM

nom.addEventListener("input", () => checkName(nom));

// PRENOM

prenom.addEventListener("input", () =>  checkName(prenom));

// EMAIL

email.addEventListener("input", () => checkMail());

// TELEPHONE

telephone.addEventListener("input", () => checkPhone());

// DATE DE NAISSANCE 

dateDeNaissance.addEventListener("change", () => checkAge());

// LOGIN

login.addEventListener("input", () => checkLogin())

suggestLogin.addEventListener("click", function(e) {
    e.preventDefault();
    login.value = generateUserLogin(nom.value, prenom.value);  
});

// MOT DE PASSE 

password.addEventListener("input", function() {
      
    if(passwordRegex.test(password.value) && password.value.length === 6) {
        firstTabStrengthPassword.classList.add("faible");
    } else {
        firstTabStrengthPassword.classList.remove("faible");
    }

     if(passwordRegex.test(password.value) && (password.value.length >= 7 && password.value.length <= 8)) {
        secondTabStrengthPassword.classList.add("moyen");
    } else {
        secondTabStrengthPassword.classList.remove("moyen");
    }

    if(passwordRegex.test(password.value) && (password.value.length >= 9 && password.value.length <= 10)) {
        lastTabStrengthPassword.classList.add("fort");
    } else {
        lastTabStrengthPassword.classList.remove("fort");
    }
}); 

confirmPassword.addEventListener("input", function() {

    if(Object.is(password.value, confirmPassword.value)) {
        confirmPassword.style.borderColor = "#2ecc71"
    } else {
        confirmPassword.style.borderColor = "#e74c3c"
    }
}); 

// PAYS 

country.addEventListener("change", function() {

        if(country.value === "choose") {
            (alert("ok"));
        }
});

// GENRE 

document.querySelector(".other").setAttribute("checked", "true");


// JOBS 

checkboxFullStack.addEventListener("click", () => {

     if(checkboxFullStack.checked) {
        jobNone.removeAttribute("checked");
        allJobsCheckboxes.forEach((checkbox) => checkbox.setAttribute("checked", "true"))
    } else {
        jobNone.setAttribute("checked","true");
        allJobsCheckboxes.forEach((checkbox) => checkbox.removeAttribute("checked"));
    }
})


// ENVOYER 

submit.addEventListener("click", (e) => {
    e.preventDefault();

    checkName(nom)
    checkName(prenom)
    
});
