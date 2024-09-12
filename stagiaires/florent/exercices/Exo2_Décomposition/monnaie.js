let billet500;
let billet200;
let billet100;
let billet50;
let billet20;
let billet10;
let billet5;
let piece2;
let piece1;
let piece50;
let piece20;
let piece10;
let piece5;
let piece02;
let piece01;

document.getElementById('sub').addEventListener('click',execute);

function execute(){
	const nbreAsString = document.getElementById('monnaie').value;

	if (nbreAsString !== "" && Number.isInteger(Number(nbreAsString))) {
		const nbre=Number(document.getElementById('monnaie').value);

		billet500 = billets500 (nbre);
		billet200 = billets200 (nbre);
		billet100 = billets100 (nbre);
		billet50 = billets50 (nbre);
		billet20 = billets20 (nbre);
		billet10 = billets10 (nbre);
		billet5 = billets5 (nbre);
		piece2 = pieces2 (nbre);
		piece1 = pieces1 (nbre);
		piece50 = pieces50 (nbre);
		piece20 = pieces20 (nbre);
		piece10 = pieces10 (nbre);
		piece5 = pieces5 (nbre);
		piece02 = pieces02 (nbre);
		piece01 = pieces01 (nbre);

		writereponse();
	}
}

function billets500 (nbre){
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;

	return nbre500;
}

function billets200 (nbre){
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;

	return nbre200;
}

function billets100 (nbre){
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;

	return nbre100;
}

function billets50 (nbre){
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;

	return nbre50;
}

function billets20 (nbre){
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;

	return nbre20;
}

function billets10 (nbre){
	let nbre10;
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;
	nbre10 = Math.floor(modulo/10);
	modulo = modulo - nbre10 * 10;

	return nbre10;
}

function billets5 (nbre){
	let nbre5;
	let nbre10;
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;
	nbre10 = Math.floor(modulo/10);
	modulo = modulo - nbre10 * 10;
	nbre5 = Math.floor(modulo/5);
	modulo = modulo - nbre5 * 5;

	return nbre5;
}

function pieces2 (nbre){
	let nbre2;
	let nbre5;
	let nbre10;
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;
	nbre10 = Math.floor(modulo/10);
	modulo = modulo - nbre10 * 10;
	nbre5 = Math.floor(modulo/5);
	modulo = modulo - nbre5 * 5;
	nbre2 = Math.floor(modulo/2);
	modulo = modulo - nbre2 * 2;

	return nbre2;
}

function pieces1 (nbre){
	let nbre1;
	let nbre2;
	let nbre5;
	let nbre10;
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;
	nbre10 = Math.floor(modulo/10);
	modulo = modulo - nbre10 * 10;
	nbre5 = Math.floor(modulo/5);
	modulo = modulo - nbre5 * 5;
	nbre2 = Math.floor(modulo/2);
	modulo = modulo - nbre2 * 2;
	nbre1 = Math.floor(modulo/1);
	modulo = modulo - nbre1 * 1;

	return nbre1;
}

function pieces50 (nbre){
	let nbre05;
	let cents;
	let nbre1;
	let nbre2;
	let nbre5;
	let nbre10;
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;
	nbre10 = Math.floor(modulo/10);
	modulo = modulo - nbre10 * 10;
	nbre5 = Math.floor(modulo/5);
	modulo = modulo - nbre5 * 5;
	nbre2 = Math.floor(modulo/2);
	modulo = modulo - nbre2 * 2;
	nbre1 = Math.floor(modulo/1);
	modulo = modulo - nbre1 * 1;
	cents = Math.round(modulo * 100);
	nbre05 = Math.floor(cents/50);
	cents = cents - nbre05 * 50;

	return nbre2;
}

function pieces20 (nbre){
	let nbre02;
	let nbre05;
	let cents;
	let nbre1;
	let nbre2;
	let nbre5;
	let nbre10;
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;
	nbre10 = Math.floor(modulo/10);
	modulo = modulo - nbre10 * 10;
	nbre5 = Math.floor(modulo/5);
	modulo = modulo - nbre5 * 5;
	nbre2 = Math.floor(modulo/2);
	modulo = modulo - nbre2 * 2;
	nbre1 = Math.floor(modulo/1);
	modulo = modulo - nbre1 * 1;
	cents = Math.round(modulo * 100);
	nbre05 = Math.floor(cents/50);
	cents = cents - nbre05 * 50;
	nbre02 = Math.floor(cents/20);
	cents = cents - nbre02 * 20;

	return nbre02;
}

function pieces10 (nbre){
	let nbre01;
	let nbre02;
	let nbre05;
	let cents;
	let nbre1;
	let nbre2;
	let nbre5;
	let nbre10;
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;
	nbre10 = Math.floor(modulo/10);
	modulo = modulo - nbre10 * 10;
	nbre5 = Math.floor(modulo/5);
	modulo = modulo - nbre5 * 5;
	nbre2 = Math.floor(modulo/2);
	modulo = modulo - nbre2 * 2;
	nbre1 = Math.floor(modulo/1);
	modulo = modulo - nbre1 * 1;
	cents = Math.round(modulo * 100);
	nbre05 = Math.floor(cents/50);
	cents = cents - nbre05 * 50;
	nbre02 = Math.floor(cents/20);
	cents = cents - nbre02 * 20;
	nbre01 = Math.floor(cents/10);
	cents = cents - nbre01 * 10;

	return nbre01;
}

function pieces5 (nbre){
	let nbre005;
	let nbre01;
	let nbre02;
	let nbre05;
	let cents;
	let nbre1;
	let nbre2;
	let nbre5;
	let nbre10;
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;
	nbre10 = Math.floor(modulo/10);
	modulo = modulo - nbre10 * 10;
	nbre5 = Math.floor(modulo/5);
	modulo = modulo - nbre5 * 5;
	nbre2 = Math.floor(modulo/2);
	modulo = modulo - nbre2 * 2;
	nbre1 = Math.floor(modulo/1);
	modulo = modulo - nbre1 * 1;
	cents = Math.round(modulo * 100);
	nbre05 = Math.floor(cents/50);
	cents = cents - nbre05 * 50;
	nbre02 = Math.floor(cents/20);
	cents = cents - nbre02 * 20;
	nbre01 = Math.floor(cents/10);
	cents = cents - nbre01 * 10;
	nbre005 = Math.floor(cents/5);
	cents = cents - nbre005 * 5;

	return nbre005;
}

function pieces02 (nbre){
	let nbre002;
	let nbre005;
	let nbre01;
	let nbre02;
	let nbre05;
	let cents;
	let nbre1;
	let nbre2;
	let nbre5;
	let nbre10;
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;
	nbre10 = Math.floor(modulo/10);
	modulo = modulo - nbre10 * 10;
	nbre5 = Math.floor(modulo/5);
	modulo = modulo - nbre5 * 5;
	nbre2 = Math.floor(modulo/2);
	modulo = modulo - nbre2 * 2;
	nbre1 = Math.floor(modulo/1);
	modulo = modulo - nbre1 * 1;
	cents = Math.round(modulo * 100);
	nbre05 = Math.floor(cents/50);
	cents = cents - nbre05 * 50;
	nbre02 = Math.floor(cents/20);
	cents = cents - nbre02 * 20;
	nbre01 = Math.floor(cents/10);
	cents = cents - nbre01 * 10;
	nbre005 = Math.floor(cents/5);
	cents = cents - nbre005 * 5;
	nbre002 = Math.floor(cents/2);
	cents = cents - nbre002 * 2;

	return nbre002;
}

function pieces01 (nbre){
	let nbre001;
	let nbre002;
	let nbre005;
	let nbre01;
	let nbre02;
	let nbre05;
	let cents;
	let nbre1;
	let nbre2;
	let nbre5;
	let nbre10;
	let nbre20;
	let nbre50;
	let nbre100;
	let nbre200;
	let nbre500;
	let modulo;

	nbre500 = Math.floor(nbre/500);
	modulo = nbre%500;
	nbre200 = Math.floor(modulo/200);
	modulo = modulo - nbre200 * 200;
	nbre100 = Math.floor(modulo/100);
	modulo = modulo - nbre100 * 100;
	nbre50 = Math.floor(modulo/50);
	modulo = modulo - nbre50 * 50;
	nbre20 = Math.floor(modulo/20);
	modulo = modulo - nbre20 * 20;
	nbre10 = Math.floor(modulo/10);
	modulo = modulo - nbre10 * 10;
	nbre5 = Math.floor(modulo/5);
	modulo = modulo - nbre5 * 5;
	nbre2 = Math.floor(modulo/2);
	modulo = modulo - nbre2 * 2;
	nbre1 = Math.floor(modulo/1);
	modulo = modulo - nbre1 * 1;
	cents = Math.round(modulo * 100);
	nbre05 = Math.floor(cents/50);
	cents = cents - nbre05 * 50;
	nbre02 = Math.floor(cents/20);
	cents = cents - nbre02 * 20;
	nbre01 = Math.floor(cents/10);
	cents = cents - nbre01 * 10;
	nbre005 = Math.floor(cents/5);
	cents = cents - nbre005 * 5;
	nbre002 = Math.floor(cents/2);
	cents = cents - nbre002 * 2;
	nbre001 = Math.floor(cents/1);
	cents = cents - nbre001 * 1;

	return nbre001;
}

function writereponse (){
	document.getElementById("cinquecent").value = billet500;
	document.getElementById("deuxcent").value = billet200;
	document.getElementById("cent").value = billet100;
	document.getElementById("cinquante").value = billet50;
	document.getElementById("vingt").value = billet20;
	document.getElementById("dix").value = billet10;
	document.getElementById("cinq").value = billet5;
	document.getElementById("deux").value = piece2;
	document.getElementById("un").value = piece1;
	document.getElementById("cinquantecents").value = piece50;
	document.getElementById("vingtcents").value = piece20;
	document.getElementById("dixcents").value = piece10;
	document.getElementById("cinqcents").value = piece5;
	document.getElementById("deuxcents").value = piece02;
	document.getElementById("uncent").value = piece01;
}