// NOTES GEN SUR LE DEV
// poser la q. : pourquoi ça ne va pas quand je fais avec les paramètres

const colors = ["blue", "red", "green", "yellow", "purple", "brown", "orange"];
let selectedColors = [];
let selectedHumanColors = [];
let feedback = [];

// FONCTION SELECTION ALEATOIRE ORDI
// il faut développer une fonction qui opère une sélection aléatoire de 4 éléments au sein d'un tableau et qui ajoute ces éléments au sein d'un nouveau tableau
function randomPicks(arr, newArr) {
  for (var i = 0; i < 4; i++) {
    newArr.push(arr[Math.floor(Math.random() * arr.length)]);
  }
}

// SIMULATION : SELECTION PAR L'HUMAIN
function randomHumanPicks(arr, newArr) {
  for (var i = 0; i < 4; i++) {
    newArr.push(arr[Math.floor(Math.random() * arr.length)]);
  }
}

// TEST DU RESULTAT - COMPARAISON DES DEUX TABLEAUX 

function resultCheck(arr1, arr2){
  if(JSON.stringify(arr1)==JSON.stringify(arr2)){
    return "Bravo, vous avez réussi !";
  }  
  else{
    for (var i = 0; i < 4; i ++){
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
}


// COMMANDES DE TEST


randomPicks(colors, selectedColors);
randomHumanPicks(colors, selectedHumanColors);
resultCheck(selectedColors, selectedHumanColors);

console.log(selectedColors);
console.log(selectedHumanColors);
console.log(feedback);




