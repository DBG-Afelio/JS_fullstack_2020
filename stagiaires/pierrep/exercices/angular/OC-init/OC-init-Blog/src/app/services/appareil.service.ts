export class AppareilService { //0. Création du service .ts dans un dossier créé spécifiquement pour les services - la question maintenant est : dans quel component injecter ce service ?
    // on a choisi app.module.ts donc direction là
 
    appareils = [ // 4. ici comme dit à l'étape 3. on a déporté la var appareils dans la classe AppareilService ; cela étant, il n'y a maintenant plus rien
    // dans app.component.ts : donc on doit compléter le déportage par deux choses 
    // 4.1. on va préciser dans app.component.ts qu'on a quand même ce tableau d'appareils avec appareils: any[];
    // 4.2. il faut ensuite préciser à app.component.ts puisse aller chercher les informations dans le service ==> on doit pour cela implémenter la méthode ngOnInit dans la 
    // déclaration de classe du component avec implements OnInit, qui doit, il ne faut pas l'oublier, être importée en haut depuis angular code, donc on ajoute
    // OnInit à l'import @angular/core (4.3)
    // go in app.component.ts
        {
          name: 'Machine à écrire',
          status: 'éteint'
        },
        {
          name: 'Frigo',
          status: 'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];

//6. déclarations des méthodes qui fonctionnent sur le service ; on en crée deux jusqu'ici - une qui allume tout et l'autre qui éteint tout.

switchOnAll(){
    for(let appareil of this.appareils){
        appareil.status = 'allumé';
    }
};

switchOffAll(){
    for(let appareil of this.appareils){
        appareil.status = 'éteint';
    }
};

// l'étape suivante est maintenant d'implémenter ces méthodes dans les components (7.) notamment dans app.component.html

switchOnOne(index: number){ //12. on crée deux nouvelles méthodes switchOnOne et switchOffOne dont le param est un index qui correspond à un nombre 
    // ce qu'on peut faire maintenant depuis appareil.component c'est créer des méthodes pour chaque appareil.component.ts qui appeleront le service qui appelera la méthode correspondante
    // avec l'index récupéré ==> on le fait : 13. go to appareil.component.ts
    this.appareils[index].status = 'allumé';
};
switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
};



}