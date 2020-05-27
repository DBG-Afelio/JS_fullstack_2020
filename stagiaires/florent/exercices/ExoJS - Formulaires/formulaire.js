
document.getElementById('sub').addEventListener('click', execute);
document.getElementById('sugg').addEventListener('click', suggestionlogin);


function execute (){
    let NOM = document.getElementById('nom').value;
    let PRENOM = document.getElementById('prenom').value;
    let MAIL = document.getElementById('mail').value;
    const DATE = document.getElementById('date').valueAsDate;
    let TEL = document.getElementById('telephone').value;
    let LOGIN = document.getElementById('login').value;
    let MP1 = document.getElementById('mp').value;
    let MPC = document.getElementById('mpc').value;
    let pays = document.getElementById('nationalite').value;
   
    document.getElementById('repnom').value = nom(NOM);
    document.getElementById('repprenom').value = prenom(PRENOM);
    document.getElementById('repmail').value = mail(MAIL);
    document.getElementById('reptel').value = tel(TEL);
    document.getElementById('repdate').value = date(DATE);
    document.getElementById('replogin').value = login(LOGIN);
    document.getElementById('repMP').value = mp(MP1);
    document.getElementById('repMPC').value = mpc(MPC, MP1);
    document.getElementById('repays').value = ORIGINE(pays);
}

function nom(NOM){
    if (NOM.length == 0) {
        return "Veuillez compléter ce champ merci";
    } else {
        if (NOM.length < 3) {
            return "Votre nom doit contenir au minimun 3 carctères";
        } else {
            if (NOM.length > 50){
                return "Votre nom doit contenir moins de 50 carctères";
            } else{
                return ""
            }
        } 
    }
}

function prenom(PRENOM){
    if(PRENOM.length < 3 && PRENOM.length != 0) {
        return "Votre nom doit contenir au minimun 3 carctères";
    } else {
        if (PRENOM.length > 50){
            return "Votre nom doit contenir moins de 50 carctères";
        } else {
            return "";
        }
    }
}

function date(DATE){
    if(DATE != null){
        let aujourdhui = new Date('january 01, 2020 00:00:00');
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
    }else{
        return "Veuillez complèter ce champ merci";
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

function tel(TEL){
    if (TEL.slice(0, 4) == "0032" || TEL.slice(0, 3) == "+32" || TEL.slice(0, 2) == "00") {
        return "";
    } else {
        return "Numéro invalide";
    }
}

function mail(MAIL){
    const carac = '@';
    if (MAIL.includes(carac) == false ) {
        return "L'email ne respecte pas le format";
    } else {
        return "";
    }
}

function login(LOGIN){
    if (LOGIN.length == 0) {
        return "Veuillez complèter ce champ merci"
    } else {
        if (LOGIN.length < 6 || LOGIN.length >10) {
            return "Le login doit contenir entre 6 et 10 caractères";
        } else {
            return "";
        }
    }
    
}

function suggestionlogin (){
    let sugnom = document.getElementById('nom').value;
    let sugprenom = document.getElementById('prenom').value;

    let newnom = sugnom.slice(0, 2);
    let newprenom = sugprenom.slice(0, 1);
    let a = Math.floor(Math.random()*1000);

    let newlogin = (newprenom+newnom+"_"+a);

    document.getElementById('login').value = newlogin;
}

function mp(MP1){
    if (MP1.length == 0) {
        return "Veuillez complèter ce champ merci";
    } else {
        if (MP1.length < 6) {
            return "MP faible";
        } else {
            
            if (MP1.length > 6 && MP1.length < 10) {
                return "MP moyen";
            } else {
                return "MP fort";
            }
        }
    }
}

function mpc(MPC, MP1){
    if (MPC != MP1){
        return "Les mots de passe de correspondent pas!";   
    } else{
        return "";
    }
}

function ORIGINE(pays){
    if (pays == "Nationalité") {
        return "Veuillez faire une sélection";
    } else {
        return "";
    }
}