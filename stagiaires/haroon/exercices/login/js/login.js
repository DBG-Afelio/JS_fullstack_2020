
let button = document.getElementById("validerButton");
let inputLastName = document.getElementById("lastName");
let firstName = document.getElementById("firstName");
let inputedMail=document.getElementById('email');
let inputedPhone = document.getElementById('phone');
let inputedDate= document.getElementById('dateOfBirth');
let inputedLogin= document.getElementById('login');
let inputedPassword=document.getElementById('password');

inputedMail.addEventListener('input',()=>{
    validateEmail(inputedMail);
})

inputLastName.addEventListener('input',()=>{
    validateLastName(inputLastName);

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
inputedPassword.addEventListener('input',()=>{
    validatePassword(inputedPassword);
})
button.addEventListener('click',(e)=>{
    e.preventDefault();
    validateInput();
})
function validateInput() {
    if (! validateLastName(inputValid)){
    
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


function  validateLastName(inputedValue){
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
        
    function validateDate(newDate){
        var currentDate = new Date() ;
        var currentYear = currentDate.getFullYear();
        var currenMonth = currentDate.getMonth()+1;
        var currentDay = currentDate.getDate(); 
        var birhtDate =new Date (newDate.value);        
        var birthYear = birhtDate.getFullYear();
        var birthMonth = birhtDate.getMonth()+1;
        var birthDay = birhtDate.getDate();
        var ageYear = currentYear - birthYear ;
        var ageMonth = currenMonth - birthMonth ;
        var ageDay = currentDay - birthDay ;

        if (ageYear > 65 ){
            document.getElementById("wrong").style.display = "block";
            document.getElementById("correct").style.display = "none";
        }
        else if  (ageYear == 18){
            if(ageMonth < 0){
                document.getElementById("wrong").style.display = "block";
                document.getElementById("correct").style.display = "none";
            }
                else if (ageMonth == 0 && ageDay < 0 ){
                    document.getElementById("wrong").style.display = "block";
                    document.getElementById("correct").style.display = "none";
                }
                else {
                    document.getElementById("wrong").style.display = "none";
                    document.getElementById("correct").style.display = "block";
                }
            }
        else if (ageYear > 18){
            document.getElementById("wrong").style.display = "none";
            document.getElementById("correct").style.display = "block";
        }
    }
        

    function validateLogin(login){
        console.log(login.value);
        const loginTest= /^[a-zA-Z0-9-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]{6,10}$/;
        console.log(loginTest.test(login.value));
        return loginTest.test(login.value);
    }
    function validatePassword(password){
        let pV = password.value;
        const numbersTest = /^\d{6,10}$/;
        const lettersTest=/^[a-zA-Z]{6,10}$/
        const passwordTest=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
        let pT =passwordTest.test(pV);
        let lT=lettersTest.test(pV);
        let nT=numbersTest.test(pV)
        
        if(pT==true){
            console.log("Strong Password");
        }
        else if (lT == true && nT==true ){
            console.log("good Password");
        }
    }
        function validetNom(name){
        
            if (name.length > 50 ){
                return 0 ;
            }
            else if  (name.length < 3 ){
                return 1;
            }
        else {
             
            return 2;
        
        }
    }
