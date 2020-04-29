let water_used = 0;
let total_price = 0;
const vat = 121 / 100;
const fixed_cost = 15;


function watercost() {
    water_used = document.querySelector('input[name="water_used"]').value;

    Number(water_used);

    if (isNaN(water_used)) {
        document.querySelector('span[name="message"]').innerHTML = 'Mettez une consommation sous un format numérique';
        document.querySelector('output[name="total_price"]').value = '';
    }
    else if (water_used != null) {

        document.querySelector('span[name="message"]').innerHTML = '';

        if (water_used <= 10) {
            total_price = fixed_cost * vat;

        }

        else if (water_used > 50) {
            total_price = (fixed_cost + 12.5 + 6 + (water_used - 50) * 0.25) * vat;

        }

        else if (water_used <= 35) {
            total_price = (fixed_cost + (water_used - 10) * 0.5) * vat;

        }

        else if (water_used <= 50) {
            total_price = (fixed_cost + 12.5 + (water_used - 35) * 0.4) * vat;

        }

        document.querySelector('output[name="total_price"]').value = Math.floor(total_price*100)/100;

    }
}

// To empty data on the page
window.onload = function () {
    document.querySelector('input[name="water_used"]').value = '';
    document.querySelector('output[name="total_price"]').value = '';
};

//When the submit button is pushed
document.querySelector('input[name="button_submit"]').addEventListener("click",


    watercost(),

    false);










