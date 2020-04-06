let secret;
let level;
let step = 0;
let nbColor;
const stepMax = 10;
const secretLength = 4;
const oSecretPlace = document.getElementById('secretPlace');
const oSecret = document.getElementById('secret');
const oSequency = document.getElementById('sequency');
const oKey = document.getElementById('keyboard');
const oColors = oKey.getElementsByTagName('button');
const oLevels = document.getElementById('levels').getElementsByClassName('level');

// placement des écouteurs des 3 boutons Levels
for (let i = 0 ; i < oLevels.length; i++) {
	oLevels[i].addEventListener('click', function() {
		level = Number(oLevels[i].value);
		activeLevel();
		restartAll();
	});
}

// placement des écouteurs des boutons submit et clear
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('submit').addEventListener('click', submit);

// placement des écouteurs des boutons Color
for (let i = 0 ; i < oColors.length; i++) {
	oButton = oColors[i];
	oButton.addEventListener('click', function() {
		insert(Number(this.getAttribute('data-number')));
	});
}

function startGame() {
	generateKeyboard();
	nbColor = (level === 1) ? 7 : 8;
	secret = generateSecret();
	step = 0;
	oSequency.style.display = 'flex';
	oKey.style.display = 'flex';
	disableButton(true, 'submit');
}

function activeLevel() {
	for (let i = 0 ; i < oLevels.length; i++) {
		oLevels[i].classList.remove('activeLevel');
	}
	oLevels[level-1].classList.add('activeLevel');
}

//mise à jour de clavier en fonction du niveau
// placement des écouteurs sur chaque bouton du clavier
function generateKeyboard() {
	let oEmpty = document.getElementById('button8');
	oEmpty.disabled = (level === 1) ? true : false;
	oEmpty.style.display = (level === 1) ? 'none' : 'flex';
}

// création du code secret
function generateSecret() {
	let arr = []; 
	oSecretPlace.style.display = "none";
	while (arr.length < secretLength) {
		let num = Math.floor(Math.random()*nbColor)+1;
		if (level === 3 || arr.indexOf(num) === -1) {
			arr.push(num);
		}
	}
console.log("level : "+ level +" - secret : "+arr.join(''));
	return arr;
}

let test = [];

// on insère la couleur dans la sequence
function insert(color) {
	let seqLength = getSequencyLength();
	if (seqLength < secretLength) {
		let oDiv = document.createElement('div');
		oDiv.setAttribute('class', 'color'+color);
		let oSeq = document.getElementById('newSeq');
		oSeq.appendChild(oDiv);
		test.push(color);

		if (level !== 3) {
			document.getElementById('button'+color).disabled = true;
		}

		if (seqLength === secretLength-1) {
			disableAllButtons(true);
			disableButton(false, 'submit');
		}
	} 
}

// retourne le nombre de couleurs dans la sequence
function getSequencyLength() {
	return document.getElementById('newSeq').getElementsByTagName('div').length;
}

// efface la sequence
function clear() {
	document.getElementById('newSeq').innerHTML = '';
	disableAllButtons(false);
	disableButton(true, 'submit');
	test = [];
}

// active/Desactive un bouton
function disableButton(action, button) {
	let oButton = document.getElementById(button);
	if (action) {
		oButton.disabled = true;
		oButton.classList.add("disabled");
	} else {
		oButton.disabled = false;
		oButton.classList.remove("disabled");
	}
}

// active ou desactive tous les boutons
function disableAllButtons(action) {
	for (let i = 0 ; i < oColors.length; i++) {
		disableButton(action, oColors[i].id);
	}
}

function submit() {
	step++;
	let oTr = document.getElementById('step'+step);
	oTr.getElementsByClassName('seq')[0].innerHTML = document.getElementById('newSeq').innerHTML;

	checkBlack();
	clear();
}

// Vérifie les cases noires (éléments à la bonne position)
function checkBlack() {
	let notBlack = []; // stock des non noirs
	
	for (let i =  0 ; i < secret.length ; i++) {
		if (secret[i] === test[i]) {
			addResult('Black');
		} else {
			notBlack.push(secret[i]);
		}
	}

	if (notBlack.length === 0) {
		end(true);
	} else {
		checkWhite(notBlack);
	}
}

// vérifier les cases blanches (éléments à la mauvaise position)
function checkWhite(notBlack) {
	for (let i=0 ; i < test.length; i++) {
		let position = notBlack.indexOf(test[i]);
		if (position !== -1) {
			addResult('White');
			notBlack.splice(position, 1);
		}
	}

	if (step === stepMax && notBlack !== []) {
		end(false);
	}
}

function end(end) { 
	showSecret(secret);

	let msg = (end) ? 'Bravo ! Vous avez trouvé le code secret' : 'Vous avez perdu ! Vous n\'avez plus d\'essai';
	alert (msg);
	if (window.confirm('Voulez-vous rejouer ?')) {
		restartAll();
	} else {
		oKey.style.display = 'none';
		oSecretPlace.style.display = 'none';
		oSequency.style.display = 'none';
		disableAllButtons(true);
		alert ('Aurevoir !');
	}
}

function addResult(result) {
	let oDiv = document.createElement('div');
	oDiv.setAttribute('class', 'color'+result);
	let oResult = document.getElementById('step'+step).getElementsByClassName('result')[0];
	oResult.appendChild(oDiv);
}


function restartAll() {
	for (let i = 1; i<= stepMax; i++) {
		let oTr = document.getElementById('step'+i);	
		oTr.getElementsByClassName('seq')[0].innerHTML ='';
		oTr.getElementsByClassName('result')[0].innerHTML ='';
	}

	oSecret.innerHTML = '';
	document.getElementById('newSeq').innerHTML = '';
	disableAllButtons(false);
	startGame(); 
}

function showSecret(secret) {
	oSecretPlace.style.display= 'block';
	oSecret.innerHTML = '';

	for (i = 0; i < secret.length; i++) {
		let oDiv = document.createElement('div');
		oDiv.setAttribute('class', 'color'+secret[i]);
		oSecret.appendChild(oDiv);
	}
}