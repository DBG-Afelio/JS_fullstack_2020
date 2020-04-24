// NOTES GEN SUR LE DEV

// note sur le droit à l'erreur : il fonctionne lorsque l'utilisateur n'a choisi que les 3 premières couleurs, pas la 4e car autrement on lui donne une infinité de chances (plus que les dix prévues par le jeu)

// bugs à régler : si aucune proposition n'est bonne, ça doit s'afficher, là pour l'instant ça laisse le score précédent

// QUESTIONS :

// pertinence ajout du css et du html via le js ? 
// pourquoi ça ne fonctionne pas quand j'essaye de réduire la fonction pour les holes.change et repeat.change


// CREATION DES TABLEAUX

// Deux tableaux qui comprennent les possibilités de base
// 3 tableaux vides qui seront incrémentés : celui des couleurs sélectionnées aléatoirement,
// de celles choisies par le joueur et du feedback donné par rapport aux réponses du joueur.

const colors = ["blue", "red", "green", "yellow", "purple", "brown", "orange"];
const colorsNholes = ["blue", "red", "green", "yellow", "purple", "brown", "orange", "grey"];
let selectedColors = [];
let selectedHumanColors = [];
let feedback = [];


// BOUTONS TROUS ET REPETITIONS

// Récupération dans une variable des valeurs des deux checkbox qui offrent la possibilité 
// d'activer ou non les options de trous et de répétitions

var holes = document.querySelector('input[value="holes"]');
var repeat = document.querySelector('input[value="repeat"]');

// S'il y a un changement au niveau de l'input (eventListener "onchange"), alors la page se
// recharge avec la méthod reload, celle-ci prend d'ailleurs un paramètre boolean qui est ici 
// sur false, c'est-à-dire qu'elle n'est pas rechargée à partir du serveur mais à partir
// de la machine locale (permet donc de garder les valeurs des inputs répétitions et trous) 


holes.onchange = function(param) {
    document.location.reload(false);
    }
  

repeat.onchange = function() {
    document.location.reload(false);
    }
  



// FONCTION SELECTION ALEATOIRE ORDI

// si la checkbox repeat est activée (elle a été récupérée dans une variable nommée 
// repeat dans les blocs précédents), alors on lance une boucle qui incrémente un tableau
// de valeurs choisies au hasard sans éviter la répétition (simplement avec push donc). 
// arr est le tableau sur lequel on opère les sélections et newArr le nouveau tableau composé. 
// comment ajoute-t-on à newArr une valeur choisie au hasard dans arr ? simplement en utilisant
// des méthodes qui choisissent un nombre aléatoire qui correspondra à une valeur d'index
// limitée à la longueur du tableau arr (avec arr.length)
// avec le else, on dit implicitement que si repeat n'est pas cochée, tant que la valeur du 
// tableau à composer est inférieure à 4 (c'est à dire qu'elle peut aller jusqu'à 4 entrées
// puisque la première valeur de son index vaut 0), on stocke dans une variable (rdm) un index généré
// aléatoirement dans un ordre de grandeur qui ne dépasse pas la longueur du tableau arr
// et si on constate que le tableau newArr ne comprend pas déjà la valeur arr[rdm], alors on 
// l'ajoute dans le nouveau tableau avec push

function randomPicks(arr, newArr) {
  if(repeat.checked){
    for (var i = 0; i < 4; i++) {
    newArr.push(arr[Math.floor(Math.random() * arr.length)]);
  }
}
  else{
      while (newArr.length < 4){
    let rdm = Math.floor(Math.random() * arr.length);
    if(!newArr.includes(arr[rdm])){
       newArr.push(arr[rdm]);
    }
  }
  }
  }


// TEST DU RESULTAT - COMPARAISON DES DEUX TABLEAUX 

// La fonction commence par vérifier l'occurrence parfaite entre deux tableaux (grâce aux deux
// arguments, la comparaison se fera entre les couleurs choisies au hasard et les valeurs
// sélectionnées par l'utilisateur) à l'aide de l'opérateur logique == et de la méthode JSON.stringify
// qui permet de convertir un objet ou une valeur en string, rendant ainsi la comparaison très simple
// si c'est le cas alors l'utilisateur a réussi, un message s'affiche et la page se recharge ensuite.
// Si ce n'est pas le cas, alors on va devoir rendre un feedback, à l'aide d'une boucle for
// qui permet de tester l'égalité entre chaque valeur des deux tableaux, l'une après l'autre,
// et si les deux valeurs sont identiques (if (arr1[i]==arr2[i])) alors on ajoute un feedback
// noir ça veut dire bonne position et bonne couleur, et si la valeur est simplement contenue
// mais mal positionnée (arr1.includes(arr2[i])) alors on rend un blanc. Pour terminer, on applique
// la méthode sort pour faire afficher, comme demandé, les noirs en premiers (ce qui est pratique
// puisque ça correspond ici à l'ordre alphabétique)  

function resultCheck(arr1, arr2){
  if(JSON.stringify(arr1)==JSON.stringify(arr2)){
    console.log("Feedback : Bravo, vous avez réussi !");
    feedback = ["black", "black", "black", "black"];
    alert("Bravo, vous avez réussi !");
    document.location.reload(false);
  }  
  else{
    for (var i = 0; i < 4; i++){
      if (arr1[i]==arr2[i]){
        feedback.push("black");
      }
      else {
        if (arr1.includes(arr2[i])) {
          feedback.push("white");
        }
      }
    }
  }
  feedback.sort();
}


// SELECTION ALÉATOIRE DES COULEURS

// Ici, on utilise différents paramètres selon le cas d'option dans lequel on est : si les
// répétitions sont activées, alors on prend comme tableau sur lequel opérer les sélections
// le tableaux colorsNholes qui comprend un "trou", autrement on opère cette sélection sur 
// le tableau de base, sans trous (colors). Si on est dans ce dernier cas, on masque l'élément
// c8 qui correspond à la valeur trou

if(holes.checked){
randomPicks(colorsNholes, selectedColors);

}
else{
randomPicks(colors, selectedColors);
document.getElementById("c8").style.display="none";
console.log("COULEUR A DEVINER : " + selectedColors);

}


// CSS LOAD AUTO (NON-HUMAN)

// Lorsque la page se charge, on lance la fonction colorize qui va donner les couleurs à nos
// éléments div, ce qui aurait pu se faire en assignant les valeurs directement dans le css.
// on utilise une boucle limitée à la longueur du tableau colorsNholes; on assigne à une variable
// les valeurs changeantes des id (id = "c" + i) et à chaque itération on récupère l'id en 
// l'associant à une variable nommée idSelector, puis on fait correspondre la couleur de cet
// élément à la couleur correspondante dans le tableau. 

document.body.onload = colorize();
function colorize () { 
  for (var i = 1; i < colorsNholes.length + 1; i++){
      var id = "c" + i;
      var idSelector = document.getElementById(id);
      idSelector.style.backgroundColor = colorsNholes[i-1];
  
    }

  for (var i = 1; i < selectedColors.length + 1; i++){
    var id = "r" + i;
    var idSelector = document.getElementById(id);
    idSelector.style.backgroundColor = selectedColors[i-1];
  }
  }


  
// PICKUP COLORS

let userAttempts = 1;
let colorSelectionIndex = 0;
function userSelection(currentColor) {


  if(repeat.checked){
    console.log("REPETITIONS ACTIVEES")
    colorSelectionIndex ++;
    var id = "c" + userAttempts + colorSelectionIndex;
    var changingColor = document.getElementById(id);
    changingColor.style.backgroundColor = currentColor;
    selectedHumanColors.push(currentColor);


      if(colorSelectionIndex == 4){
      console.log(selectedHumanColors);
      colorSelectionIndex = 0;
      userAttempts ++;
      resultCheck(selectedColors, selectedHumanColors);
      selectedHumanColors = [];
  
      feedbackDisplay();
      feedback = [];

      }

      if(userAttempts == 11){
        alert("Gameover :'( ;-)")
        document.location.reload(false);
      } 

  }

  else{
    
    colorSelectionIndex ++;
    var id = "c" + userAttempts + colorSelectionIndex;
    var changingColor = document.getElementById(id);

    
    if(!selectedHumanColors.includes(currentColor)){
      changingColor.style.backgroundColor = currentColor;
      selectedHumanColors.push(currentColor);

            if(colorSelectionIndex == 4){
      colorSelectionIndex = 0;
      userAttempts ++;
      resultCheck(selectedColors, selectedHumanColors);
      selectedHumanColors = [];
    
      feedbackDisplay();
      feedback = [];

      }

      if(userAttempts == 11){
        alert("Gameover :'( ;-)")
        document.location.reload(false);
      } 

      }
    else{
      colorSelectionIndex --;
    }

  }


  }


  // FEEDBACK

function feedbackDisplay(){
        for (var i = 1; i < feedback.length + 1; i++){
     
            var id = "f" + (userAttempts - 1) + i;
            console.log(userAttempts);
            
            var idSelector = document.getElementById(id);
            idSelector.style.backgroundColor = feedback[i-1];
        }
      }

//CORRIGER / EFFACER LA SELECTION

function effacer(){
/*
  if(colorSelectionIndex == 0){
      userAttempts --;
        for (var i = 1; i < 5; i++){
          var id = "c" + userAttempts + i;
          var changingColor = document.getElementById(id);
          changingColor.style.backgroundColor = "grey";
      }
  colorSelectionIndex = 0;
  selectedHumanColors = [];


  for (var i = 1; i < 5; i++){
          
            var id = "f" + (userAttempts) + i;
            var idSelector = document.getElementById(id);
            idSelector.style.backgroundColor = "lightgrey";
        }
    
    
  }
  else{  */
    for (var i = 1; i < selectedHumanColors.length + 1; i++){
      var id = "c" + userAttempts + i;
      var changingColor = document.getElementById(id);
      changingColor.style.backgroundColor = "grey";
      }
  colorSelectionIndex = 0;
  selectedHumanColors = [];
/*
}
userAttempts ++;

console.log(userAttempts);
*/
}

