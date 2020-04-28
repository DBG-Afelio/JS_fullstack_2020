// NOTE METHODO : 
// CERTAINS EXO PLUS DIFFICILES ONT ETE REPRIS DE CHEZ OSHI; LES COMMENTER 
// COMPARER LES AUTRES AVEC OSHI
// DEBRIEF APPRENTISSAGES


// VARIABLE GENERALE
// cette variable permet de récupérer le tableau (je pense automatiquement généré par le DOM) nommé forms et évite la syntaxe plus lourde où on doit à chaque fois rappeler document.forms[x]
const exo=document.forms;


// CHAMP QUI SE VIDE LORSQU'ON RENTRE DEDANS

document.forms[0].ch1.addEventListener('focus', () => {        
    document.forms[0].ch1.value="";
})

// CHAMP QUI SE VIDE QUAND RENTRE DEDANS ET REMET VAL PAR DEFAUT QUAND ON LE QUITTE

let form1Value = document.forms[1].ch1.value;
document.forms[1].ch1.addEventListener('focus', () => {
    document.forms[1].ch1.value="";
})
document.forms[1].ch1.addEventListener('blur', () => {
	document.forms[1].ch1.value = form1Value;
})

//CHAMP DONT LA TAILLE AUGMENTE 

document.forms[2].ch1.addEventListener('focus', () => {
	document.forms[2].ch1.addEventListener('keydown', () => {
		document.forms[2].ch1.size = 20000;
	})
})

// CHAMP QUI AFFICHE LES CARACTERES QUAND CASE COCHEE

document.forms[3].cb1.addEventListener('click', () => {
	const x = document.forms[3].ch1; 
	if (x.type === "password"){x.type = "text";}
	else{x.type = "password";}
})

// CHAMP QUI AFFICHE CARACT QUAND SOURIS MAINTENUE ET LES MASQUE SINON

document.forms[4].ch1.addEventListener('mousedown', () => {
	document.forms[4].ch1.type = "text";
})

document.forms[4].ch1.addEventListener('mouseup', () => {
	document.forms[4].ch1.type="password";
});

// CHAMP QUI JETTE LE FOCUS QUAND ON ESSAYE DE LUI DONNER

document.forms[5].ch1.addEventListener('focus', () => {
	document.forms[5].ch1.blur();
})

// CHAMP QUI JETTE FOCUS ET VIDE LA CASE SI CHECKBOX COCHÉE
// OSHI
exo[6].cb1.addEventListener('click', () => { //la subtilité de l'exo tient en ce qu'il faut se projeter dans l'état qui précède le click car c'est lui qui va déterminer le contenu de la condition. 
  if(exo[6].cb1.checked) {
    exo[6].ch1.focus();
    exo[6].ch1.value = "0";
  } else {
    exo[6].ch1.value = ""; // pourquoi utiliser "" et pas null ? car une case attend toujours une chaine de caractères, et donc mettre la valeur null est un peu illogique, même si ça marche, c'est parce que js est gentil : l'utilisation de null enlève la propriété 
  }
})

exo[6].ch1.addEventListener('focus', () => {
  if(!exo[6].cb1.checked) {
    exo[6].ch1.blur();
  }
})


// COMPTEUR INCREMENTE/DECREMENTE 
// VOIR DIFFERENCE AVEC OSHI 

document.forms[7].ch1.value = 0;

const btnAdd = document.forms[7].b1;
btnAdd.addEventListener('click', () => {
	if(document.getElementById('rb1_1').checked){
		document.forms[7].ch1.value ++; //attention que le ++ va implicitement transformer ce qui est ici une chaine de caractère en un nombre; si on utilise l'incrémenteur =+ qui considère comme chaine alors on a comme résultat d'incrémentation 0111111 ...
	} else {
		document.forms[7].ch1.value --;
	}
})
document.forms[7].ch1.addEventListener('focus', () => {
	document.forms[7].ch1.blur();})


// BOUTON SAVE & RESET
// VOIR DIFFERENCE AVEC OSHI

document.forms[8].b1.addEventListener('click', () => {
	document.forms[8].ch1.defaultValue = document.forms[8].ch1.value;
})

// PLACE LA VALEUR ET LE TEXTE DE L'OPTION SELECTIONNEE A L'INTERIEUR DES CHAMPS CORRESPONDANTS
// VOIR DIFFERENCE AVEC OSHI

document.forms[9].s1.addEventListener('change', () => {
	const x = document.forms[9].s1;
	const value = x.options[x.selectedIndex].value; //utilisation de selectedIndex
	const text = x.options[x.selectedIndex].text;
	document.forms[9].ch1.value = value;
	document.forms[9].ch2.value = text;
})


// PLACE "LES" VALEURS ET LES TEXTES DES OPTIONS SELECTIONNEES A L'INTERIEUR DES CHAMPS CORRESPONDANTS
// CODE REPRIS OSHI

exo[10].s1.addEventListener('change', () => { //ce premier bloc sert à récupérer les valeurs dès que la sélection des options change, on fait un tour de boucle et on ajoute les nouvelles valeurs dans un tableau
  const selected_options = [[],[]];
  Array.from(exo[10].s1.options).forEach(option => { // à quoi correspond s1 ? à l'élément général auquel sont associés une série d'options
    if(option.selected) {
      selected_options[0].push(option.value);
      selected_options[1].push(option.text);
    }
  });
  exo[10].ch1.value = selected_options[0].join(', '); // toujours mieux de faire le comportement explicite
  exo[10].ch2.value = selected_options[1].join(', ');
})

// PERMUTATION
// NOTES SUR LE CODE CI-DESSOUS QUI VIENT D'OSHI : pourquoi utiliser deux types de boucles différentes? 
// revoir, notamment correction Denis mise en fonction pour épuration du code

exo[11].gauche.addEventListener('click', () => { //lorsqu'on clique sur le bouton de gauche
  const tab = exo[11].c1; //récupération du tableau des différentes valeurs à permuter, dans leur ordre donc ; intéressant de noter que lorsque l'on cible par name, on récupère ces éléments ... (?)
  const new_tab = []; //création du tableau qui va être incrémenté 
  let c=0; // création d'une variable de comptage 
  for(i=1; i < tab.length;i++) { // pour chaque valeur dans le tableau d'origine en commençant à l'index 1 (et non 0), on ajoute à la fin du nouveau tableau les valeurs comprises dans tab
    new_tab.push(tab[i].value);
  }
  new_tab.push(tab[0].value);
  tab.forEach(element => {
    element.value = new_tab[c];
    c++;
  })
})

exo[11].droite.addEventListener('click', () => {
  const tab = exo[11].c1;
  const new_tab = [];
  let c = 0;
  new_tab.push(tab[tab.length-1].value);
  for (i = 0; i < tab.length-1; i++) {
    new_tab.push(tab[i].value);
  }
  tab.forEach(element => {
    element.value = new_tab[c];
    c++;
  })
})


// FAIRE BASCULER LES ITEMS SELECTIONNES ENTRE LES DEUX LISTES
// COMMENTER/COMPRENDRE/REPERTORIER/APPROPRIER

// TRANSFORMER EN BLOC PROGRA FONCTIONNELLE

exo[12].droite.addEventListener('click', () => { 
  Array.from(exo[12].s1.options).forEach(optionZest => { //POUR COMPLETER INDEX/PRATIQUE(qui fait lien avec théorique), JE PEUX NOTER CET EXEMPLE CI DANS LE VERSANT PRATIQUE POUR LE CONCEPT FOREACH, ou encore ARRAYFROM
    if (optionZest.selected) { // on peut se passer du if avec selectedOptions, voir le code de Denis
      exo[12].s2.appendChild(optionZest);
    }
  });
})

exo[12].gauche.addEventListener('click', () => {
  Array.from(exo[12].s2.options).forEach(option => {
    if (option.selected) {
      exo[12].s1.appendChild(option);
    }
  });
})

// CHAMP DE 5 CARACTERES QUI NE SONT ACCESSIBLES QUE SI LES CHAMPS PRECEDENTS SONT REMPLIS 
//REPRIS D'OSHI

exo[13].c02.disabled = true;
exo[13].c03.disabled = true;
exo[13].addEventListener('keyup', () => {
  if(exo[13].c01.value.length === 5) {
    exo[13].c02.disabled = false;
    exo[13].c02.focus();
    if(exo[13].c02.value.length === 5) {
      exo[13].c03.disabled = false;
      exo[13].c03.focus();
    } else {
      exo[13].c03.disabled = true;
      exo[13].c03.value = null;
    }
  } else {
    exo[13].c02.disabled = true;
    exo[13].c02.value = null;
    exo[13].c03.disabled = true;
    exo[13].c03.value = null;
  }
})

// ELEMENT QUI DISPARAIT LORSQUE L'ON COCHE LA CASE ET REAPPARAIT LORSQUE L'ON DECOCHE
// NOTER POUR THEORIE : bien faire la distinction entre propriété et attribut


exo[14].cb1.addEventListener('click', () => {
	if(exo[14].cb1.checked){
		exo[14].ch1.style.display = "none";
	}
	else{
		exo[14].ch1.style.display = "block";
	}
})

// CHAMP QUI AUGMENTE EN HAUTEUR ET EN LARGEUR DE 100PX A CHAQUE FOIS QUE L'ON ENTRE LE FOCUS DEDANS ET RETOURNE A SON ETAT INITIAL EN SORTANT

const actual_style = exo[15].ch1.style;
actual_style.width="170px";
actual_style.height="16px";
exo[15].ch1.addEventListener('focus', () => {
  actual_style.width = Number(parseInt(actual_style.width)+100)+"px";
  actual_style.height = Number(parseInt(actual_style.height)+100)+"px";
})
exo[15].ch1.addEventListener('blur', () => {
  actual_style.width = "170px";
  actual_style.height = "16px";
})

// EXO BONUS // OSHI

const CarresExo1 = Array.from(document.getElementsByClassName("1_exo_carre carre"));
CarresExo1.forEach((carre) => {
  carre.addEventListener("click", () => {
    CarresExo1.map((allCarre) => allCarre.classList.remove("checked"));
    carre.classList.add("checked");
  });
});

const CarresExo2 = Array.from(document.getElementsByClassName("2_exo_carre carre"));
const ClasseExo2 = document.getElementById("out").classList;
let lastClasse = "blanc";
CarresExo2.forEach((carre) => {
  carre.addEventListener("click", () => {
    CarresExo2.map((allCarre) => allCarre.classList.remove("checked"));
    carre.classList.add("checked");
    ClasseExo2.replace(lastClasse, carre.getAttribute("data-color"));
    lastClasse = carre.getAttribute("data-color");
  });
});

const ExoBonusDivGauche = document.getElementById("exo-img-div-g");
const ExoBonusImgsGauche = ExoBonusDivGauche.getElementsByTagName("img");
const ExoBonusImgDroite = document.getElementById("idroite");
const ExoBonusDivDroite = document.getElementsByClassName("droite");
let Last_Img_Clicked;
let dragged;

Array.from(ExoBonusImgsGauche).forEach((img) => {
  img.draggable = true;
  img.addEventListener('click', () => {
    Last_Img_Clicked = img;
  })
})
ExoBonusImgDroite.addEventListener('click', () => {
  ExoBonusImgDroite.src = Last_Img_Clicked.src;
  ExoBonusImgDroite.height = Last_Img_Clicked.height;
  ExoBonusImgDroite.width = Last_Img_Clicked.width;
})

document.addEventListener("drag", function(event) {
}, false);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
}, false);

document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  if(event.target.className === "droite" || event.target === ExoBonusImgDroite) {
    ExoBonusImgDroite.style.opacity = "0.5";
  }
}, false);

document.addEventListener("dragleave", function(event) {
  if(event.target.className === "droite" || event.target === ExoBonusImgDroite) {
    ExoBonusImgDroite.style.opacity = "1";
  }
}, false);

document.addEventListener("drop", function(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.preventDefault();
  if (event.target.className === "droite" || event.target === ExoBonusImgDroite) {
    ExoBonusImgDroite.src = dragged.src;
    ExoBonusImgDroite.height = dragged.height;
    ExoBonusImgDroite.width = dragged.width;
    ExoBonusImgDroite.style.opacity = "1";
  }

}, false);