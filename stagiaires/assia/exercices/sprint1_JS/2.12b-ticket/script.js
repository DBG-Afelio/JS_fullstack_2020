/*jshint esversion: 6 */
/* -- Debut STILL TO BE DONE -------------------------------------------------

----- Fin STILL TO BE DONE---------------------------------------------------- */

// -- DEBUT DECLARATION VARIABLES --------------------------------------------
const ticketOptionEl = document.querySelectorAll('input[name="ticketOption"]:checked');
console.log("mes radios" +ticketOptionEl);
//const ticketOptionEl = document.querySelectorAll('ticketOption');
const dateNaissanceEl = document.querySelector('#dateNaissance');
console.log("dobEL :"+dateNaissanceEl+"  value :"+dateNaissanceEl.value+"  valueAsDate :"+dateNaissanceEl.valueAsDate+"  valueAsNumber :"+dateNaissanceEl.valueAsNumber );
const submitEl = document.querySelector('#submit');
const radiosTicket = document.forms[0].ticketOption;


//***Autres

const ageLimitGratuit = 6;
const ageLimitReduit = 12;

// -- FIN DECLARATION VARIABLES -----------------------------------------------
submitEl.addEventListener('click', submit);

/*
submitEl.addEventListener('click', function(e) {
    e.preventDefault(); //meaning default action (=submitting form) when Clicking on "Submit" will not occur
    submit();
});
*/

function submit (){
    const ticketSelected = radiosTicket.value;

/*
    const radioEl = document.getElementsByName('ticketOption');
    console.log("radioEl" +radioEl);
    console.log(radioEl.length);
    for (let i=0; i < radioEl.length; i++) {
        if (radio[i].checked) {
            ticketSelected = radio[i].value;
        }
    }
*/

/*
    for (const radio of ticketOptionEl) {
        if (radio.checked) {
            ticketSelected = radio.value;
            break;
        }

    }
    ticketSelected = ticketOptionEl.value;
*/
    console.log(ticketSelected);

    if (isNaN(dateNaissanceEl.valueAsNumber) == false || ticketSelected == '') {
        let isDateValid = dateNaissanceEl.valueAsNumber < Date.now() ? true : false ;
        if (isDateValid) {
    //    convertDob2Age(dobEl.valueAsDate, userAge);
            const userAge = 10; //<- a supprimer - juste pour tester
            if (ticketSelected == 'ticketPlein' || userAge <= ageLimitGratuit || ticketSelected  == 'ticketReduit' && userAge <= ageLimitReduit || ticketSelected  == 'ticketGratuit' && userAge <= ageLimitGratuit) {
                console.log("Pass autorisé !");
            }
            else {
                console.log("ticket non valid pour votre age");
            }
        }
        else {
            console.log("Erreur formulaire : Date indiquee ne peut etre posterieure a la date d'ajd");
        }
    }
    else {
        console.log("Merci de remplir tous les champs !");
    }
}

/*
    if (isNaN(dobEl.valueAsNumber) == false) {
        let isDateValid = dateNaissanceEl.valueAsNumber < Date.now() ? true : false ;
        if (isDateValid) {
    //    convertDob2Age(dobEl.valueAsDate, userAge);
            if (selection == 'plein' || userAge <= ageLimitGratuit || selection == 'reduit' && userAge <= ageLimitReduit || selection == 'gratuit' && userAge <= ageLimitGratuit) {
                accesEl.textContent = "OUI";
                messageEl.textContent = "Awesome ! Enjoy and have fun !";
            }
            else {
                accesEl.textContent = "NON";
                messageEl.textContent = "Compte-tenu de votre age, l'acces ne vous est pas autorisé avec ce ticket";
            }
        }
        else {
            accesEl.textContent = "Erreur formulaire";
            messageEl.textContent = "date invalide";
        }
    }
    else {
        accesEl.textContent = "Erreur formulaire";
        messageEl.textContent = "Tous les champs sont obligatoires";
    }
}

*/

/*-----------------------------------------------*/




/*
*/

/*
function convertDob2Age (dateOfBirth, age) {
//    const dateOfBirth = new Date();
//    const age = new Number;
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    messageEl.textContent = new Date(age);
    accesEl.textContent =  currentMonth;

}
*/
