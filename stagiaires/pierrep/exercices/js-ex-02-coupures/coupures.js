const mType = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05]; //tableau contenant les types de monnaie (mType pour "moneyType"), billets et pièces confondus
const mNb = []; //tableau (mNb pour "moneyNumber" dans lequel la boucle ci-dessous va incrémenter le nombre nécessaire de billet ou de pièce à rendre en fonction de la saisie utilisateur
var newVal; //on initialise cette var, à quoi va-t-elle servir ? à prendre la valeur de ce qu'il reste à diviser sur le prochain élément du tableau mType
var input = 23501; //valeur de test
newVal = input; //avant de lancer la boucle, on fait correspondre la valeur de l'input (ici 23501) à newVal
for (var i = 0; i < mType.length; i++){ //boucle qui itère sur chaque élément de mType
  mNb.push(Math.trunc(newVal / mType[i])); //ici, on ajoute à chaque tour de boucle une valeur dans le tableau mNb (mNb.push) : la valeur saisie par l'utilisateur (ici 2350) que l'on divise par l'élément i du tableau mType (donc 500 pour commencer) > 2350 / 500 = 4.7. Que faire avec ce chiffre ? on ne reprend que le nombre entier avec Math.trunc; on sait donc que 500 va 4 fois dans 2350 donc 4 billets de 500.
  newVal = newVal - (mNb[i] * mType[i]); //le but de cette ligne est de réinitialiser newVal pour que la boucle puisse redémarrer avec la valeur restante de la ligne précédente, qui a identifié combien de fois l'élément i de mType "va" dans input (la saisie utilisateur); pour ça on soustrait à l'input (2350) le 1er nombre de billets (500) * le nb de billets correspondant stockés dans mNb (4) ce qui donne ici 2000 donc 2350 - 2000 et on repart avec la valeur de 350 pour recommencer la boucle. c'est la même chose donc mais avec 350 et cette fois divisé par l'élément 2 soit 200 : 350/200 = 1,75 on sait donc qu'il faudra 1 seul billet de 200 et la ligne suivante fait 350 - 200 = 150 soit la nouvelle valeur de newVal, et ainsi de suite 
};
console.log(mNb);
