let list = [];

document.getElementById('submit').addEventListener('click', () => {
	submitNum();
});

document.getElementById('reset').addEventListener('click', () => {
	reset();
});

// récupère la valeur et vérifie sa validité
function submitNum() {
	let num = parseFloat(document.getElementById("num").value); 

	if (!isNaN(num) && Number.isInteger(num)) {
		list.push(num);
		calculate(num);
	} else {
		alert("Le valeur entrée n'est pas un nombre entier");
	}
}

// calcul et affiche les résultats
function calculate(num) {
	// déclaration
	let indexSeq = 0;		// index de la séquence en cours
	let lengthSeq = 0;		// longueur de la sequance en cours
	let indexSeqMax = 0;	// index de la séquence la plus longue
	let lengthSeqMax = 0;	// longueur de la sequance la plus longue
	let sum = 0;

	//calcul
	for (let i = 0 ;i < list.length; i++) {
		sum += list[i];
		let lastValue = (i == 0) ? 0 : list[i-1];
		if (lastValue <= list[i]) {
			// on insère le nombre dans la séquence en cours 
			lengthSeq++;

			if (lengthSeq >= lengthSeqMax) {
				// la séquence en cours devient le séquence max
				indexSeqMax = indexSeq;
				lengthSeqMax = lengthSeq;
			}
		} else {
			// la séquence en cours s'arrête, une nouvelle commence !
			indexSeq = i;
			lengthSeq = 1;
		}
	}

	//affichage 
	document.getElementById("quantity").innerHTML = list.length;
	document.getElementById("sum").innerHTML = sum;
	document.getElementById("max").innerHTML = Math.max(...list);
	document.getElementById("min").innerHTML = Math.min(...list);
	document.getElementById("average").innerHTML = Math.round(100*sum/list.length)/100;
	document.getElementById("list").innerHTML = list.join(', ');
	document.getElementById("sequency").innerHTML = getSequency(list, indexSeqMax, lengthSeqMax).join(', ');
}

// récupération de la séquence la plus longue
function getSequency(arr, index, length) {
	return arr.slice(index, index+length);
}

// réinitialisation

function reset() {
	list = [];

	document.getElementById("num").value = "";
	document.getElementById("quantity").innerHTML =0;
	document.getElementById("sum").innerHTML = 0;
	document.getElementById("max").innerHTML = 0;
	document.getElementById("min").innerHTML = 0;
	document.getElementById("average").innerHTML =0;
	document.getElementById("list").innerHTML = 0;
	document.getElementById("sequency").innerHTML = 0;
} 