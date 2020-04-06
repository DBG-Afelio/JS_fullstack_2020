// Exercice 1
document.forms[0].ch1.addEventListener('focus', () => {
    document.forms[0].ch1.value = "";
});

// Exercice 2
document.forms[1].ch1.addEventListener('focus', () => {
    document.forms[1].ch1.value = "";
});

document.forms[1].ch1.addEventListener('blur', () => {
    if (document.forms[1].ch1.value === "") {
    	document.forms[1].ch1.value = "Texte initial";
    }
});

// Exercice 3
document.forms[2].ch1.addEventListener('focus', () => {
    document.forms[2].ch1.value = "";
});

document.forms[2].ch1.addEventListener('keydown', () => {
	document.forms[2].ch1.value = "";
	document.forms[2].ch1.size += 10;
});

// Exercice 4
document.forms[3].ch1.addEventListener('click', () => {
    if (document.forms[3].cb1.checked) {
    	document.forms[3].ch1.type = 'input';
    } else {
    	document.forms[3].ch1.type = 'password';
    }
});

// Exercice 5
document.forms[4].getElementsByClassName('enfonce')[0].addEventListener('mousedown', () => {
    document.forms[4].ch1.type = 'input';
});

document.forms[4].getElementsByClassName('enfonce')[0].addEventListener('mouseup', () => {
    document.forms[4].ch1.type = 'password';
});

// Exercice 6
document.forms[5].ch1.addEventListener('focus', () => {
    document.forms[5].ch1.blur();
});

// Exercice 7
document.forms[6].ch1.addEventListener('focus', () => {
    if (!document.forms[6].cb1.checked) {
    	document.forms[6].ch1.blur();
    }
});

document.forms[6].cb1.addEventListener('click', () => {
    if (document.forms[6].cb1.checked) {
    	document.forms[6].ch1.value = '0';
    	document.forms[6].ch1.focus();
    } else {
    	document.forms[6].ch1.value = '';
    }
});

//Exercice 8 
document.forms[7].b1.addEventListener('click', () => {
	if (document.forms[7].rb1.value === '+1') {
		document.forms[7].ch1.value++;
    } else if (document.forms[7].rb1.value === '-1') {
		document.forms[7].ch1.value--;
    } else {
    	alert ('Veuillez cocher une case !')
    }
});

// Exercice 9
document.forms[8].b1.addEventListener('click', () => {
	document.forms[8].ch1.defaultValue = document.forms[8].ch1.value;
});
document.forms[8].b2.addEventListener('click', () => {
	document.forms[8].ch1.value = document.forms[8].ch1.defaultValue;
});

// Exercice 10
document.forms[9].s1.addEventListener('click', () => {
	document.forms[9].ch1.value = document.forms[9].s1.selectedOptions[0].value;
	document.forms[9].ch2.value = document.forms[9].s1.selectedOptions[0].innerHTML;
});

// Exercice 11
document.forms[10].s1.addEventListener('click', () => {
	let oSelect = document.forms[10].s1.selectedOptions;
	let texts = [];
	let values = [];
	for (let i = 0; i < oSelect.length; i++) {
		texts.push(oSelect[i].innerHTML);
		values.push(oSelect[i].value);
	}
	document.forms[10].ch1.value = values.join(', ');
	document.forms[10].ch2.value = texts.join(', ');
});


// Exercice 12
document.forms[11].gauche.addEventListener('click', () => {
	let oInput = document.forms[11].getElementsByTagName('input');
	let firstItem = oInput[0].value;
	for (let i = 0; i < oInput.length-1; i++) {
		oInput[i].value = oInput[i+1].value;
	}
	oInput[oInput.length-1].value = firstItem;
});

document.forms[11].droite.addEventListener('click', () => {
	let oInput = document.forms[11].getElementsByTagName('input');
	let lastItem = oInput[oInput.length-1].value;
	for (let i = oInput.length-1; i > 0; i--) {
		oInput[i].value = oInput[i-1].value;
	}
	oInput[0].value = lastItem;
});

// Exercice 13
document.forms[12].gauche.addEventListener('click', () => {
	let oS1 = document.forms[12].s1;
	let oS2 = document.forms[12].s2;
	let oSelect2 = oS2.selectedOptions;
	for (let i = oSelect2.length-1; i >= 0 ; i--) {
		insert(oS1, oSelect2[i]);
	}
});

document.forms[12].droite.addEventListener('click', () => {
	let oS1 = document.forms[12].s1;
	let oS2 = document.forms[12].s2;
	let oSelect1 = oS1.selectedOptions;

	for (let i = oSelect1.length-1 ; i >= 0 ; i--) {
		insert(oS2, oSelect1[i]);
	}
});

function insert(oSelect, oOption) {
	if (oSelect.length === 0) {
		oSelect.appendChild(oOption);
	} else {
		let placed = false;
		for (let i = 0; i < oSelect.length ; i++) {
			if (oSelect.options[i].value >= oOption.value) {
				oSelect.insertBefore(oOption, oSelect.options[i]);
				i = oSelect.length;
				placed = true;
			}
		}
		if (!placed) {
			oSelect.appendChild(oOption);
		}
	}
}

// Exercice 14
document.forms[13].c02.addEventListener('focus', () => {
	if (document.forms[13].c01.value.length < 5) {
		document.forms[13].c02.blur();
	} 
});

document.forms[13].c03.addEventListener('focus', () => {
	if (document.forms[13].c02.value.length < 5) {
		document.forms[13].c03.blur();
	}
});

// Exercice 15
document.forms[14].cb1.addEventListener('click', () => {
	document.forms[14].ch1.style.display = (document.forms[14].cb1.checked) ? 'none' :'block';
});

// Exercice 16
document.forms[15].ch1.addEventListener('focus', () => {
	let hauteur = parseInt(document.forms[15].ch1.offsetHeight);
	let longueur = parseInt(document.forms[15].ch1.offsetWidth);
	hauteur += 100;
	longueur += 100;
	document.forms[15].ch1.style.height = hauteur + "px";
	document.forms[15].ch1.style.width = longueur + "px";
});

// Exercice 17
let oEx17 =  document.getElementById('ex17')
let oCarre17 = oEx17.getElementsByClassName('carre'); 

for (let i = 0; i < oCarre17.length; i++) {
	oCarre17[i].addEventListener('click', () => {
		let oRef = oEx17.getElementsByClassName('checked');
		oRef[0].classList.remove('checked');
		oCarre17[i].classList.add('checked');
	});
}

// Exercice 18
let oEx18 =  document.getElementById('ex18')
let oCarre18 = oEx18.getElementsByClassName('carre'); 

for (let i = 0; i < oCarre18.length; i++) {
	oCarre18[i].addEventListener('click', () => {
		let oRef = oEx18.getElementsByClassName('checked');
		oRef[0].classList.remove('checked');
		oCarre18[i].classList.add('checked');
		let color = oCarre18[i].getAttribute('data-color')
		document.getElementById('out').setAttribute('class', 'carre '+color);
	});
}

// Exercice 19
let oEx19 =  document.getElementById('ex19')
let oGauche = oEx19.getElementsByClassName('gauche')
let oImg = oGauche[0].getElementsByTagName('img'); 
let oDroite = document.getElementById('idroite');
oDroite.setAttribute('draggable',true);
let drapImg ;
for (let i = 0; i < oImg.length; i++) {
	oImg[i].setAttribute('draggable',true);
	oImg[i].addEventListener('click', () => {
		let oRef = oGauche[0].getElementsByClassName('checked');	
		if (oRef[0] !== undefined) {
			oRef[0].classList.remove('checked');
		}	
		oImg[i].classList.add('checked');
		let src = oImg[i].getAttribute('src');
		let width = oImg[i].offsetWidth;
		document.getElementById('idroite').setAttribute('src', src);
		document.getElementById('idroite').style.width = width;
	});

	oImg[i].addEventListener('drag', function(e) {
		e.dataTransfer.setData("text", e.target.src);
	});
}
oDroite.addEventListener('dragover', function(e) {	
	e.preventDefault();// Annule l'interdiction de drop   	
});

oDroite.addEventListener('drop', function(e) {	
	e.preventDefault();  	
	var data = e.dataTransfer.getData("text");
	e.target.src = data;
});