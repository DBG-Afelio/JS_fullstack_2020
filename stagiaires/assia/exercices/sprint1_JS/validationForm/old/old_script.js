/*jshint esversion: 6 */





const formEl = document.querySelector('#form'); console.log('formEl :'+formEl);
const nomEl = document.querySelector('#nom');
const nationEl = document.querySelector('#nation');
const genreListEl = formEl.elements.namedItem("genre"); console.log('genreEl: '+genreListEl);
const validerBtnEl = document.querySelector('#valider'); console.log('validerBtn :'+validerBtnEl);

validerBtnEl.addEventListener('click', submit());

function submit () {
console.log();
}
