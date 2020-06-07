let tabmp = ['gtr_342', 'fde_765', 'Yht_897', 'Ygh_034'];

document.getElementById('sub').addEventListener('click', execute);
document.getElementById('sugg').addEventListener('click', suggestion);

function suggestion(){
    suggestionlogin(tabmp);
}

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
    document.getElementById('replogin').value = login(LOGIN,tabmp);
    document.getElementById('repMP').value = mp(MP1);
    document.getElementById('repMPC').value = mpc(MPC, MP1);
    document.getElementById('repays').value = ORIGINE(pays);
}

function nom(NOM){
    document.getElementById('icone').value = "❌";
    if (NOM.length == 0) {
        return "Veuillez compléter ce champ merci";
    } else {
        if (NOM.length < 3) {
            return "Votre nom doit contenir au minimun 3 carctères";
        } else {
            if (NOM.length > 50){
                return "Votre nom doit contenir moins de 50 carctères";
            } else{
                document.getElementById('icone').value = "✅";
                return ""
            }
        } 
    }
}

function prenom(PRENOM){
    document.getElementById('iconep').value = "❌";
    if(PRENOM.length < 3 && PRENOM.length != 0) {
        return "Votre nom doit contenir au minimun 3 carctères";
    } else {
        if (PRENOM.length > 50){
            return "Votre nom doit contenir moins de 50 carctères";
        } else {
            document.getElementById('iconep').value = "✅";
            return "";
        }
    }
}

function date(DATE){
    document.getElementById('iconed').value = "❌";
    if(DATE != null){
        let aujourdhui = new Date('january 01, 2020 00:00:00');
        let age = getAge(DATE, aujourdhui);

        if (age < 18) {
            return "Votre être trop jeune";
        } else {
            if (age > 67) {
                return "Vous avez dépassé l'âge maximun";
            } else {
                document.getElementById('iconed').value = "✅";
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
    document.getElementById('iconet').value = "❌";
    if ((TEL.slice(0, 4) == "0032" && TEL.length >= 13 && TEL.length <= 16) || (TEL.slice(0, 3) == "+32" && TEL.length >= 12 && TEL.length <= 15) || (TEL.slice(0, 1) == "0" && TEL.length >= 10 && TEL.length <= 13)) {
        document.getElementById('iconet').value = "✅";
        return "";
    } else {
        return "Numéro invalide";
    }
}

function mail(MAIL){
    document.getElementById('iconee').value = "❌";
    const carac = /^\w+(\.\w+)*@\w+(\.\w+)*\.\w{2,}$/;
    if (carac.test(MAIL) === false ) {
        return "L'email ne respecte pas le format";
    } else {
        document.getElementById('iconee').value = "✅";
        return "";
    }
}

function login(LOGIN,tabmp){
    document.getElementById('iconetxt').value = "❌";
    if (LOGIN.length === 0) {
        return "Veuillez complèter ce champ merci"
    } else {
        if (LOGIN.length < 6 || LOGIN.length >10) {
            return "Le login doit contenir entre 6 et 10 caractères";
        } else {
            let i = 0;
            while ( i < tabmp.length) {
                if (LOGIN === tabmp[i]) {
                    return "Login déjà existant! Veuillez en choisir un autre";
                }
                i++;
            }
    
            document.getElementById('iconetxt').value = "✅";
            return "";
        }
    }
    
}

function suggestionlogin(tabmp){
    let sugnom = document.getElementById('nom').value;
    if (sugnom.length === 0) {
        document.getElementById('replogin').value = "Veuillez entre un nom pour bénéficier de la suggestion";
    } else {
        let sugprenom = document.getElementById('prenom').value;

        let newnom = sugnom.slice(0, 2);
        let newprenom = sugprenom.slice(0, 1);
        let log = false;
        let newlogin = "";

        while (log === false){
            let a = Math.floor(Math.random()*1000);

            if ( a < 100) {
                a = ("0"+a);
            }

            if ( a < 10) {
                a = ("00"+a);
            }

            newlogin = (newprenom+newnom+"_"+a);
            console.log(newlogin);

            let i = 0;
            while ( i < tabmp.length) {
                if (newlogin === tabmp[i]) {
                    log = false;
                }
                i++;
            }

            console.log(i);
            if ( i === tabmp.length) {
                log = true;
            }
        }
        document.getElementById('login').value = newlogin;
        
    }
    
}

function mp(MP1){
    document.getElementById('iconepass').value = "✅";
    if (MP1.length == 0) {
        document.getElementById('iconepass').value = "❌";
        return "Veuillez complèter ce champ merci";
    } else {
        if (MP1.length < 6) {
            document.getElementById('repMP').className = "invalid";
            return "MP faible";
        } else {
            if (MP1.length > 6 && MP1.length < 10) {
                document.getElementById('repMP').className = "moyen";
                return "MP moyen";
            } else {
                document.getElementById('repMP').className = "fort";
                return "MP fort";
            }
        }
    }
}

function mpc(MPC, MP1){
    document.getElementById('iconepassbis').value = "❌";
    if (MPC != MP1 || MPC.length == 0){
        return "Les mots de passe de correspondent pas ou veuillez ressaissir le MP!";   
    } else{
        document.getElementById('iconepassbis').value = "✅";
        return "";
    }
}

function ORIGINE(pays){
    document.getElementById('iconepays').value = "❌";
    if (pays == "") {
        return "Veuillez faire une sélection";
    } else {
        document.getElementById('iconepays').value = "✅";
        return "";
    }
}