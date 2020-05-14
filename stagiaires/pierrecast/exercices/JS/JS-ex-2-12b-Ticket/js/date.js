const today = new Date();

document.querySelector('#submit').addEventListener('click', function (e) {
    e.preventDefault;
    submit();
});

function submit() {
    let birthDate = document.querySelector('#date').value; console.log('birthDate : ', birthDate);
    let ticketType = document.forms[0].ticket.value; console.log('ticketType : ', ticketType);

    if (isValid(birthDate)) {
        let ageTime = today.getTime() - new Date(birthDate).getTime();
        let age = ageTime / 1000 / 60 / 60 / 24 / 365; 

        console.log("birthDate : ", birthDate, "age : ", transformAge(age), "ticketType : ", ticketType);
       
        if (ticketType === 'ticketA' || (ticketType === 'ticketB' && age < 12) || age < 6) {
            alert ('Vous pouvez entrer. Bonne Visite !');
        } else {
            if (age >= 6) {
                if (age >= 12) {
                    alert ('Vous avez 12 ans ou plus ('+transformAge(age)+'). Il vous faut un ticket A !');
                } else {
                    alert ('Vous avez 6 ans ou plus ('+transformAge(age)+'). Il vous faut un ticket B');
                }
            } 
        }
    } else {
        alert ('Le format de date inserée n\'est pas correcte');
    }
    
    function isValid(date) {
        date = new Date(date);
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        let lastDays = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
        lastDays[1] = isBissextile(year) ? 29 : 28;

        return month >= 0 && month <= 11 && day >= 0 && day < lastDays[month] && date.getTime() < today.getTime();
    }

    function transformAge(age) {
        let an = Math.floor(age);
        let mois = Math.floor((age - an)*12)
        let txt = '';
        if (an >= 6) {
            txt += an + " an" + ((an !== 1) ? 's' : '') ;
            if (mois > 0) {
                txt += ((txt !== '') ? ' et ' : '') + mois + " mois" ;
            } 
        } else {
            txt = 'moins de 6 ans';
        }

        return txt;
    }

    function isBissextile(year) {
        //l'année n’est bissextile que dans l’un des deux cas suivants :
        //si l'année est divisible par 4 et non divisible par 100 ;
        //si l'année est divisible par 400.

        return year % 400 === 0 || (year  % 4 === 0 && year % 100 !== 0);
    }
}
