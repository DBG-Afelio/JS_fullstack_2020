
let button = document.getElementById("validerButton");
let inputValid = document.getElementById("lastName");

inputValid.addEventListener('input',()=>{
    validateHaroon(inputValid);

})
button.addEventListener('click',()=>{
    
    validateInput();
})
function validateInput() {
    if (!validateHaroon(inputValid));
    console.log(inputValid);
    alert ('Error message'); 
}



function validateHaroon(inputedValue){
    console.log(inputedValue);
    const value = inputedValue.value;
    console.log(value);
    let trueInput = true ; 
    inputedValue.classList.remove('valide');
    inputedValue.classList.remove('invalide');
    if (value.trim()===''){
        trueInput = false ; 
        inputedValue.classList.add('valide');
        inputedValue.classList.add('error-required');
    
    }
    else{
    const valid = validetNom(value);
        if (valid === 1){
            
            inputedValue.classList.add('invalide');
            inputedValue.classList.add('error-max-length');
            falseTrue = false;
        }
        else if  (valid === 2){
           
            inputedValue.classList.add('invalide');
            inputedValue.classList.add('error-max-length');
            falseTrue = false;
        }
        else {

            inputedValue.classList.add('valide');
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
