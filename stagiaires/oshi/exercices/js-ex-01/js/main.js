window.addEventListener("DOMContentLoaded", () => {
//On initie les variables
let newvalue = 0;
let lastvalue = 0;
let lastmc = 0;
let count = 0;
let actualseq = [];
let isOn = false;
let x;
const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const value3 = document.getElementById("value3");
const value4 = document.getElementById("value4");
const value5 = document.getElementById("value5");
const value6 = document.getElementById("value6");
const value7 = document.getElementById("value7");
//On crée les écoutes des évenements
document.getElementById("submit").addEventListener("click", function(){ moyenne(); });
document.getElementById("restart").addEventListener("click", function(){ reset(); });
document.getElementById("auto").addEventListener("click", function(){ randomnumb(); });
document.getElementById("formsub").addEventListener("submit", function(e){ e.preventDefault();moyenne(); });
//Fonction lorsqu'un nombre est entrer
function moyenne(xxx) {
    //On vérifie si le nombre est envoyer depuis l'utilisateur ou le script d'envoie automatique
    if(xxx === undefined) {
        //Si envoyer par l'utilisateur la nouvelle valeur est celle entrer dans l'input
        newvalue = Number(document.getElementById("nombreentier").value);
    } else {
        //Dans l'autre cas on rentre le nombre envoyer par la function qui envoie des nombres aléatoire
        newvalue = Number(xxx);
    }
    //On vérifie si le nombre entré est bien entier
    if(Number.isInteger(newvalue)== true) {
        //On vérifie si ce n'est pas la première fois qu'on envoie un nombre
        if(Number(value1.innerHTML) === 0) {
            //Dans ce cas on met simplement le nouveau nombre pour
            value6.innerHTML = newvalue;
            value3.innerHTML = newvalue;
            value4.innerHTML = newvalue;
        } else {
            //Dans le cas contraire on rajoute le nouveau nombre en comparant/gardant les anciens
            value6.innerHTML += ',' + newvalue;
            if(value3.innerHTML < newvalue) {
                value3.innerHTML = newvalue;
            }
            if(value4.innerHTML > newvalue) {
                value4.innerHTML = newvalue;
            }
        }
        //On rajoute un au nombre entrés
        value1.innerHTML = Number(value1.innerHTML) + 1;
        //On additionne les nombres entrés
        value2.innerHTML = Number(value2.innerHTML) + newvalue;
        //On fait une moyenne des nombres entrés
        value5.innerHTML = value2.innerHTML/value1.innerHTML;
        //Si le nouveau nombre es plus grand que l'ancien ou rajoute 1 au compteur et on ajoute le nouveau nombre à la séquence actuelle, dans le cas contraire on remet le compteur à 1 et on rénistialise la table en laissant uniquement le nouveau nombre entré
        if(newvalue > lastvalue) {count++;actualseq.push(newvalue);} else {count = 1;actualseq = [newvalue];}
        //Si le compteur est plus grand que l'ancien record de la plus grande séquence de nombre croissant on sauvegarde le nouveau record et on affiche le nouveau record
        if(count > lastmc) { lastmc = count;value7.innerHTML = actualseq; }
        //On sauvegarde le nouveau nombre dans une autre variable afin de le réutiliser pour la prochaine fois
        lastvalue = newvalue;
    } else {
        //On notifie que le nombre n'est pas un entier
        alert("Veuillez entrer un nombre entier");
    }
}
//Fonction pour recommencer tout
function reset() {
    //Reset du record
	lastmc = 0;
    //Reset du compteur
	count = 0;
    //Reset de la séquence actuelle
    actualseq = [];
    //On signale que la fonction des nombres automatique est désactiver
    isOn = false;
    //On désactive la fonction des nombres automatique
    clearTimeout(x);
    //On remet les compteur du DOM à zéro
    Array.from(document.querySelectorAll(".result")).forEach((rat) => rat.innerHTML = '0');
    //On remet le texte pour activer le mode auto
    document.getElementById("auto").innerHTML = 'Activer le mode automatique';
}
//Fonction des nombres auto
function randomnumb() {
    //On vérifie si il est activer ou pas
    if(isOn) {
        //Si il est activer on le désactive
        clearTimeout(x);
        //On signale qu'il est désactiver
        isOn = false;
        //On renome le bouton pour qu'il soit indiquer Activer
        document.getElementById("auto").innerHTML = 'Activer le mode automatique';
    } else {
        //Si il est désactiver on l'active
        x = setInterval(function(){ moyenne(Math.floor(Math.random() * 100)) }, 100);
        //On signale qu'il est activer
        isOn = true;
        //On renome le bouton pour qu'il soit indiquer Désactiver
        document.getElementById("auto").innerHTML = 'Arrêter le mode automatique';
    }
}
//On lance le reset pour qu'il soit indiqué 0 dans les DOM
reset();
});