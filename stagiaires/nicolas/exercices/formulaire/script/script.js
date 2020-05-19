const validationButton = document.getElementById('validationButton');

const sexeList = document.getElementsByName('sexe');

const isFormValid = [false, true, true, true];

/*----------------ValidName---------------*/

const nameInput = document.getElementById('nameInput');

function isNameValid(name){
    
    let validReturn = true; 
    
    if(name.value.length === 0){
        
        name.nextElementSibling.innerHTML = "Champ requis";
        name.nextElementSibling.classList.add('hidden');
        validReturn = false;
        
    }
    if (name.value.length >= 3 && name.value.length <= 50) {
        
        name.nextElementSibling.classList.add('hidden');
        validReturn = true;
        
    } else if (name.value.length < 3) {
  
        name.nextElementSibling.innerHTML = "3 caractères minimum";
        name.nextElementSibling.classList.remove('hidden');
        validReturn = false;

        
    } else {
    
        name.nextElementSibling.innerHTML = "50 caractères maximum";
        name.nextElementSibling.classList.remove('hidden');
        validReturn = false;

    }
    return validReturn;
}

nameInput.addEventListener('input',()=>{
    
    if (isNameValid(nameInput)) {
        
        isFormValid[0] = true; 
        
    } else {
        
        isFormValid[0] = false;
        
    }
    
    if(validateForm()){
        
        validationButton.setAttribute('class','invalid');
        
    }else{
        
        validationButton.setAttribute('class','valid');
        
    }
}); 

/*----------------ValidSurname---------------*/

const surnameInput = document.getElementById('surnameInput');

function isSurnameValid(surname){
    
    let validReturn = true; 
    
    
    if (surname.value.length >= 3 && surname.value.length <= 50) {
        
        surname.nextElementSibling.classList.add('hidden');
        validReturn = true;
        
    } else if (surname.value.length < 3 && surname.value.length > 0) {
  
        surname.nextElementSibling.innerHTML = "3 caractères minimum";
        surname.nextElementSibling.classList.remove('hidden');
        validReturn = false;

        
    } else if(surname.value.length === 0){
        
        validReturn = true;
        surname.nextElementSibling.classList.add('hidden');
        
    }else{
        
        surname.nextElementSibling.innerHTML = "50 caractères maximum";
        surname.nextElementSibling.classList.remove('hidden');
        validReturn = false;

    }
    return validReturn;
}

surnameInput.addEventListener('input',()=>{
    
    if (isSurnameValid(surnameInput)) {
        
        isFormValid[1] = true; 
        
    } else {
        
        isFormValid[1] = false;
        
    }
    
    if(validateForm()){
        
        validationButton.setAttribute('class','invalid');
        
    }else{
        
        validationButton.setAttribute('class','valid');
        
    }
}); 

/*----------------ValidEmail---------------*/

const mailInput = document.getElementById('mailInput');

function isMailValid(eMail){
    
    const mailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    let validReturn = true;     
    
    if(eMail.value.length === 0){
        
        validReturn = true;
        eMail.nextElementSibling.classList.add('hidden');
        
    }else{
        
        if(eMail.value.match(mailRule)){
            
            validReturn = true;
            eMail.nextElementSibling.classList.add('hidden');
            
        }else{
            
            validReturn = false;
            eMail.nextElementSibling.classList.remove('hidden');
            eMail.nextElementSibling.innerHTML = "Email non valide";
        }
        
    }
    
    return validReturn;
}

mailInput.addEventListener('input',()=>{
    
    if (isMailValid(mailInput)) {
        
        isFormValid[2] = true; 
        
    } else {
        
        isFormValid[2] = false;
        
    }
    
    if(validateForm()){
        
        validationButton.setAttribute('class','invalid');
        
    }else{
        
        validationButton.setAttribute('class','valid');
        
    }
});

/*----------------ValidPhone---------------*/

const phoneInput = document.getElementById('phoneInput');

function isPhoneValid(phone){
    
    let validReturn = true;     
    
    if(phone.value.length === 0){
        
        validReturn = true;
        phone.nextElementSibling.classList.add('hidden');
        
    }else if(isNaN(phone.value)){
            
            validReturn = false;
            phone.nextElementSibling.classList.remove('hidden');
            phone.nextElementSibling.innerHTML = "Veuillez saisir un numéro valide";
            
    }

    
    return validReturn;
}

phoneInput.addEventListener('input',()=>{
    
    if (isPhoneValid(phoneInput)) {
        
        isFormValid[3] = true; 
        
    } else {
        
        isFormValid[3] = false;
        
    }
    
    if(validateForm()){
        
        validationButton.setAttribute('class','invalid');
        
    }else{
        
        validationButton.setAttribute('class','valid');
        
    }
}); 

/*----------------ValidButton---------------*/

function validateForm() {
    
    return isFormValid.some((element)=> element === false);
    
}

