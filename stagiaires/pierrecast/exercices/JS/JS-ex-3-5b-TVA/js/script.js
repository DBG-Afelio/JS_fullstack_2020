const oSubmit = document.querySelector('#submit');
const oType = document.querySelector('#type');
const oNumber = document.querySelector('#number');
const oResult = document.querySelector('#results');
const oOutput = document.querySelectorAll('output');
const taux = {
    "1" : 0.06,
    "2" : 0.12,
    "3" : 0.21,
    "4" : 0,
};

oSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    submit();
});
oType.addEventListener('focus', remove);
oNumber.addEventListener('focus', remove);

function submit() {
    let number = checkNumber();
    let type = getType();
    
    console.log('Prix : ', number, ' TYPE : ', type );
    if (number !== undefined) {
        if (type === 0) {
            alert('Aurevoir !');
            // sortie(); 
            // supprimer form ?
        } else {
            let values = calculate(number, type);
            showResult(values);
        }
    } else {
        alert ('Le montant doit être un nombre positif à 2 décimales maximum');
    }
}

function checkNumber() {
    let number = parseFloat(oNumber.value); console.log(number*100);
    // Doit être un nombre positif à max 2 décimales
    console.log(Number.isInteger(number * 100), number > 0);
    if (Number.isInteger(number * 100) && number > 0) {
        return number;
    } 

    return undefined;
}

function getType() {
    return Number(oType.options[oType.selectedIndex].value);
}

function calculate(number, type) {
    let tva = taux[type];
    let values = [
        number + " &euro;", 
        (tva * 100)+" %",
        (number * tva).toFixed(2)+ " &euro;",
        (number + number * tva).toFixed(2)+ " &euro;",
    ];

    return values;
}

function showResult(values) {
    oOutput.forEach((output, index) => {
        output.innerHTML = values[index];
    });
    oResult.classList.add('active');
}

function remove() {
    oResult.classList.remove('active');
}
