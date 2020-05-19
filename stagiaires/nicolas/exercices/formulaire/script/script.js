const validationButton = document.getElementById('validationButton');

const sexeList = document.getElementsByName('sexe');

const isFormValid = [false, true, true, true, false, false, false];

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
    const phoneRule = /^(((0032)|(\+32))([1-9]{1})(\d{6,9})$)|((0)(\d{6,9})$)/;
    
    if(phone.value.length === 0){
        
        validReturn = true;
        phone.nextElementSibling.classList.add('hidden');
        
    }else if(phone.value.match(phoneRule)){
            
        validReturn = true;
        phone.nextElementSibling.classList.add('hidden');
            
    }else{
        
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

/*----------------ValidDate---------------*/

const dateInput = document.getElementById('dateInput');

function isDateValid(date) {

	let validReturn = false;
    
    /*const dateRule = /^([0-9]{2}|[0-9]{4})\/[0-9]{1,2}\/[0-9]{1,2}$/;*/
    const dateRule = /^\w+([.-]\w+)@\w+([.-]\w+)(.\w{2,})$/;
    
    let fev;
    const nbJours = [31,fev,31,30,31,30,31,31,30,31,30,31];
    
    const day = parseInt(date.value.split("/")[2], 10); // jour
	const month = parseInt(date.value.split("/")[1], 10); // mois
	const year = parseInt(date.value.split("/")[0], 10); // année
    

	if (!date.value.match(dateRule)){
        
        validReturn = false;
        date.nextElementSibling.classList.remove('hidden');
        date.nextElementSibling.innerHTML = "Veuillez saisir une date valide";
        
    }

	// Si l'année n'est composée que de 2 chiffres on complète automatiquement
	if (year < 1000) {
        
		if (year < 89){ // Si a < 89 alors on ajoute 2000 sinon on ajoute 1900
            
            year+=2000;
            
        }	
		else {
            
            year+=1900;
            
        }
	}

	// Définition du dernier jour de février
	// Année bissextile si annnée divisible par 4 et que ce n'est pas un siècle, ou bien si divisible par 400
	if (year%4 == 0 && year%100 !=0 || year%400 == 0){
        
        fev = 29;
        
    }
        
	else{
        
        fev = 28;
        
    } 

	// Enfin, retourne vrai si le jour est bien entre 1 et le bon nombre de jours, idem pour les mois, sinon retourn faux
    
	if( month >= 1 && month <=12 && day >= 1 && day <= nbJours[month-1] ){
        
        validReturn = true;
        date.nextElementSibling.classList.add('hidden');
        
    }else{
        
        validReturn = false;
        date.nextElementSibling.classList.remove('hidden');
        date.nextElementSibling.innerHTML = "Veuillez saisir une date valide";
    }
}


dateInput.addEventListener('input',()=>{
    
    if (isDateValid(dateInput)) {
        
        isFormValid[4] = true; 
        
    } else {
        
        isFormValid[4] = false;
        
    }
    
    if(validateForm()){
        
        validationButton.setAttribute('class','invalid');
        
    }else{
        
        validationButton.setAttribute('class','valid');
        
    }
}); 

/*----------------ValidLogin---------------*/

const loginInput = document.getElementById('loginInput');
const loginButton = document.getElementById('loginButton');

const loginTab = ["abc123","kikoulol32","trololo","Admins"]


function isLoginValid(login){
    
    let validReturn = false;
    
    if(login.value.length === 0 || login.value.length < 6 || login.value.length > 10){
        
        validReturn = false;
        login.nextElementSibling.classList.remove('hidden');
        login.nextElementSibling.innerHTML = "Veuillez saisir un mot entre 6 et 10 caractères";
            
    }else if(compareTabString(loginTab,login.value)){
        
        validReturn = false;
        login.nextElementSibling.classList.remove('hidden');
        login.nextElementSibling.innerHTML = "Login déja utilisé";
            
    }else{
        
        validReturn = true;
        login.nextElementSibling.classList.add('hidden');
        
    }
            
    return validReturn;
}

function compareTabString(tab,string){
    
    return tab.some((element)=> element === string);
    
}

loginInput.addEventListener('input',()=>{
    
    if (isLoginValid(loginInput)) {
        
        isFormValid[5] = true; 
        
    } else {
        
        isFormValid[5] = false;
        
    }
    
    if(validateForm()){
        
        validationButton.setAttribute('class','invalid');
        
    }else{
        
        validationButton.setAttribute('class','valid');
        
    }
}); 

loginButton.addEventListener('click',()=>{
    
    
    
});

/*----------------ValidPassword---------------*/

const passwordInput = document.getElementById('passwordInput');

function isPasswordValid(password) {

	let validReturn = false;
    
    
}

passwordInput.addEventListener('input',()=>{
    
    if (isPasswordValid(passwordInput)) {
        
        isFormValid[6] = true; 
        
    } else {
        
        isFormValid[6] = false;
        
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

//Annuler l'evenement par default des boutons
for(button of document.getElementsByTagName('button')){
    
    button.addEventListener('click',(event)=>{
        
        event.preventDefault();
        
    });
    
}

