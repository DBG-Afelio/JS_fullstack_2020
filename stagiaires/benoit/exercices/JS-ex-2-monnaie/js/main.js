// This software asks for a price, and then return the equivalent amount
// in banknotes of 500, 200, 100, 50, 20, 10, 5, 2, 1

// Variables
let montant;
let nombreBillets;
let typeBillet;
let form_on_the_page;

//functions

function fonctionBillets(montant, typeBillet) {
    return Math.floor(montant / typeBillet);
}

function fonctionMontant(montant, nombreBillets, typeBillet) {
    return montant - (typeBillet * nombreBillets);
}

// the code starts

function which_amount() {

    //Loop to put all values to zero

    document.querySelectorAll('output').innerHTML = 0;


    document.querySelector('span[name="message"]').innerHTML = "";

    montant = Number(document.querySelector('input[name="montant"]').value);

    if (isNaN(montant)) {
        console.log("Montant n'est pas un nombre");
        document.querySelector('span[name="message"]').innerHTML = "Ce n'est pas un nombre";
    }

    else {
        console.log("Montant est un nombre AAA");
        if (montant >= 200) {
            nombreBillets = fonctionBillets(montant, 200);
            montant = fonctionMontant(montant, nombreBillets, 200);
            document.querySelector('output[name="billets200"]').innerHTML = nombreBillets;
        }
        if (montant >= 100) {
            nombreBillets = fonctionBillets(montant, 100);
            montant = fonctionMontant(montant, nombreBillets, 100);
            document.querySelector('output[name="billets100"]').innerHTML = nombreBillets;
        }
        if (montant >= 50) {
            nombreBillets = fonctionBillets(montant, 50);
            montant = fonctionMontant(montant, nombreBillets, 50);
            document.querySelector('output[name="billets50"]').innerHTML = nombreBillets;
        }
        if (montant >= 20) {
            nombreBillets = fonctionBillets(montant, 20);
            montant = fonctionMontant(montant, nombreBillets, 20);
            document.querySelector('output[name="billets20"]').innerHTML = nombreBillets;
        }
        if (montant >= 10) {
            nombreBillets = fonctionBillets(montant, 10);
            montant = fonctionMontant(montant, nombreBillets, 10);
            document.querySelector('output[name="billets10"]').innerHTML = nombreBillets;
        }
        if (montant >= 5) {
            nombreBillets = fonctionBillets(montant, 5);
            montant = fonctionMontant(montant, nombreBillets, 5);
            document.querySelector('output[name="billets5"]').innerHTML = nombreBillets;
        }
        if (montant >= 2) {
            console.log('Montant pièce 2A est égal à ' + montant);
            nombreBillets = fonctionBillets(montant, 2);
            montant = fonctionMontant(montant, nombreBillets, 2);
            console.log('Montant pièce 2B est égal à ' + montant);
            document.querySelector('output[name="pieces2euros"]').innerHTML = nombreBillets;
        }
        if (montant >= 1) {
            console.log('Montant pièce 1 est égal à ' + montant);
            montant = montant - 1;
            document.querySelector('output[name="pieces1euros"]').innerHTML = 1;
        }
        if (montant >= 0.5) {
            montant = montant - 0.5;
            document.querySelector('output[name="pieces50cents"]').innerHTML = 1;
        }
        if (montant >= 0.4) {
            montant = montant - 0.4;
            document.querySelector('output[name="pieces20cents"]').innerHTML = 2;
        }
        if (montant >= 0.2) {
            montant = montant - 0.2;
            document.querySelector('output[name="pieces20cents"]').innerHTML = 1;
        }
        if (montant >= 0.1) {
            montant = montant - 0.1;
            document.querySelector('output[name="pieces10cents"]').innerHTML = 1;
        }
        if (montant >= 0.01) {
            document.querySelector('output[name="pieces5cents"]').innerHTML = 1;
        }

    }
}


document.querySelector('input[name="submit"]').addEventListener('click', which_amount) 