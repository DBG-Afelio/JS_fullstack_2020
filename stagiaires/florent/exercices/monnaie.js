document.getElementById('sub').addEventListener('click',execute);

function execute(){
	const nbre = document.getElementById('monnaie').value;

	if (nbre !== "" && nbre >= 0 && Number.isInteger(Number(nbre))) {
		
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

		document.getElementById("cinquecent").value = nbre500;
		document.getElementById("deuxcent").value = nbre200;
		document.getElementById("cent").value = nbre100;
		document.getElementById("cinquante").value = nbre50;
		document.getElementById("vingt").value = nbre20;
		document.getElementById("dix").value = nbre10;
		document.getElementById("cinq").value = nbre5;
		document.getElementById("deux").value = nbre2;
		document.getElementById("un").value = nbre1;
		document.getElementById("cinquantecents").value = nbre05;
		document.getElementById("vingtcents").value = nbre02;
		document.getElementById("dixcents").value = nbre01;
		document.getElementById("cinqcents").value = nbre005;
		document.getElementById("deuxcents").value = nbre002;
		document.getElementById("uncent").value = nbre001;
	}
	
}