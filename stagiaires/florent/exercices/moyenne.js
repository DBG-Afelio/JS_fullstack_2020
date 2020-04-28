let total;
let grand;
let petit;
let tab=[];
let nbremoy;
let nbrecb;
let p;
let suite;
document.getElementById('sub').addEventListener('click',execute);
document.getElementById('subre').addEventListener('click',recom);

function execute () {
	const nbreAsString = document.getElementById('nbr').value;

	if (nbreAsString !== "" && Number.isInteger(Number(nbreAsString))){
		const nbre=Number(document.getElementById('nbr').value);
		tab.push(nbre);
		total=somme(tab);
		grand=max(tab);
		petit=min(tab);
		nbrecb=tab.length;
		nbremoy=total/nbrecb;
		p=nbrenbr(tab);
		suite = plusGrandeSequance(tab);

		writeResponse();
	}
}

function recom() {

	tab=[];
	total=0;
	grand=0;
	petit=0;
	nbremoy=0;
	nbrecb=0;
	suite=0;

	writeResponse();
}

function somme(tab) {
	let som = 0;
	for (let i = 0; i < tab.length; i++) {
		som=som+tab[i];
	}
	return som;
}

function min(tab) {
	let min =tab[0];

	for (let i = 0; i < tab.length; i++) {
		if (min>tab[i]) {
			min=tab[i];
		}
	}
	return min;
}

function max(tab){
	let max = tab[0];

	for (var i = 0; i < tab.length; i++) {
		if (max<tab[i]) {
			max=tab[i];
		}
	}
	return max;
}

function nbrenbr(tab) {
	let energy;
	let tabfruit = [];
	var j = 0;

	for (var i = 0; i < tab.length; i++) {
		tabfruit[j] = tab[i];
		j++;
	}
	
	energy = tabfruit.join(" , ");
	return energy;
}

function plusGrandeSequance(tab) {
	let plusGrandeSuiteCroissanteActuelle = [tab[0]];
	let suiteActuelle = [tab[0]];

	for (var i = 1; i < tab.length; i++) {
		if (tab[i] <= tab[i - 1]) {
			suiteActuelle.push(tab[i]);
		} else {
			suiteActuelle = [tab[i]];
		}
		if (suiteActuelle.length > plusGrandeSuiteCroissanteActuelle.length) {
			plusGrandeSuiteCroissanteActuelle = [...suiteActuelle];
		}
	}
	return plusGrandeSuiteCroissanteActuelle;
}

function writeResponse() {
	document.getElementById("somme").value = total;
	document.getElementById("nbremax").value = grand;
	document.getElementById("nbremin").value = petit;
	document.getElementById("nbremoyenne").value = nbremoy;
	document.getElementById("nbrenbr").value = nbrecb;
	document.getElementById("nbrenbre").value = p;
	document.getElementById("nbresuite").value = suite;
}
