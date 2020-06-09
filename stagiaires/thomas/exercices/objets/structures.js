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


let tests = [];

//*****************************************************************************************************************************
// Ecrire une fonction qui vérifie si une valeur existe dans un objet

function existe(obj, val) {

    let itExists = false

    for(let i in obj) {
        if(obj[i] === val) {
            itExists = true;
        }
    }
    return itExists;
}

tests.push(['existe', existe({name: "John", firstName:"Doe"}, "Do") === false]);
tests.push(['existe', existe({name: "John", firstName:"Travolta"}, "Travolta")]);

//*****************************************************************************************************************************
// Ecrire une fonction qui prend deux tableaux de même longueur, un de clés, un de valeurs, et qui crée un objet
// contenant les différentes paires clé/valeur.
// Ex : fabriqueObjet(['nom', 'quantite', 'prix'], ['carotte', 2, 1.5]) => {nom: 'carotte', quantite: 2, prix: 1.5}

function fabriqueObject(keys, values) {


    let newObj = {};

    for(let i = 0; i < keys.length; i++) {

        newObj[keys[i]] = values[i]

    }

    return newObj;
}

tests.push(['fabriqueObject',  deepEqual(fabriqueObject(["prop1", "prop2", "prop3"], ["value1", "value2", "value3"]), { prop1: 'value1', prop2: 'value2', prop3: 'value3' })])



//*****************************************************************************************************************************
// Ecrire une fonction qui change le salaire d'un employé
let employes = [
    {nom: 'Jean', salaire: 7500},
    {nom: 'Emma', salaire: 8000},
    {nom: 'Pierre', salaire: 6500}
];

function changeSalaire(tabObj, name, paye) {
  
  
    for (let i = 0; i < tabObj.length; i++) {
      
      if(tabObj[i].nom === name) {
          tabObj[i].salaire = paye
      }
         
    }
  
    return tabObj;
}


tests.push(['changeSalaire', deepEqual(changeSalaire(employes, "Emma", 20000), [
    { nom: 'Jean', salaire: 7500 },
    { nom: 'Emma', salaire: 20000 },
    { nom: 'Pierre', salaire: 6500 }
  ])
])


tests.push(['changeSalaire', deepEqual(changeSalaire(employes, "Jean", 5000), [
    { nom: 'Jean', salaire: 5000 },
    { nom: 'Emma', salaire: 20000 },
    { nom: 'Pierre', salaire: 6500 }
  ])
])


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

    // ==> 60.55

    function totalBill(obj) {
 
        let total = 0;
        
        for (let i in obj) {
          total += parseFloat(obj[i])
        }
         return total;
      }
      
tests.push(['totalBill', totalBill(commande) === 60.55]);
// tests.push(['totalBill', totalBill({"somme1" : 12, "somme2": 13, "somme3": 14}) === 39]);

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

// ==> 136.3

function totalBillArticles(tabObj) {
  
    let total = 0;
    
    for (let i = 0; i < tabObj.length; i++) {
      
      total += (tabObj[i].prix * tabObj[i].quantite);
      
    }
    
    return total;
  }

  tests.push(['totalBillArticles', totalBillArticles(articles) === 136.3]);


//*****************************************************************************************************************************
// Ecrire une fonction qui renvoie un tableau d'objets contenant le nom et la moyenne de chaque etudiant (nom : moyenne)
 let testMoyenne = [
     { name: "John", notes: [3, 5, 4]},
     { name: "Alice", notes: [1, 2, 3]}
 ]

//  ==>
//  [
//      { name: "John", moyenne: 4 },
//      { name: "Alice", moyenne: 2}
//  ]

function moyenne(tabObj) {

        for(let i = 0; i < tabObj.length; i++) {   
             tabObj[i].moyenne = tabObj[i].notes.reduce((acc, val) => (acc + val), 0) / tabObj[i].notes.length;
             delete tabObj[i].notes;
        }
         
    return tabObj;
  }

  tests.push(['moyenne', deepEqual(moyenne(testMoyenne), [
    { name: "John", moyenne: 4 },
    { name: "Alice", moyenne: 2}
])])


//*****************************************************************************************************************************
// Ecrire une fonction qui renvoie le nombre total de pattes des animaux d'un zoo
// Voici comment sont comptabilisées les pattes

let nbPattes = {
                pelican : 2,
                hippo: 4,
                lion: 4,
                flamant: 1,
                autruche: 2,
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

function totalPaws(paws, animals) {

    let total = animals.reduce((somme, value, i) => {

        somme += (value.nombre * Object.values(paws)[i])
        return somme;
        },0)

        return total;
}

tests.push(['totalPaws', deepEqual(totalPaws(nbPattes, animaux), 81)]);


//*****************************************************************************************************************************
// Un client a droit à une pizza gratuite s'il a effectué X commandes de minimum Y euros.
// Ecrire une fonction qui prend un objet contenant des clients, un nombre minimum de commandes et un prix minimum par commande.
// Elle renvoie un tableau (dans l'ordre alphabétique) des clients qui ont droit à une pizza gratuite.

let clients = {
   "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
   "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
};

function pizzaGratuite(obj, cmdMin, euroMin) {
  
   let newTab = [];
   
   for (let i in obj) {    
     let listeCommandesSup = obj[i].filter((commandes) => commandes > euroMin);
     if(listeCommandesSup.length > cmdMin) {
       newTab.push(i);
     }
   }
   
   return newTab.sort();
 }
 
 tests.push(['pizzaGratuite', deepEqual(pizzaGratuite(clients, 5, 20), [ 'Spider-Man' ])])
 tests.push(['pizzaGratuite', deepEqual(pizzaGratuite(clients, 3, 10) , ["Batman", "Spider-Man"])])
 tests.push(['pizzaGratuite', deepEqual(pizzaGratuite(clients, 5, 100), [])])

//
// pizzaGratuite(customersObj, 5, 20) =>  ["Spider-Man"]
//
// pizzaGratuite(customersObj, 3, 10) =>  ["Batman", "Spider-Man"]
//
// pizzaGratuite(customersObj, 5, 100) => []



//*****************************************************************************************************************************
//    Ecrire une fonction qui prend un tableau de groupes, et un tableau d'etudiants, et qui renvoie un tableau des groupes "fusionnés" avec les étudiants.
//
//   groupesAvecEtudiants([
//     {
//       id: 1,
//       name: "GROUP1",
//       studentIds: [2, 1]
//     }
//   ], [
//     {
//       id: 1,
//       name: "John"
//     },
//     {
//       id: 2,
//       name: "Steve"
//     }
//   ])
//   =>  [
//     {
//       id: 1,
//       name: "GROUP1",
//       students: [
//         {
//           id: 2,
//           name: "Steve"
//         },
//         {
//           id: 1,
//           name: "John"
//         }
//       ]
//     }
//   ]


function groupesAvecEtudiants(groupObj, elevesObj) {
    
    let groupObjNoIndex = groupObj[0] 
    let idElevesSorted = elevesObj.map((student) => student.id).sort();
    groupObjNoIndex.students = []
  
  for (let i = 0; i < idElevesSorted.length; i++) {
     if(elevesObj[i].id === idElevesSorted[i]) {
            groupObjNoIndex.students.push(elevesObj[i]);
        }    
  }
  
    groupObjNoIndex.students.reverse();
    delete groupObjNoIndex.studentIds
    return groupObj;
  }

  tests.push(['groupesAvecEtudiants', deepEqual(groupesAvecEtudiants([
    {
      id: 1,
      name: "GROUP1",
      studentIds: [2, 1]
    }
  ], [
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Steve"
    }
  ]), [
    {
      id: 1,
      name: "GROUP1",
      students: [
        {
          id: 2,
          name: "Steve"
        },
        {
          id: 1,
          name: "John"
        }
      ]
    }
  ] )])

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


