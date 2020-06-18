// il s'agit de notre fichier principal dans lequel dans les kw import nous permettent d'importer nos différents objets 
// attention que par objet, on désigne ici aussi bien un tableau d'objets récupéré depuis ./sourceJSON que une classe nommée articles dans ./articles ou encore une classe
// nommée Magasin importée depuis ./magasin. 

// à ce stade, ce fichier main.ts ne sert donc qu'à condenser ces différents objets.

// ce que ça nous permet, c'est de pouvoir, comme on le fait ci-dessous, instancier une nouvelle instance de la classe magasin, puisqu'elle a été importée dans ce fichier main.ts

// ce que Denis essaye de nous faire acquérir ici, c'est aussi une façon de procéder en segmentant bien son code en des fichiers séparés. 

// remarque importante: c'est sans doute ça qui fait la puissance de la POO, mais les différents objets que l'on importe ici (qu'il s'agisse d'objets plus à proprement parler) 
// peuvent évidemment être totalement différents; on a par exemple un objet articles qui comprend juste des propriétés et un constructor (préciser!) alors que la classe Magasin 
// comprend elle un constructor plus complexe, fonctionne en important l'objet article,... ça parait donc très bizarre (d'autant plus quand on a à peine fait un peu de programmation
// avec des fonctions)

// que se passe-t-il quand j'affiche l'objet importé articles ? ==> la console, après avoir lancé la commande ./dist/app.bundle.js tout en étant bien dans la bonne branche github
// me renvoie simplement que ça correspond à une fonction ... pareil, je suppose, si je fais console.log(magasin)
// ... pas du tout : voir le détail du fonctionnement de Magasin dans le fichier magasin.ts

import { tab_img } from "./sourceJSON";
import { articles } from "./articles";
import { Magasin } from "./magasin";


// création d'une nouvelle instance de la classe Magasin assignée à une variable nommée aussi magasin ;-) 
// ==> si on fait console log de la var magasin qui correspond à la classe magasin alors grâce au constructor on a le tableau d'objets en entier qui est renvoyé (car on a en paramètre
// de l'instanciation de magasin le tableau tab_img); mais on peut choisir, et c'est bien ça qui est pratique j'imagine, de faire fonctionner la méthode getArticleById(id) pour 
// sélectionner uniquement un article précis.
let magasin=new Magasin(tab_img);
console.log(magasin.getListArticle());
console.log(articles.getTitle)