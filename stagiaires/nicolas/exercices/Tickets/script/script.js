const ageInput = document.getElementById("ageInput");

const ticketList = document.getElementsByName("ticket");

const validateButton = document.getElementById("validateButton");

const formOutput = document.getElementById("formOutput");



/*-----------------------------EVENEMENTS---------------------------------------*/

validateButton.addEventListener('click', ()=>{
    
    let userAge = getAge(ageInput.valueAsDate);
    console.log(userAge);
    if(userAge > 0 && userAge <= 130){
        for(const ticket of ticketList){
            
            if(ticket.checked){
                
                switch(ticket.value){

                case 'normTicket':
                    
                    if(userAge > 12){
                        
                            formOutput.innerHTML = "Ticket valide"
                        
                       }else{
                        
                           formOutput.innerHTML = "ERREUR : Ticket non valide"
                           
                       }
                    
                    break;

                case 'reducedTicket':
                    
                    if(userAge < 12 && userAge > 6){
                        
                            formOutput.innerHTML = "Ticket valide"
                        
                       }else{
                        
                           formOutput.innerHTML = "ERREUR : Ticket non valide"
                           
                       }
                    
                    
                    break;

                case 'freeTicket': 
                    
                    if(userAge < 6){
                        
                            formOutput.innerHTML = "Ticket valide"
                        
                       }else{
                        
                           formOutput.innerHTML = "ERREUR : Ticket non valide"
                           
                       }
                    
                    
                    break;          
                }
                
            }
        }
    }else{
        
        alert("Date invalide");
        
    }              
});

/*Empêche la fonction auto du bouton validate*/
validateButton.addEventListener('click', (event)=>{
    
    event.preventDefault();
    
});

/*réinitialisation des valeurs*/
window.addEventListener('load', function reloadValues(){
    
    document.getElementById('normTicket').checked = true;
    ageInput.value = "";
    
});

/*-----------------------------FONCTIONS---------------------------------------*/


function getAge(date) {
       
        let diff = Date.now() - date.getTime();
        let age = new Date(diff);
    
        return Math.abs(age.getUTCFullYear() - 1970);
       
}