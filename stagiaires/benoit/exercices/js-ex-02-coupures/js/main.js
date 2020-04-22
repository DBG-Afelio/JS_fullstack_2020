// This software asks for a price, and then return the equivalent amount
// in banknotes of 500, 200, 100, 50, 20, 10, 5, 2, 1

// Variables
let montant;
let nombreBillets;
let typeBillet;
let typeCoupure = new Array("billets200", "billets100", "billets50", "billets20", "billets10", "billets5", "pieces2euros", "pieces1euros", "pieces50cents", "pieces20cents", "pieces10cents", "pieces5cents");
let form_on_the_page;

//functions

function fonctionBillets(montant, typeBillet) {
    return Math.floor(montant / typeBillet);
}

function fonctionMontant(montant, nombreBillets, typeBillet) {
    return montant - (typeBillet * nombreBillets);
}

// the code starts

form_on_the_page = document.getElementById("which_amount").innerHTML;

if (form_on_the_page != null) {

    document.getElementById("submit").addEventListener('click', function (event) {

        //Loop to put all values to zero
        for (i = 0; i < typeCoupure.length; i++) {
            document.getElementById(typeCoupure[i]).innerHTML = 0;
        }

        document.getElementById("message").innerHTML = "";
        
        montant = document.getElementById("montant").value;

        Number(montant);

        if(isNaN(montant)){
            console.log("Montant n'est pas un nombre");
            document.getElementById("message").innerHTML = "Ce n'est pas un nombre";
        }

        else{
            console.log("Montant est un nombre AAA");
            if (montant >= 200) {
                nombreBillets = fonctionBillets(montant, 200);
                montant = fonctionMontant(montant, nombreBillets, 200);
                document.getElementById("billets200").innerHTML = nombreBillets;
            }
            if (montant >= 100) {
                nombreBillets = fonctionBillets(montant, 100);
                montant = fonctionMontant(montant, nombreBillets, 100);
                document.getElementById("billets100").innerHTML = nombreBillets;
            }
            if (montant >= 50) {
                nombreBillets = fonctionBillets(montant, 50);
                montant = fonctionMontant(montant, nombreBillets, 50);
                document.getElementById("billets50").innerHTML = nombreBillets;
            }
            if (montant >= 20) {
                nombreBillets = fonctionBillets(montant, 20);
                montant = fonctionMontant(montant, nombreBillets, 20);
                document.getElementById("billets20").innerHTML = nombreBillets;
            }
            if (montant >= 10) {
                nombreBillets = fonctionBillets(montant, 10);
                montant = fonctionMontant(montant, nombreBillets, 10);
                document.getElementById("billets10").innerHTML = nombreBillets;
            }
            if (montant >= 5) {
                nombreBillets = fonctionBillets(montant, 5);
                montant = fonctionMontant(montant, nombreBillets, 5);
                document.getElementById("billets5").innerHTML = nombreBillets;
            }
            if (montant >= 2) {
                console.log('Montant pièce 2A est égal à ' + montant);
                nombreBillets = fonctionBillets(montant, 2);
                montant = fonctionMontant(montant, nombreBillets, 2);
                console.log('Montant pièce 2B est égal à ' + montant);
                document.getElementById("pieces2euros").innerHTML = nombreBillets;
            }
            if (montant >= 1) {
                console.log('Montant pièce 1 est égal à ' + montant);
                montant = montant - 1;
                document.getElementById("pieces1euros").innerHTML = 1;
            }
            if (montant >= 0.5) {
                montant = montant - 0.5;
                document.getElementById("pieces50cents").innerHTML = 1;
            }
            if (montant >= 0.4) {
                montant = montant - 0.4;
                document.getElementById("pieces20cents").innerHTML = 2;
            }
            if (montant >= 0.2) {
                montant = montant - 0.2;
                document.getElementById("pieces20cents").innerHTML = 1;
            }
            if (montant >= 0.1){
                montant = montant - 0.1;
            document.getElementById("pieces10cents").innerHTML = 1;
            }
            if (montant >= 0.01){
                document.getElementById("pieces5cents").innerHTML = 1;
            }
        }

        event.preventDefault();
    });

}
