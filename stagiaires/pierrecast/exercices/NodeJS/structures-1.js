let tests = [];

//*****************************************************************************************************************************
// Ecrire une fonction qui vérifie si une valeur existe dans un objet
function present(obj, value) {
    let present = false;
    for (let property in obj) {
        if (obj[property] === value) {
            present = true;
        }
    }

    return present;
}
const obj= { name: 'John', age: 26}

tests.push(['present', present(obj,26) === true]);
tests.push(['present', present(obj,'John') === true]);
tests.push(['present', present(obj,34) === false]);

//*****************************************************************************************************************************
// Ecrire une fonction qui prend deux tableaux de même longueur, un de clés, un de valeurs, et qui crée un objet
// contenant les différentes paires clé/valeur.
// Ex : fabriqueObjet(['nom', 'quantite', 'prix'], ['carotte', 2, 1.5]) => {nom: 'carotte', quantite: 2, prix: 1.5}

function joinTab(tabCle, tabValue) {
    let obj = {};
    for (let i = 0; i < tabCle.length; i++) {
        let name = tabCle[i];
        obj[name] = tabValue[i];
    }
    
    return obj;
}

const tabCle = ['name', 'age'];
const tabValue = ['John', 26];
tests.push(['joinTab', deepEqual(joinTab(tabCle, tabValue),  {name: "John", age: 26} )]);

//*****************************************************************************************************************************
// Ecrire une fonction qui change le salaire d'un employé
let employes = [
    { nom: 'Jean',       salaire: 7500},
    { nom: 'Emma',       salaire: 8000},
    { nom: 'Pierre',     salaire: 6500}
];

function setSalaire(employes, name, value) {
    for (let employe of employes) {
        if (employe.nom === name) {
            employe.salaire = value
        }
    }
}

setSalaire(employes, 'Pierre', 10000);
tests.push(['setSalaire', employes[2].salaire === 10000]);

//*****************************************************************************************************************************
// Ecrire une fonction qui renvoie le prix total d'une commande encodée dans ce format:
let commande =  {
      banane: "1.25",
      mouchoir: ".99",
      Tshirt: "25.01",
      pomme: "0.60",
      deodorant: "10.34",
      vodka: "22.36"
};

function prixTotal(commande) {
    let sum = 0;
    for (let prop in commande) {
        sum += Number(commande[prop]);
    }
    return sum
}

tests.push(['prixTotal', prixTotal(commande) === 60.55]);
// ==> 60.55



//*****************************************************************************************************************************
// Ecrire une fonction qui renvoie le prix total d'une liste d'articles encodée dans ce format

let articles = [
    {nom: "banane", prix: 1.25, quantite: 2},
    {nom: "mouchoir", prix: 0.99, quantite: 4},
    {nom: "Tshirt", prix: 25.01, quantite: 2},
    {nom: "pomme", prix:  0.60, quantite: 4},
    {nom: "deodorant", prix: 10.34, quantite: 1},
    {nom: "vodka", prix: 22.36, quantite: 3}
];

function prixTotalQte(articles) {
    let sum = 0;
    articles.forEach(article => {
        sum += article.prix * article.quantite;
    });

    return sum;
}
// ==> 136.3
tests.push(['prixTotalQte', prixTotalQte(articles) === 136.3]);


//*****************************************************************************************************************************
// Ecrire une fonction qui renvoie un tableau d'objets contenant le nom et la moyenne de chaque etudiant (nom : moyenne)
let students = [
    { name: "John", notes: [3, 5, 4]},
    { name: "Alice", notes: [1, 2, 3]}
    ];
//  ==>
let out =  [
    { name: "John", moyenne: 4 },
    { name: "Alice", moyenne: 2}
];
function moyenne(students) {
    let studOut = [];

    students.forEach(student => {
        let sum = 0;
       
        student['notes'].forEach(note => {
            sum+= note;
        });
        studOut.push({name: student['name'], moyenne : sum/student['notes'].length });
    });

    return studOut;
}

tests.push(['moyenne', deepEqual(moyenne(students),  out )]);

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

function zoo(animaux, nbPattes) {
    let pattes = 0;
    animaux.forEach(animal => {
        pattes += animal.nombre * nbPattes[animal.espece];
    });
    return pattes
}
tests.push(['zoo', zoo(animaux, nbPattes) === 81]);

//*****************************************************************************************************************************
// Un client a droit à une pizza gratuite s'il a effectué X commandes de minimum Y euros.
// Ecrire une fonction qui prend un objet contenant des clients, un nombre minimum de commandes et un prix minimum par commande.
// Elle renvoie un tableau (dans l'ordre alphabétique) des clients qui ont droit à une pizza gratuite.

let clients = {
   "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
   "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
};


function pizzaGratuite(clients, nombreMin, prixMin) {
    let gratuit = [];
    for (let name in clients) {
        let achatValide = clients[name].filter(prix => prix >= prixMin);
        if (achatValide.length >= nombreMin) {
            gratuit.push(name);
        }
    }
    return gratuit;
}

tests.push(['pizzaGratuite', deepEqual(pizzaGratuite(clients, 5, 20),  ["Spider-Man"] )]);
tests.push(['pizzaGratuite', deepEqual(pizzaGratuite(clients, 3, 10),  ["Batman", "Spider-Man"] )]);
tests.push(['pizzaGratuite', deepEqual(pizzaGratuite(clients, 5, 100), [])]);

//*****************************************************************************************************************************
//    Ecrire une fonction qui prend un tableau de groupes, et un tableau d'etudiants, et qui renvoie un tableau des groupes "fusionnés" avec les étudiants.

const groupesAvecEtudiants = [[ { id: 1,name: "GROUP1",studentIds: [2, 1]}], [{id: 1,name: "John"},{ id: 2, name: "Steve" } ]];

function group(groupesAvecEtudiants) {    
    const groupe = groupesAvecEtudiants[0][0];
    const students = groupesAvecEtudiants[1];
    let groupOut = [{id: groupe.id, name: groupe.name, students: [] }]; 
    
    for (let id of groupe.studentIds) {
        let student = getStudent(students, id);
        groupOut[0].students.push(student);
    }

    return groupOut;
}
function getStudent(students, id) {
    for (let student of students) {
       if (student.id === id) {
           return student;
       }
    }

    return false;
}

let groupOut = [{  id: 1,name: "GROUP1",students: [{ id: 2,name: "Steve" }, { id: 1, name: "John"} ]}];
tests.push(['groupesAvecEtudiants', deepEqual(group(groupesAvecEtudiants),  groupOut )]);

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