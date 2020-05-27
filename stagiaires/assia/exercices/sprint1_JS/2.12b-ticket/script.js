const fieldDate = document.querySelector('form-date');
const fieldTicket = document.querySelector('.form-ticket');
const submitBtn = document.getElementById('#validerBtn');
const radiosTicket = document.forms[0].ticketOption;

const today = get
const ageLimitGratuit = 6;
const ageLimitReduit = 12;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
});

function submitForm (dateField, tciketField){
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
