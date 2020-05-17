let aujourdhui = new Date();
const TEXT_VALIDE = "Vous êtes en ordre. Bienvenu!";
const TEXT_NONVALIDE = "Vous n'êtes pas en ordre. Veuillez vous procurez un ticket valide ou dire la vérité sur votre âge. Merci!";
const choix1 = document.getElementById("normal").value;
const choix2 = document.getElementById("reduit").value;
const choix3 = document.getElementById("aucun").value;

document.getElementById('sub').addEventListener('click', execute);

function execute(){
    const date = document.getElementById('age').valueAsDate;
    if (date < aujourdhui) {
        const valeur = document.querySelector('input[name=choix]:checked').value;
        const age = getAge(date, aujourdhui);
        if (valeur === choix1 && age >= 12) {
            document.getElementById('reponse').className = "valide";
            document.getElementById('reponse').value = TEXT_VALIDE;
        }
        if (valeur === choix2 && age < 12 && age>=6) {
            document.getElementById('reponse').className = "valide";
            document.getElementById('reponse').value = TEXT_VALIDE; 
        }
        if (valeur === choix3 && age<6) {
            document.getElementById('reponse').className = "valide";
            document.getElementById('reponse').value = TEXT_VALIDE;
        }else{
            document.getElementById('reponse').value = TEXT_NONVALIDE;
            document.getElementById('reponse').className = "invalide";
        }
        document.getElementById('datevalide').value = "";
        console.log(aujourdhui);
        console.log(getAge(date, aujourdhui));
    } else {
        document.getElementById('datevalide').value = "Date non valide!";
    }
}

function getAge(date, aujourdhui) {  
    var jourdate = date.getDate();
    var jourmois = date.getMonth();
    var jouran = date.getFullYear();
    var jouraujourdhui = aujourdhui.getDate();
    var moisaujourdhui = aujourdhui.getMonth();
    var anaujourdhui = aujourdhui.getFullYear();
    var agesans = anaujourdhui - jouran;
    var agesmois = moisaujourdhui - jourmois;

    if (agesmois <0) {
        agesans = agesans - 1;
    } else {
        if (agesmois == 0){
            var agesjour = jouraujourdhui - jourdate;
            if (agesjour < 0){
                agesans = agesans - 1; 
            }
        }
    }
    return agesans;
}