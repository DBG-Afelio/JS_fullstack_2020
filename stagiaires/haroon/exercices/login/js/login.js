
let button = document.getElementById("validerButton");
let inputValid = document.getElementById("lastName");
let firstName = document.getElementById("firstName");
let inputedMail=document.getElementById('email');
let inputedPhone = document.getElementById('phone');
let inputedDate= document.getElementById('dateOfBirth');
let inputedLogin= document.getElementById('login');


inputedMail.addEventListener('input',()=>{
    validateEmail(inputedMail);
})

inputValid.addEventListener('input',()=>{
    validateHaroon(inputValid);

})
firstName.addEventListener('input',()=>{
    validatefirstName(firstName);
})
inputedPhone.addEventListener('input',()=>{
    validatePhone(inputedPhone);
})
inputedDate.addEventListener('input',()=>{
    validateDate(inputedDate);
})
inputedLogin.addEventListener('input',()=>{
    validateLogin(inputedLogin);
})
button.addEventListener('click',(e)=>{
    e.preventDefault();
    validateInput();
})
function validateInput() {
    if (!validateHaroon(inputValid)){
    
    alert ('Error message');
    } 
}
function validatefirstName(inputeFirst){
    const firstNameValue=inputeFirst.value;
    console.log(firstNameValue);
    let FirstNameTrue= true ; 
    if (firstNameValue.trim()===''){
        inputeFirst.classList.add('valide');
        inputeFirst.classList.add('error-required');
    } else{
        const validFirst=validetNom(firstNameValue);
        if(validFirst === 1){
            document.getElementById("errorFirst-min").style.display = "block";
            FirstNameTrue = false
        } else if (validFirst===0){
            document.getElementById("errorFirst-max").style.display = "block";
            FirstNameTrue = false;

        } else if (validFirst===2){
            document.getElementById("errorFirst-min").style.display = "none"; 
            document.getElementById("errorFirst-max").style.display = "none";
    }
    }
    return FirstNameTrue;
}


function validateHaroon(inputedValue){
    const value = inputedValue.value;
    let falseTrue = true ; 
    inputedValue.classList.remove('valide');
    inputedValue.classList.remove('invalide');
    if (value.trim()===''){
        falseTrue = false ; 
        inputedValue.classList.add('valide');
        inputedValue.classList.add('error-required');
    } else {
        const valid = validetNom(value);
        if (valid === 1){
            inputedValue.classList.add('invalide');
            document.getElementById("error-min").style.display = "block"; 
            falseTrue = false;
        } else if  (valid === 0){
            inputedValue.classList.add('invalide');
            document.getElementById("error-max").style.display = "block";
            falseTrue = false;
        } else if (valid ===2){
            inputedValue.classList.add('valide');
            document.getElementById("error-min").style.display = "none"; 
            document.getElementById("error-max").style.display = "none";
        }
    }
        return falseTrue ;
        
    }
    function validateEmail(mail){
        const emailTest= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            console.log(mail.value);
            console.log(emailTest.test(mail.value));
            return emailTest.test(mail.value);
    }

    function validatePhone(number){
        const phoneTest=/^((\+|00(\s|\s?\-\s?)?)32(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/;
        console.log(number.value.length);
        console.log(number.value);
        console.log(phoneTest.test(number.value));
        return phoneTest.test(number.value);                
    }
        
    function validateDate(newdate){
        
    }

    function validateLogin(login){
        console.log(login.value);
        const loginTest= /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
        console.log(loginTest.test(login.value));
    }
    
        function validetNom(name){
        
            if (name.length > 5 ){
                return 0 ;
            }
            else if  (name.length < 3 ){
                return 1;
            }
        else {
             
            return 2;
        
        }
    }
