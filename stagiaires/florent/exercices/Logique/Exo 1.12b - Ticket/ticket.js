var aujourdhui = new Date();
const TEXT_VALIDE = "Vous êtes en ordre. Bienvenu!";
const TEXT_NONVALIDE = "Vous n'êtes pas en ordre. Veuillez vous procurez un ticket valide ou dire la vérité sur votr âge. Merci!";
var choix1 = document.getElementById("normal").value;
var choix2 = document.getElementById("reduit").value;
var choix3 = document.getElementById("aucun").value;

document.getElementById('sub').addEventListener('click', execute);

function execute(){
    const date = document.getElementById('age').value;
    if (date != aujourdhui.toLocaleString()) {
        var valeur = document.querySelector('input[name=choix]:checked').value;
        if (valeur == choix1 && date) {
            document.getElementById('reponse').value = "Normal"
        }
        if (valeur == choix2 && date) {
            document.getElementById('reponse').value = "Reduit"
        }
        if (valeur == choix3 && date) {
            document.getElementById('reponse').value = "Aucun"
        }
        console.log(aujourdhui.toLocaleString());
        console.log(getAge(date));
    }
}

function getAge(date) { 
    var diff = Date.now() - date.getTime();
    var age =  date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}