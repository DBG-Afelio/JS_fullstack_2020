// Stockage des values des différentes coupures (50000 = 500 €, 1 = 1 cent)
const values = [
	50000, 20000, 10000, 
	5000, 2000, 1000,
	500, 200, 100,
	50, 20, 10,
	5, 2, 1
];
const stock = generateStock(); // tableau avec les différents stocks de coupures
let sum = 0;
let reste;
let quantities ; // Stokage des diiférentes quantités de coupures nécessaires
init();

document.getElementById('submit').addEventListener('click', function (e) {
	e.preventDefault();
	submitSum();
	return false;
});

// récupère la somme et vérifie la validité
function submitSum(){
	init();
	quantities = [];
	sum = Number(document.getElementById('sum').value)*100;
	reste = sum;
	if (Number.isInteger(sum) && sum > 0) {
		calculate();
	} else {
		alert("Veuillez entrer un nombre positif avec maximum 2 décimales. ex: 745.23");
	}
}

//création d'un stock aléatoire 
function generateStock() {
	let arr = [];
	for (let i = 0; i < values.length; i++) {
		let item = Math.floor(Math.random()*21); // nombre aléatoire entre 0 et 20;
		arr.push(item);
		document.getElementById('item'+values[i]).getElementsByClassName('stock')[0].innerHTML = item;
	}

	return arr;
}

// Décomposition la somme et affichage le résultat
function calculate() {
	let text = '';
	let qte = 0;
	let oTr;

	for (let i = 0; i < stock.length ; i++) {
		qte = Math.floor(reste / values[i]); // partie entière de la division
		quantities.push(Math.min(stock[i], qte));
		reste -= quantities[i]*values[i];
		oTr = document.getElementById('item'+values[i]);
		oTr.getElementsByClassName('result')[0].innerHTML = quantities[i];
		if (quantities[i] > 0) {
			text = text.concat(oTr.getElementsByClassName('name')[0].innerHTML + " : " + quantities[i] +"<br>");
		}
	}	

	if (reste > 0) {
		document.getElementById("finalResult").innerHTML = "Il n'y a pas assez d'argent dans le stock ! <br> Stock = "+((sum-reste)/100)+"<br>Reste = "+(reste/100);
	} else {
		document.getElementById("finalResult").innerHTML = text;
	}
}

// initialisation des résultats
function init() {
	document.getElementById("finalResult").innerHTML = '';
	for (let i = 0; i < values.length ; i++) {
		document.getElementById('item'+values[i]).getElementsByClassName('result')[0].innerHTML = '';
	}
}
