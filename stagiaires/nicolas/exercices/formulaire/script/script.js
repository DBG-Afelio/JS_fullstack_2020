const validationButton = document.getElementById('validationButton');

const sexeList = document.getElementsByName('sexe');

const isFormValid = [false, true, true, true, false, false, false,false,false];

/*----------------ValidName---------------*/

const nameInput = document.getElementById('nameInput');

function isNameValid(name){
    
    let validReturn = true; 
    
    if(name.value.length === 0){
        
        name.nextElementSibling.innerHTML = "Champ requis";
        validReturn = false;
        
    }
    if (name.value.length >= 3 && name.value.length <= 50) {
        
        validReturn = true;
        
    } else if (name.value.length < 3) {
  
        name.nextElementSibling.innerHTML = "3 caractères minimum";
        validReturn = false;


        
    } else {
    
        name.nextElementSibling.innerHTML = "50 caractères maximum";
        validReturn = false;

    }
    return validReturn;
}

nameInput.addEventListener('input',()=>{
    
    document.querySelectorAll(".validIcon")[0].classList.remove('hidden');
    
    if (isNameValid(nameInput)) {
        
        isFormValid[0] = true;
        
        nameInput.nextElementSibling.classList.add('hidden');
        document.querySelectorAll(".validIcon")[0].style.backgroundPositionX = 'right';
        
    } else {
        
        isFormValid[0] = false;
        
        nameInput.nextElementSibling.classList.remove('hidden');
        document.querySelectorAll(".validIcon")[0].style.backgroundPositionX = 'left';
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
        
        validReturn = true;
        
    } else if (surname.value.length < 3 && surname.value.length > 0) {
  
        surname.nextElementSibling.innerHTML = "3 caractères minimum";
        validReturn = false;

        
    } else if(surname.value.length === 0){
        
        validReturn = true;
        
    }else{
        
        surname.nextElementSibling.innerHTML = "50 caractères maximum";
        validReturn = false;

    }
    return validReturn;
}

surnameInput.addEventListener('input',()=>{
    
    document.querySelectorAll(".validIcon")[1].classList.remove('hidden');
    
    if (isSurnameValid(surnameInput)) {
        
        isFormValid[1] = true;
        
        surnameInput.nextElementSibling.classList.add('hidden');
        document.querySelectorAll(".validIcon")[1].style.backgroundPositionX = 'right';
        
    } else {
        
        isFormValid[1] = false;
        
        surnameInput.nextElementSibling.classList.remove('hidden');
        document.querySelectorAll(".validIcon")[1].style.backgroundPositionX = 'left';
        
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
        
    }else{
        
        if(eMail.value.match(mailRule)){
            
            validReturn = true;
            
        }else{
            
            validReturn = false;
            eMail.nextElementSibling.innerHTML = "Email non valide";
        }
        
    }
    
    return validReturn;
}

mailInput.addEventListener('input',()=>{
    
    document.querySelectorAll(".validIcon")[2].classList.remove('hidden');
    
    if (isMailValid(mailInput)) {
        
        isFormValid[2] = true;
        
        mailInput.nextElementSibling.classList.add('hidden');
        document.querySelectorAll(".validIcon")[2].style.backgroundPositionX = 'right';
        
        
    } else {
        
        isFormValid[2] = false;
        mailInput.nextElementSibling.classList.remove('hidden');
        document.querySelectorAll(".validIcon")[2].style.backgroundPositionX = 'left';
        
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
                
    }else if(phone.value.match(phoneRule)){
            
        validReturn = true;
            
    }else{
        
        validReturn = false;
        phone.nextElementSibling.innerHTML = "Veuillez saisir un numéro valide";
        
    }

    
    return validReturn;
}

phoneInput.addEventListener('input',()=>{
    
    document.querySelectorAll(".validIcon")[3].classList.remove('hidden');
    
    if (isPhoneValid(phoneInput)) {
        
        isFormValid[3] = true;
        phoneInput.nextElementSibling.classList.add('hidden');
        document.querySelectorAll(".validIcon")[3].style.backgroundPositionX = 'right';
        
        
    } else {
        
        isFormValid[3] = false;
        phoneInput.nextElementSibling.classList.remove('hidden');
        document.querySelectorAll(".validIcon")[3].style.backgroundPositionX = 'left';
        
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
        
    }else{
        
        validReturn = false;
        date.nextElementSibling.innerHTML = "Veuillez saisir une date valide";
    }
}


dateInput.addEventListener('input',()=>{
    
    document.querySelectorAll(".validIcon")[4].classList.remove('hidden');
    
    
    if (isDateValid(dateInput)) {
        
        isFormValid[4] = true;
        dateInput.nextElementSibling.classList.add('hidden');
        document.querySelectorAll(".validIcon")[4].style.backgroundPositionX = 'right';
        
    } else {
        
        isFormValid[4] = false;
        dateInput.nextElementSibling.classList.remove('hidden');
        document.querySelectorAll(".validIcon")[4].style.backgroundPositionX = 'left';
        
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
    const loginRule = /^[a-zA-Z0-9_$\-!]{6,10}$/;
    
    if(login.value.length === 0 || login.value.length < 6 || login.value.length > 10){
        
        validReturn = false;
        login.nextElementSibling.innerHTML = "Veuillez saisir un mot entre 6 et 10 caractères";
            
    }else if(compareTabString(loginTab,login.value)){
        
        validReturn = false;
        login.nextElementSibling.innerHTML = "Login déja utilisé";
            
    }else if(login.value.match(loginRule)){
        
        validReturn = true;
        
    }else{
        
        validReturn = false;
        login.nextElementSibling.innerHTML = 'utilisez uniquement des chiffres, des lettres ou les symboles "_-!$"';
        
    }
            
    return validReturn;
}

function compareTabString(tab,string){
    
    return tab.some((element)=> element === string);
    
}

loginInput.addEventListener('input',()=>{
    
    document.querySelectorAll(".validIcon")[5].classList.remove('hidden');
    
    if (isLoginValid(loginInput)) {
        
        isFormValid[5] = true; 
        loginInput.nextElementSibling.classList.add('hidden');
        document.querySelectorAll(".validIcon")[5].style.backgroundPositionX = 'right';
        
    } else {
        
        isFormValid[5] = false;
        loginInput.nextElementSibling.classList.remove('hidden');
        document.querySelectorAll(".validIcon")[5].style.backgroundPositionX = 'left';
        
    }
    
    if(validateForm()){
        
        validationButton.setAttribute('class','invalid');
        
    }else{
        
        validationButton.setAttribute('class','valid');
        
    }
});


//loginSuggest

loginButton.addEventListener('click',()=>{
    
    loginInput.value = createLogin(nameInput.value,surnameInput.value);
    //!! A tester
    while(compareTabString(loginTab,loginInput.value)){
        
        createLogin(nameInput.value,surnameInput.value);
        
    }
});

function createLogin(nom,prenom){
    
    let firstPreChar;
    let twoNameChar;
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let randomChar;
    
    if(prenom.length > 0){
        
        firstPreChar = prenom.charAt(0);
        
    }else{
        
        randomChar = Math.floor(Math.random() * chars.length);
		firstPreChar = chars.charAt(randomChar);
    
    }
    if(nom.length > 1){
        
        twoNameChar = nom.substring(0,2);
        
    }
    else{
        twoNameChar = "";
        for (let i=0; i<2; i++) {
        
        randomChar = Math.floor(Math.random() * chars.length);
		twoNameChar += chars.charAt(randomChar);
            
	   }
    }
    
    const numbers = [];
    
    for (let i = 0; i < 3; i++) {
        
      numbers.push(Math.floor(Math.random() * 10));
        
    }
    
    return firstPreChar + twoNameChar + "_" + numbers.join("")
    
}

/*----------------ValidPassword---------------*/

const passwordInput = document.getElementById('passwordInput');

const passwordRule = /^[a-zA-Z0-9_$\-!]{6,10}$/;

function isPasswordValid(password) {

	let validReturn = false;
    

    
    if(password.value.length === 0 || password.value.length < 6 || password.value.length > 10){
        
        validReturn = false;
        password.nextElementSibling.innerHTML = "Veuillez saisir un mot entre 6 et 10 caractères";
            
    }else if(password.value.match(passwordRule)){
        
        validReturn = true;
        
    }else{
        
        validReturn = false;
        password.nextElementSibling.innerHTML = 'utilisez uniquement des chiffres, des lettres ou les symboles "_-!$"';
        
    }
            
    return validReturn;
}

passwordInput.addEventListener('input',()=>{
    
    document.querySelectorAll(".validIcon")[6].classList.remove('hidden');
    
    if (isPasswordValid(passwordInput)) {
        
        isFormValid[6] = true;
        passwordInput.nextElementSibling.classList.add('hidden');
        document.querySelectorAll(".validIcon")[6].style.backgroundPositionX = 'right';
        
        
    } else {
        
        isFormValid[6] = false;
        passwordInput.nextElementSibling.classList.remove('hidden');
        document.querySelectorAll(".validIcon")[6].style.backgroundPositionX = 'left';
        
    }
    
    if(validateForm()){
        
        validationButton.setAttribute('class','invalid');
        
    }else{
        
        validationButton.setAttribute('class','valid');
        
    }
});

/*----------------ValidConfirmPassword---------------*/

const passwordConfirmInput = document.getElementById('passwordConfirmInput');

function isPasswordConfirmValid(passwordConfirm,password) {

	let validReturn = false;
    
    if(passwordConfirm.value === password.value && passwordConfirm.value !== ''){
        
        validReturn = true;
        
    }else{
        
        validReturn = false;
        passwordConfirm.nextElementSibling.innerHTML = 'ERREUR : mot de passe différent';
        
        if(passwordConfirm.value === ''){
            
            passwordConfirm.nextElementSibling.innerHTML = 'Veuillez confirmer votre mot de passe';
            
        }
        
    }
            
    return validReturn;
}

passwordConfirmInput.addEventListener('input',()=>{
    
    document.querySelectorAll(".validIcon")[7].classList.remove('hidden');
    
    if (isPasswordConfirmValid(passwordConfirmInput,passwordInput)) {
        
        isFormValid[7] = true;
        passwordConfirmInput.nextElementSibling.classList.add('hidden');
        document.querySelectorAll(".validIcon")[7].style.backgroundPositionX = 'right';
        
    } else {
        
        isFormValid[7] = false;
        passwordConfirmInput.nextElementSibling.classList.remove('hidden');
        document.querySelectorAll(".validIcon")[7].style.backgroundPositionX = 'left';
        
    }
    
    if(validateForm()){
        
        validationButton.setAttribute('class','invalid');
        
    }else{
        
        validationButton.setAttribute('class','valid');
        
    }
});
passwordInput.addEventListener('input',()=>{
    
    if (isPasswordConfirmValid(passwordConfirmInput,passwordInput)) {
        
        isFormValid[7] = true; 
        passwordConfirmInput.nextElementSibling.classList.add('hidden');
        document.querySelectorAll(".validIcon")[7].style.backgroundPositionX = 'right';
    } else {
        
        isFormValid[7] = false;
        passwordConfirmInput.nextElementSibling.classList.remove('hidden');
        document.querySelectorAll(".validIcon")[7].style.backgroundPositionX = 'left';
    }
    
    if(validateForm()){
        
        validationButton.setAttribute('class','invalid');
        
    }else{
        
        validationButton.setAttribute('class','valid');
        
    }
});

/*----------------passwordSignal---------------*/

const passSignal = document.querySelectorAll('.passSignal');

passwordInput.addEventListener('input',()=>{
    
     if (isPasswordValid(passwordInput)) {
        
        if(passwordInput.value.match(/[0-9]{1,}/) && passwordInput.value.match(/[^a-zA-Z0-9]{1,}/)){
            
            for(const element of passSignal){
                
                if(element.id === "passStrong"){
                    
                    element.style.background='green';
                    
                }else{
                    
                    element.style.background='none';
                    
                }
                
            }
            
        }else if(passwordInput.value.match(/[0-9]{1,}|[^a-zA-Z0-9]{1,}/)){
            
            for(const element of passSignal){
                
                if(element.id === "passMedium"){
                    
                    element.style.background ='orange';
                    
                }else{
                    
                    element.style.background='none';
                    
                }
                
            }
            
        }else{
            
            for(const element of passSignal){
                
                if(element.id === "passLow"){
                    
                    element.style.background='red';
                    
                }else{
                    
                    element.style.background='none';
                    
                }
                
            }
            
        }
        
    } else {
        
        for(const element of passSignal){
                
                    element.style.background='none';
                    
            }
   
    }
});

/*----------------countryValid---------------*/

const countrySelect = document.getElementById('countrySelect');

countrySelect.addEventListener('input',()=>{
    
    if (countrySelect.selectedIndex != "0") {
        
        isFormValid[8] = true; 
        
    } else {
        
        isFormValid[8] = false;
        
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
/*-------------------------------------createFormResume--------------------------------------*/

function createFormResume(form){
    
    const container = document.createElement('div');
    
    const avatar = document.createElement('span');
    const name = document.createElement('span');
    const surname = document.createElement('span');
    const age = document.createElement('span');
    const email = document.createElement('span');
    const country = document.createElement('span');
    const login = document.createElement('span');
    const gender = document.createElement('span');
    const skills = document.createElement('span');
   
}


/*-------------------------------------------------------------------------------------------*/
//reloadValues

function reloadValues(){
    
    nameInput.value = '';
    surnameInput.value = '';
    mailInput.value = '';
    phoneInput.value = '';
    dateInput.value = '';
    loginInput.value = '';
    passwordInput.value = '';
    
    countrySelect.selectedIndex = "0"; 
    
    document.querySelector('input[value="autre"]').checked = true;
    
}
reloadValues();

