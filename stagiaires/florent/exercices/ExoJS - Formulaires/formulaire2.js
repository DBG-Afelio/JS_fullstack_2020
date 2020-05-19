let NOM = document.getElementById('nom').value;
let PRENOM = document.getElementById('prenom').value;

document.getElementById('sub').addEventListener('click', execute);


function execute (){
   document.getElementById('repnom').value = nom();
   document.getElementById('repprenom').value = prenom();
}

function nom(NOM){
    if (NOM.length == 0) {
        return "Veuillez compléter ce champ merci";
    } else {
        if (NOM.length < 3) {
            return "Votre nom doit contenir au minimun 3 carctères";
        } else {
            if (NOM.length <50){
                return "Votre nom doit contenir moins de 50 carctères";
            } else{
                return ""
            }
        }
        
    }
}

function nom(PRENOM){
    if(PRENOM.length < 3) {
        return "Votre nom doit contenir au minimun 3 carctères";
    } else {
        if (PRENOM.length <50){
            return "Votre nom doit contenir moins de 50 carctères";
        } else{
            return "";
        }
    }
}