
document.getElementById('sub').addEventListener('click', execute);


function execute (){
    let NOM = document.getElementById('nom').value;
    let PRENOM = document.getElementById('prenom').value;
    let MAIL = document.getElementById('mail').value;
    const DATE = document.getElementById('date').valueAsDate;
    let LOGIN = document.getElementById('login').value;
    let MP1 = document.getElementById('MP').value;
    let MPC = document.getElementById('MPC').value;

   document.getElementById('repnom').value = nom(NOM);
   document.getElementById('repprenom').value = prenom(PRENOM);
   document.getElementById('repmail').value = mail(MAIL);
   document.getElementById('repdate').value = date(DATE);
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

function date(DATE){
    let aujourdhui = new Date();
    let age = getAge(DATE, aujourdhui);

    if (age < 18) {
        return "Votre être trop jeune";
    } else {
        if (age > 67) {
            return "Vous avez dépassé l'âge maximun";
        } else {
            return "";
        }
    }
}

function getAge(DATE, aujourdhui) {  
    var jourdate = DATE.getDate();
    var jourmois = DATE.getMonth();
    var jouran = DATE.getFullYear();
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