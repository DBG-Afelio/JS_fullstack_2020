
let jeuxChoice=[];  //Couleur de l'IA
let jeuxJoueur=[];  //Couleur du Joueur

//Boutton Commencer/Valider/Affichage
const beginBt=document.getElementById('begin');
const sendBt=document.getElementById('send');
const afficheChamps=document.getElementById('colors');
//Couleurs
const colors=["red","blue","green","yellow","purple","white","black"];
const blueBt=document.getElementById("blue");
const redNt=document.getElementById("red");
const greenBt=document.getElementById("green");
const yellowBt=document.getElementById("yellow");
const purpleBt=document.getElementById("purple");
const whiteBt=document.getElementById("white");
const blackBt=document.getElementById("black");


const color =document.querySelectorAll('.color');

//...............................................................................................
//creation de la partie
function random(){
	for (i = 0; i <1; i++) {
		let a =colors[Math.floor(Math.random() * 6)];
		let b=colors[Math.floor(Math.random() * 6)];
		let c=colors[Math.floor(Math.random() * 6)];
		let d=colors[Math.floor(Math.random() * 6)];
		jeuxChoice=[a,b,c,d];
	}

	return jeuxChoice;
}


//...............................................................................................
//Le Joueur choisi ses couleurs
function choiceColor(){
	
	return jeuxJoueur
}
for(const button of color){
	button.addEventListener("click",function(){
		jeuxJoueur.push(button.value);
		afficheChamps.innerHTML=jeuxJoueur.toString();


		return jeuxJoueur;
	});
}

//...............................................................................................
//Comparaison solution/proposition
function gameCompare(){

}


beginBt.addEventListener("click", random);
sendBt.addEventListener("click", choiceColor);

//color.addEventListener("click",choiceColor)
for (let i = Things.length - 1; i >= 0; i--) {
	Things[i]
}