/*--------------------------------------------------Variables------------------------------------------------------------*/

const input1 = document.getElementById("val1");
const soumettre = document.getElementById("soumettre");
const checkBoxes = document.querySelectorAll(".billet");
const affichage = document.getElementById("result");

let billets = [500, 200, 100, 50, 20, 10, 5, 2, 1];

const li = document.createElement("li");

/*--------------------------------------------------Fonctions------------------------------------------------------------*/

function deconstruct(a) {
  const nBillets = [];

  let b = 0;

  for (let i = 0; i < billets.length; i++) {
    if (a >= billets[i]) {
      b = Math.floor(a / billets[i]); //nBre de Billets
      a = a % billets[i]; //reste de la somme des billets
    } else {
      b = 0;
    }

    //affichage
    if (billets[i] >= 5) {
      nBillets.push(`Billets de ${billets[i].toString()} : ${b}`);
    } else {
      nBillets.push("Pièces de " + billets[i].toString() + " : " + b);
    }
  }

  return nBillets;
}

function createBillets() {
  billets = [];
  checkBoxes.forEach((item) => {
    if (item.checked) {
      billets.push(item.value);
    }
  });
}

/*--------------------------------------------------Evenements------------------------------------------------------------*/


soumettre.addEventListener("click", () => {
  createBillets();
  if (billets.length > 0) {

    const resultat =  deconstruct(input1.valueAsNumber);
    affichage.innerHTML=""
      
    resultat.forEach((ligne) => {
        
        const liClone = li.cloneNode(false);
        const lineNode = document.createTextNode(ligne);
        
        
        affichage.appendChild(liClone);
        liClone.appendChild(lineNode);
    });
  } else {
    alert("veuillez sélectionner une coupure");
  }
});

