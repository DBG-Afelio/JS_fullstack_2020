
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
    let haroon = document.getElementById("lastName").value;
    validateHaroon(haroon);
})


function validateHaroon(inputedValue){
    inputedValue= document.getElementById('lastName').value;
    let trueInput = true ; 
    inputedValue.classlist.remove('valide');
    inputedValue.classlist.remove('invalide');
    if (inputedValue.trim()===''){
        trueInput = false ; 
        inputedValue.classlist.add('valide');
        inputedValue.classlist.add('error-required');
    
    }
    else{
    falseTrue =validetNom(inputedValue);
        if (falseTrue === 1){
            alert ("name is longer than normal" );
            inputedValue.classList.add('invalide');
            inputedValue.classList.add('error-min-length');
            falseTrue = false;
        }
        else if  (falseTrue === 2){
            alert ("name is shorter than normal");
        }
        else {
            alert ("go ahead ");
        }
        }
        function validetNom(name){
        
        
            if (name.length > 5 ){
                return 1 ;
            }
            else if  (name.length < 3 ){
                return 2;
            }
        else {
            alert 
            return 3;
        
        }
    }