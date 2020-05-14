const today = new Date();
const oResult = document.querySelector('#result');
const oSubmit = document.querySelector('#submit');
const oDate = document.querySelector('#date');

oSubmit.addEventListener('click', function (e) {
    e.preventDefault;
    submit();
});

//oDate.addEventListener('focus', clearResult);

function submit() {
    let birthDate = document.querySelector('#date').value; console.log('birthDate : ', birthDate);
    let ticketType = document.forms[0].ticket.value; console.log('ticketType : ', ticketType);

    if (isValid(birthDate)) {
        let ageTime = today.getTime() - new Date(birthDate).getTime();
        let age = ageTime / 1000 / 60 / 60 / 24 / 365; 

        console.log("birthDate : ", birthDate, "age : ", transformAge(age), "ticketType : ", ticketType);
       
        if (ticketType === 'ticketA' || (ticketType === 'ticketB' && age < 12) || age < 6) {
            insertResult('Vous pouvez entrer. Bonne Visite !', true);
        } else {
            if (age >= 6) {
                if (age >= 12) {
                    insertResult('Vous avez 12 ans ou plus ('+transformAge(age)+'). Il vous faut un ticket A !', false);
                } else {
                    insertResult('Vous avez 6 ans ou plus ('+transformAge(age)+'). Il vous faut un ticket B', false);
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

        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }

    function insertResult(txt, enter) {
        /*let oDisc = document.createElement('div');
        let oP = document.createElement('p')
        if (enter) {
            let oCheck = document.createTextNode('V');
            oDisc.setAttribute('class', 'good')
        } else {
            let oCheck = document.createTextNode('X');
            oDisc.setAttribute('class', 'wrong')
        }
        oResult.appendChild(oDisc)
        
        oP.appendChild(document.createTextNode(txt));
        oResult.appendChild(oP);*/

        alert(txt);

    }

    function clearResult() {
        oResult.innerHTML = '';
    }
}
