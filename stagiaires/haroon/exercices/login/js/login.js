
let button = document.getElementById("validerButton");
let inputValid = document.getElementById("lastName");

inputValid.addEventListener('input',()=>{
    validateInput();
})
function validateInput() {
    if (!validateHaroon(inputValid));
    alert ('Error message'); 
}

button.addEventListener('click',()=>{
    let haroon = document.getElementById("lastName").Value;
    validateHaroon(haroon);
})


function validateHaroon(inputedValue){
    console.log(inputedValue);
    const inputedValueInput = inputedValue.value;
    console.log(inputedValueInput);
    let trueInput = true ; 
    inputedValue.classList.remove('valide');
    inputedValue.classList.remove('invalide');
    if (inputedValueInput.trim()===''){
        trueInput = false ; 
        inputedValue.classList.add('valide');
        inputedValue.classList.add('error-required');
    
    }
    else{
    const valid = validetNom(value);
        if (valid === 1){
            alert ("name is longer than normal" );
            inputedValue.classList.add('invalide');
            inputedValue.classList.add('error-max-length');
            falseTrue = false;
        }
        else if  (valid === 2){
            alert ("name is shorter than normal");
            inputedValue.classList.add('invalide');
            inputedValue.classList.add('error-max-length');
            falseTrue = false;
        }
        else {
            alert ("go ahead ");
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
