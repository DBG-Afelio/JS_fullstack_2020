
let button = document.getElementById("validerButton");
let inputValid = document.getElementById("lastName");
let firstName = document.getElementById("firstName");

inputValid.addEventListener('input',()=>{
    validateHaroon(inputValid);

})
firstName.addEventListener('input',()=>{
    validatefirstName(firstName);
})
button.addEventListener('click',()=>{
    
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
        FirstNameTrue = false ; 
        inputeFirst.classList.add('valide');
        inputeFirst.classList.add('error-required');
    
    }
    else{
        const validFirst=validetNom(firstNameValue);
        if(validFirst===1){
            document.getElementById("errorFirst-min").style.display = "block";
            FirstNameTrue = false
        }
        else if (validFirst===0){
            document.getElementById("errorFirst-max").style.display = "block";
            FirstNameTrue = false;

        }
        else if (validFirst===2){
        document.getElementById("errorFirst-min").style.display = "none"; 
        document.getElementById("errorFirst-max").style.display = "none";
    }
    }
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
    
    }
    else{
    const valid = validetNom(value);
        if (valid === 1){
            
            inputedValue.classList.add('invalide');
            
            document.getElementById("error-min").style.display = "block"; 
            
            falseTrue = false;
        }
        else if  (valid === 0){
           
            inputedValue.classList.add('invalide');
            
            document.getElementById("error-max").style.display = "block";
            falseTrue = false;
        }
        else if (valid ===2){

            inputedValue.classList.add('valide');
            
            document.getElementById("error-min").style.display = "none"; 
            document.getElementById("error-max").style.display = "none";
        }
    }
        return falseTrue ;
        
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
