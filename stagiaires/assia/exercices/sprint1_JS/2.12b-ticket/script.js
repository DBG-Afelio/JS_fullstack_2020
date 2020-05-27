const fieldDate = document.querySelector('.form-date');
const ageOutput = document.querySelector('#age');
const fieldTicket = document.querySelector('.form-ticket');
const ticketRadio = document.querySelectorAll('input[type=radio]');
const submitBtn = document.getElementById('validerBtn');


let today = new Date();
const ageLimitGratuit = 6;
const ageLimitReduit = 12;

fieldDate.addEventListener('input', () => {
    updateMessageErrorDate(fieldDate, ageOutput);
});
ticketRadio.forEach(radio => {
    radio.addEventListener('change', fieldTicket.classList.remove('required'));
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
});

function submitForm(dateField, tciketField) {
    updateDateField(fieldDate);
    updateTicketField(fieldTicket, ticketRadioInputs);
}



/**
 * Fonction qui met a jour les messages utilisateurs pour le champ DATE 
 * @param {<div date>}
 * @returns boolean 
 */
function updateMessageErrorDate(dateField,ageField) {
    dateField.classList.remove('required', 'invalide');
    let date = dateField.querySelector('input').value;
    console.log(date);
    if (date == null) { //or empty ?
        dateField.classList.add('required');
    } else if (new Date(date) > today) {
        dateField.classList.add('invalide');
    } else {
        age = DateToAge(date)[2];
        ageField.value = age + 'ans';
    }
}


/**
 * Fonction qui convertit une date en age
 * @param {date}
 * @returns {age array [in ms, in years (float), in years (rounded)]} 
 */
function DateToAge (date) {

    let ageMs = today.getTime() - new Date(date).getTime();
    let ageFloat = ageMs / 1000 / 60 / 60 / 24 / 365;
    let ageRound = Math.floor(ageFloat);
    let ageArray = [ageMs, ageFloat, ageRound];
    return ageArray
}