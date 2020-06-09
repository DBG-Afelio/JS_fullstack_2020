let tests = [];
//*****************************************************************************************************************************
// Ecrire une fonction qui vérifie si une valeur existe dans un objet
function isValue(object, value) {
    let bool = false;
    for (let key in object) { (object[key] === value) ? bool = true : bool; }
    return bool;
}
tests.push(['Is there Value', isValue({brand: 'MV', color: 'red & silver', cc:'750'}, '750') === true]);
//*****************************************************************************************************************************
// Ecrire une fonction qui prend deux tableaux de même longueur, un de clés, un de valeurs, et qui crée un objet
// contenant les différentes paires clé/valeur.
// Ex : fabriqueObjet(['nom', 'quantite', 'prix'], ['carotte', 2, 1.5]) => {nom: 'carotte', quantite: 2, prix: 1.5}
function buildObject(keyArr, valArr) {
    let object = {};
    keyArr.forEach((key, i) => object[key] = valArr[i]);
    return object;
}
tests.push(['Build Object', deepEqual(buildObject(['nom', 'quantite', 'prix'], ['carotte', 2, 1.5]), { nom: 'carotte', quantite: 2, prix: 1.5 })]);
//*****************************************************************************************************************************
// Ecrire une fonction qui change le salaire d'un employé
let employes = [
    {nom: 'Jean', salaire: 7500},
    {nom: 'Emma', salaire: 8000},
    {nom: 'Pierre', salaire: 6500}
];
function changeSalary(employeesArr, employeeName, newSalary) {
    employeesArr.forEach(obj => (obj['nom'] === employeeName) ? obj.salaire = newSalary : obj);
    return employeesArr;
}
tests.push(['Change Salary', deepEqual(changeSalary(employes, 'Emma', 15000), [{nom: 'Jean', salaire: 7500}, {nom: 'Emma', salaire: 15000}, {nom: 'Pierre', salaire: 6500}])]);

//*****************************************************************************************************************************
// Ecrire une fonction qui renvoie le prix total d'une commande encodée dans ce format:
let commande = {
    banane: "1.25",
    mouchoir: ".99",
    Tshirt: "25.01",
    pomme: "0.60",
    deodorant: "10.34",
    vodka: "22.36"
}; // ==> 60.55
function total(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += parseFloat(obj[key]); 
    }
    return sum;
}
tests.push(['Calcul Total', deepEqual(total(commande), 60.55)]);
//*****************************************************************************************************************************
// Ecrire une fonction qui renvoie le prix total d'une liste d'articles encodée dans ce format
let articles = [
    {nom: "banane", prix: 1.25, quantite: 2},
    {nom: "mouchoir", prix: 0.99, quantite: 4},
    {nom: "Tshirt", prix: 25.01, quantite: 2},
    {nom: "pomme", prix:  0.60, quantite: 4},
    {nom: "deodorant", prix: 10.34, quantite: 1},
    {nom: "vodka", prix: 22.36, quantite: 3}
]; // ==> 136.3
function totalFacture(arr) {
    let toto = 0;
    arr.forEach(obj => toto += obj.prix * obj.quantite); 
    return toto;
}
tests.push(['Total Facture', deepEqual(totalFacture(articles), 136.3)]);

//*****************************************************************************************************************************
// Ecrire une fonction qui renvoie un tableau d'objets contenant le nom et la moyenne de chaque etudiant (nom : moyenne)
//  [
//      { name: "John", notes: [3, 5, 4]},
//      { name: "Alice", notes: [1, 2, 3]}
//  ]
//  ==>
//  [
//      { name: "John", moyenne: 4 },
//      { name: "Alice", moyenne: 2}
//  ]
function calculMoyenne(arr) {
    let moyenne = 0;
    let arrOut = [];
    arr.forEach(obj => {
        moyenne = obj.notes.reduce((acc, currVal) => acc + currVal) / obj.notes.length;
        arrOut.push({ name: obj.name, moyenne: moyenne })
});
    return arrOut;
}
tests.push(['calcul Moyenne', deepEqual(calculMoyenne([{ name: "John", notes: [3, 5, 4]},{ name: "Alice", notes: [1, 2, 3]}]), [{ name: "John", moyenne: 4 },{ name: "Alice", moyenne: 2}])]);

//*****************************************************************************************************************************
// Ecrire une fonction qui renvoie le nombre total de pattes des animaux d'un zoo
// Voici comment sont comptabilisées les pattes
let nbPattes = {pelican : 2,
                 hippo: 4,
                 lion: 4,
                 autruche: 2,
                 flamant: 1,
                };
// Voici les animaux du zoo
let animaux = [
    {espece: "pelican", nombre: 6},
    {espece: "hippo", nombre:  5},
    {espece: "lion", nombre: 8 },
    {espece: "flamant", nombre: 3},
    {espece: "autruche", nombre: 7}
];

// ==> 81 pattes
function calculPattes(objPattes, arrAnimaux) {
    let pattes = 0;
    arrAnimaux.forEach(obj => pattes += obj.nombre * objPattes[obj.espece]);
    return pattes;
}
tests.push(['Calcul Pattes', deepEqual(calculPattes(nbPattes,animaux), 81)]);
//*****************************************************************************************************************************
// Un client a droit à une pizza gratuite s'il a effectué X commandes de minimum Y euros.
// Ecrire une fonction qui prend un objet contenant des clients, un nombre minimum de commandes et un prix minimum par commande.
// Elle renvoie un tableau (dans l'ordre alphabétique) des clients qui ont droit à une pizza gratuite.

let clients = {
   "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
   "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
};

//
// pizzaGratuite(customersObj, 5, 20) =>  ["Spider-Man"]
//
// pizzaGratuite(customersObj, 3, 10) =>  ["Batman", "Spider-Man"]
//
// pizzaGratuite(customersObj, 5, 100) => []
function pizzaGratuite(objClients, minOrderNb, minAmountPerOrder) {
    let arrFreeFor = [];
    for (let clientName in objClients) {
        let nbOrderWithMinAmount = objClients[clientName].filter(amount => amount >= minAmountPerOrder).length;
        (nbOrderWithMinAmount >= minOrderNb) ? arrFreeFor.push(clientName) : arrFreeFor;
        arrFreeFor.sort();
    }
    return arrFreeFor;
}
tests.push(['Pizza gratuite', deepEqual(pizzaGratuite(clients, 5, 20), ['Spider-Man'])]);
tests.push(['Pizza gratuite', deepEqual(pizzaGratuite(clients, 3, 10), ['Batman', 'Spider-Man'])]);
tests.push(['Pizza gratuite', deepEqual(pizzaGratuite(clients, 5, 100), [])]);

//*****************************************************************************************************************************
//    Ecrire une fonction qui prend un tableau de groupes, et un tableau d'etudiants, et qui renvoie un tableau des groupes "fusionnés" avec les étudiants.
//
let groupes = [
    
    {
        id: 1,
        name: "Equipe Masculine",
        studentIds: [2, 1]
    },
    {
        id: 2,
        name: "Equipe Feminine",
        studentIds: [3, 4]
    }
];
    
let students = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Steve"
    },
    {
        id: 3,
        name: "Bernadette"
    },
    {
        id: 4,
        name: "Felicie"
    }
];
let fusion = [
    {
        id: 1,
        name: "Equipe Masculine",
        studentIds: [
            {
                id: 2,
                name: "Steve"
            },
            {
                id: 1,
                name: "John"
            }
        ]
    },
    {
        id: 2,
        name: "Equipe Feminine",
        studentIds: [
            {
                id: 3,
                name: "Bernadette"
            },
            {
                id: 4,
                name: "Felicie"
            }
        ]
    }
];
function getStudentObj(id, arrStudents) {
    return arrStudents.find(student => student.id === id);
}
function groupStudents(arrGroups, arrStudents) {
  
    return arrGroups.map(objGroup => ({
        id: objGroup.id,
        name: objGroup.name,
        studentIds: objGroup.studentIds.map(id => getStudentObj(id, arrStudents))
    }));

}
console.log(groupStudents(groupes, students));
tests.push(['Groupe Etudiants', deepEqual(groupStudents(groupes, students), fusion)]);

afficheTests();
/* *******************************************
    NE PAS FAIRE ATTENTION
   POUR LES TESTS
***********************************************/

function afficheTests(fonction = false){
    let filteredTests = fonction ? tests.filter(test =>  test[0] === fonction.name) : tests;
    filteredTests
        .forEach(test => console.log(
            '[',test[1] === true ? '\x1b[32mPASSE\x1b[0m': '\x1b[31mECHOUE\x1b[0m',  ']',
            test[0],
));
}

// permet de tester l'égalité entre les valeurs de deux tableaux
function memeValeurs(tab1, tab2){
    if (tab1 !== undefined && tab2 !== undefined) {
        return tab1.length == tab2.length && tab1.every((element, index) => element === tab2[index]);
    } else
        return false;
}


function deepEqual(a,b)
{
  if( (typeof a == 'object' && a != null) &&
      (typeof b == 'object' && b != null) )
  {
     var count = [0,0];
     for( var key in a) count[0]++;
     for( var key in b) count[1]++;
     if( count[0]-count[1] != 0) {return false;}
     for( var key in a)
     {
       if(!(key in b) || !deepEqual(a[key],b[key])) {return false;}
     }
     for( var key in b)
     {
       if(!(key in a) || !deepEqual(b[key],a[key])) {return false;}
     }
     return true;
  }
  else
  {
     return a === b;
  }
}