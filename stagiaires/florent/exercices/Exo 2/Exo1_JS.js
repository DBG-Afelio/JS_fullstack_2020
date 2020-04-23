let double;
let annees;
let conver;
let degres;
let deuxnombres;
let calad;
let calsous;
let caldiv;
let calmult;
let caldivr;
let calexp;


document.getElementById('pair').addEventListener('click',execute);
document.getElementById('biss').addEventListener('click',execute);
document.getElementById('conv').addEventListener('click',execute);
document.getElementById('equa').addEventListener('click',execute);
document.getElementById('som').addEventListener('click',execute);
document.getElementById('Ad').addEventListener('click',execute);
document.getElementById('Sous').addEventListener('click',execute);
document.getElementById('Mult').addEventListener('click',execute);
document.getElementById('Div').addEventListener('click',execute);
document.getElementById('Divr').addEventListener('click',execute);
document.getElementById('Exp').addEventListener('click',execute);


function execute() {
	const nbre1=Number(document.getElementById('nbp').value);
	const nbre2=Number(document.getElementById('nbi').value);
	const nbre3=Number(document.getElementById('nbc').value);
	const nbre4=Number(document.getElementById('a').value);
	const nbre5=Number(document.getElementById('b').value);
	const nbre6=Number(document.getElementById('nbs1').value);
	const nbre7=Number(document.getElementById('nbs2').value);
	const nbre8=Number(document.getElementById('nbad1').value);
	const nbre9=Number(document.getElementById('nbad2').value);
	const nbre10=Number(document.getElementById('nbsous1').value);
	const nbre11=Number(document.getElementById('nbsous2').value);
	const nbre12=Number(document.getElementById('nbmult1').value);
	const nbre13=Number(document.getElementById('nbmult2').value);
	const nbre14=Number(document.getElementById('nbdiv1').value);
	const nbre15=Number(document.getElementById('nbdiv2').value);
	const nbre16=Number(document.getElementById('nbdivr1').value);
	const nbre17=Number(document.getElementById('nbdivr2').value);
	const nbre18=Number(document.getElementById('nbexp1').value);
	const nbre19=Number(document.getElementById('nbexp2').value);

	double = pair(nbre1);
	annees = bissextile(nbre2);
	conver = convertisseur(nbre3);
	degres = equation(nbre4, nbre5);
	deuxnombres = somdeuxnombres(nbre6, nbre7);
	calad = addition(nbre8, nbre9);
	calsous = soustraction(nbre10, nbre11);
	calmult = multiplication(nbre12, nbre13);
	caldiv = division(nbre14, nbre15);
	caldivr = divisionreste(nbre16, nbre17);
	calexp = exposant(nbre18, nbre19);

	writeResponse();
}

function pair(nbre1) {
	var rep = "";
	if (nbre1%2==0) {
		rep = "pair";
	} else {
		rep = "impair";
	}

	return rep;
}

function bissextile(nbre2) {
	let annee = "";
	if (nbre2 % 400 === 0 || (nbre2 % 4 === 0 && nbre2 % 100 != 0)) {
		annee = "bissextile";
	} else {
		annee = "non bissextile";
	}

	return annee;
}

function convertisseur(nbre3) {
	let ans;
	let mois;
	let jour;
	let heure;
	let minute;
	let temps;

	ans = Math.trunc(nbre3/31536000);
	nbre3 %= 31536000; 
	mois = Math.trunc(nbre3/2678400);
	nbre3 %= 2678400;
	jour = Math.trunc(nbre3/86400);
	nbre3 %= 86400; 
	heure = Math.trunc(nbre3/3600);
	nbre3 %= 3600;
	minute = Math.trunc(nbre3/60);
	nbre3 %=60;

	temps = ( ans + " AN(S) " + mois + " MOIS " + jour + " J " + heure + " H " + minute + " MIN " + nbre3 + " S " );

	return temps;
}

function equation(nbre4, nbre5) {
	let reponse;

	if (nbre4==0 && nbre5!=0) {
    	reponse = "Solution impossible";
	}
	if (nbre4==0 && nbre5==0) {
   	 	reponse = "X peut prendre n'importe quelle valeur";
	}
	if (nbre4!=0 && nbre5!=0) {
    	reponse = (" x = " + (-nbre5/nbre4));
	}

	return reponse;
}

function somdeuxnombres(nbre6, nbre7){
	let temp;
	let temp2;
	let somme = 0;
	let total;

	temp = nbre6;
	temp2 = nbre7;

	if (nbre6>nbre7){
	    while (nbre6>=nbre7){
	        somme=somme+nbre7;
	        nbre6=nbre6-1;
	    }
	}

	if (nbre7>nbre6){
	    while (nbre7>=nbre6){
	        somme=somme+nbre7;
	        nbre7=nbre7-1;
	    }
	}

	if (nbre6==nbre7){
	    total = ("La somme des nombres compris entre " + nbre6 + " et " + nbre7 + " est 0 ")
	}
	else{
	    total = ("La somme des nombres compris entre " + temp + " et " + temp2 + " est " + somme)
	}

	return total;
}

function addition(nbre8, nbre9) {
	let Rad;
	Rad = nbre8 + nbre9;

	return Rad;
}

function soustraction(nbre10, nbre11){
	let Rsous;
	Rsous = nbre10 - nbre11;

	return Rsous;
}

function multiplication(nbre12, nbre13){
	let Rmult;
	Rmult = nbre12*nbre13;

	return Rmult;
}

function division(nbre14, nbre15){
	let Rdiv;
	Rdiv = nbre14/nbre15;

	return Rdiv;
}

function divisionreste(nbre16, nbre17){
	let Rdivr;
	let R;
	let reponse;

	R = nbre16%nbre17;
	Rdivr = Math.trunc(nbre16/nbre17);
	reponse = ( Rdivr + " R= " + Rdivr );


	return reponse;

}

function exposant(nbre18, nbre19){
	let Rexp;
	Rexp = Math.pow(nbre18, nbre19);

	return Rexp;
}

function writeResponse() {
	document.getElementById("Nbpair").value = double;
	document.getElementById("Bissextile").value = annees;
	document.getElementById("Convertisseur").value = conver;
	document.getElementById("Equation").value = degres;
	document.getElementById("Somme2nombres").value = deuxnombres;
	document.getElementById("Adcalculette").value = calad;
	document.getElementById("Souscalculette").value = calsous;
	document.getElementById("Multcalculette").value = calmult;
	document.getElementById("Divcalculette").value = caldiv;
	document.getElementById("Divrcalculette").value = caldivr;
	document.getElementById("Expcalculette").value = calexp;
}
