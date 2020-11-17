# AANGRXWorkshop (Angular Advanced NGRX Workshop)

*Based on https://github.com/toddmotto/ac-boilerplate*

![Zozor](https://simplifyingtechblog.files.wordpress.com/2017/06/angularjasmine.png?w=520&h=297&crop=1)

## Lancer les test

Exécutez la commande `npm run test` pour démarrer les tests.

## Mise en pratique

### Service business
Dans le fichier `romanize.service.spec.ts`
#### Règles
1) Un nombre en chiffres romains se lit de gauche à droite ;
2) Un même symbole n'est pas employé quatre fois de suite (sauf M) ;
3) Tout symbole qui suit un symbole de valeur supérieure ou égale s’ajoute à celui-ci (exemple : 6 s'écrit VI) ;
4) Tout symbole qui précède un symbole de valeur supérieure se soustrait à ce dernier ;
    * I doit être retranché à V ou à X quand I est devant V ou X (ex. : 4 s'écrit IV),
    * X doit être retranché à L ou à C quand X est devant L ou C (ex. : 40 s'écrit XL),
    * C doit être retranché à D ou à M quand C est devant D ou M (ex. : 900 s'écrit CM),
    * Par contre, ôter I de L ou de C n'est pas pratiqué (49 s'écrit XLIX et non IL ; 99 s'écrit XCIX et pas IC) ;
5) Les symboles sont groupés par ordre décroissant, sauf pour les valeurs à retrancher selon la règle précédente (ex. : 1 030 s'écrit MXXX et non XXXM qui est une des façons de représenter 970note 1).

994 s’écrit CMXCIV et se décompose comme suit: 100 soustrait à 1000 (900) + 10 soustrait à 100 (90) + 1 soustrait à 5 (4) = 994.

49 s’écrit XLIX pour 10 soustrait à 50 (40) + 1 soustrait à 10 (9) = 49

308 s’écrit CCCVIII pour 100+100+100 (300) + 5 + 1+1+1 (3) = 308

Exemples: https://fr.wikipedia.org/wiki/Num%C3%A9ration_romaine#Exemples

### Pipe
Dans le fichier `date.pipe.spec.ts`
#### Règles
- Le pipe date avec la locale "en" doit renvoyer une date au format "MMM dd, yyy" (exemple: Sep 21, 2019) par défaut
- Si le pipe reçois un string de formatage en paramètren il soit retourner la date dans ce bon format (exemple de format: 'dd/MM/yyyy')

### Composant
Dans le fichier `share-calculator.component.spec.ts`
#### Règles
- L'incrémentation se fait toujours de 1
- La décrémentation se fait toujours de 1
- Il ne doit pas être possible d'incrémenter au dessus du maximum
- Il ne doit pas être possible de décrémenter en dessous du minimum (1 et non configurable)
- Il ne doit pas être possible ni d'incrémenter ni de décrémenter si le maximum est mis à 1 ou 0

### Formulaire
Dans le fichier `pizza-form.component.spec.ts`
#### Règles
- Le formulaire ne doit pas être valide si aucun nom n'a été entré
- Le formulaire doit être valide si un nom est entré
- Le bouton "create" doit être affiché s'il s'agit d'une création (pas d'ID)
- Le bouton "update" doit être affiché s'il s'agit d'une modification (avec ID)

### Web service
Dans le fichier `pizzas.service.spec.ts`
#### Règles
- L'information ne doit pas être altérée entre le retour du serveur et le retour de la fonction

### Routing
Dans le fichier `products.component.spec.ts` 
#### Règles
- Une navigation vers le détail d'une pizza doit être effectuée au click sur celle-ci

### Routing 2
Dans le fichier `product-item.component.spec.ts` 
#### Règles
- Mise à jour
    - La pizza correspondant à l'id contenu en paramètre de l'url doit être chargé en même temps que l'application
- Création
    - Aucun appel serveur pour récupérer les pizzas ne doit être fait

### Store
Dans le fichier `pizzas-state.spec.ts`
#### Règles
- Le store doit automatiquement charger la liste des toppings
- Si l'utilisateur répond "oui" à la fenètre de confirmation, une requête de suppression au serveur doit être effectuée
- Si l'utilisateur répond "non" à la fenètre de confirmation, aucune requête de suppression au serveur ne doit être effectuée
- S'il y a une demande de mise à jour, une requête serveur de mise à jour doit être effectuée
- S'il y a une demande de création, une requête serveur de création doit être effectuée

### Marble
Dans le fichier `products.component.spec.ts` 
#### Règles
- Aucun item de doit apparaitre tant que le service n'a pas répondu


![Zozor](https://www.letscode.hu/img/letscodelogo190.png)
