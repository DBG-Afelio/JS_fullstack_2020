import { Component, OnInit, Input } from '@angular/core'; // 4.3. importation de OnInit
import { AppareilService } from "./services/appareil.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //4.2. implementation de OnInit ; celle-ci nous oblige à créer une fonction ngOnInit (5.)
  

  
  isAuth = false;

  lastUpdate = new Date();

  appareils: any[]; //4.1. on précise qu'il doit travailler avec une propriété nommée appareils qui correspond à un tableau

constructor(private appareilService: AppareilService){ // 3. on ajoute au contructor en paramètre private le service et on n'oublie pas de l'importer tout au-dessus ; on l'a injecté 
// et là on vient de l'intégrer au component - dans app.component, on pourra utiliser les différents éléments d'AppareilService qu'on ajoutera par la suite. Ce que l'on va faire 
// maintenant le "peupler" - on "peuple" un service - avec des données et des méthodes.
// la première chose que l'on peut faire, c'est "déporter" la variable appareils du component app.component.ts dans le service -> on copie colle simplement -> go to appareil.service.ts
  setTimeout(
    () => {
      this.isAuth = true;
    }, 4000
  );
}

ngOnInit(){ //5. Important : cette fonction sera exécutée au moment de la création du component par angular et après l'exécution du constructor.
// on aura donc accès à notre variable appareil.service; on aura donc juste à faire this.appareils = this.appareilService.appareils; et ainsi la lisaison est faite !
  this.appareils = this.appareilService.appareils;
  //==> le tableau déclaré plus haut (appareils: any[]) est ainsi = au tableau "appareils" dans le service

  // maintenant qu'on a créé un service, ce qui est intéressant, c'est de lui ajouter des fonctionnalités. Par exemple la possibilité d'allumer ou d'éteindre tous les appareils.
  // on va donc ajouter des méthodes dans appareil.service.ts (6.) => go appareil.service.ts

}


// 8. On associe aux méthodes onAllumer et onEteindre les méthodes switchOnAll et switchOffAll qu'on peut récupérer dans AppareilService puisqu'on l'a injecté dans cette classe
// qui est la classe AppComponent
// ==> on a donc bien notre méthode qui appelle notre service et sa structure et ici ses deux méthodes switchOnAll et switchOffAll ! Top.
onAllumer(){
  this.appareilService.switchOnAll();
}
onEteindre(){
  this.appareilService.switchOffAll();
}}