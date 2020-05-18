const formInputs = document.querySelectorAll('#formulaire input');
const validationButton = document.getElementById('validationButton');

const nameInput = document.getElementById('nameInput');

const sexeList = document.getElementsByName('sexe');

let isFormValid = false;

const isFormValid = [false, true];

/*----------------ValidName---------------*/

function isNameValid(){
    let isNameValidReturn = true;
    
    switch(true){
            
        case (nameInput.value.length < 3):
            
            nameInput.nextElementSibling.innerHTML = "3 caractères minimum";
            
            isNameValidReturn = false;
            nameInput.nextElementSibling.classList.remove('hidden');
            
            break;
            
        case (nameInput.value.length > 50):
            
            nameInput.nextElementSibling.innerHTML = "50 caractères maximum";
            isNameValidReturn = false;
            nameInput.nextElementSibling.classList.remove('hidden');
            
            break;
            
        default : 
            
            nameInput.nextElementSibling.classList.add('hidden');
    }
    
    return isNameValidReturn;

    /*if(nameInput.value.length >= 3 && nameInput.value.length <= 50 ){
        
        isNameValid = true;
        
    }else{
        
        isNameValid = false;
        
    }*/
    
}


/*----------------ValidButton---------------*/

    
    
nameInput.addEventListener('input',()=>{
    
    if (isNameValid()) {
        isFormValid[0] = true; 
        
    } else {
        
        isFormValid[0] = false;
        
    }

    if (isFormValid[0]) {
        validateForm();
        validationButton.setAttribute('class','valid');
    } else {
        
        validationButton.setAttribute('class','invalid');
        
    }
});  


function validateForm() {
    return isFormValid.some((valideElement)=> valideElement === false);
}

