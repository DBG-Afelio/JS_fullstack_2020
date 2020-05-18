const formInputs = document.querySelectorAll('#formulaire input');
const validationButton = document.getElementById('validationButton');

const nameInput = document.getElementById('nameInput');
let isNameValid = false;



const sexeList = document.getElementsByName('sexe');

let isFormValid = false;

/*----------------ValidName---------------*/

nameInput.addEventListener('input',()=>{
    
    switch(true){
            
        case (nameInput.value.length < 3):
            
            nameInput.nextElementSibling.innerHTML = "3 caractères minimum";
            
            isNameValid = false;
            nameInput.nextElementSibling.classList.remove('hidden');
            
            break;
            
        case (nameInput.value.length > 50):
            
            nameInput.nextElementSibling.innerHTML = "50 caractères maximum";
            isNameValid = false;
            nameInput.nextElementSibling.classList.remove('hidden');
            
            break;
            
        default : 
            
            isNameValid = true;
            nameInput.nextElementSibling.classList.add('hidden');
    }
    
    /*if(nameInput.value.length >= 3 && nameInput.value.length <= 50 ){
        
        isNameValid = true;
        
    }else{
        
        isNameValid = false;
        
    }*/
    
})


/*----------------ValidButton---------------*/
for( input of formInputs){
    
    
    input.addEventListener('input',()=>{
        
        
        if(isNameValid){
            
            isFormValid = true;
            
        }else{
            
            isFormValid = false;
            
        }
        if(isFormValid){
            
            validationButton.setAttribute('class','valid');
            
        }else{
            
            validationButton.setAttribute('class','invalid');
            
        }
    });  
}


