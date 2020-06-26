import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

 @Input() listearticles: any[];
 @Output() smiley: EventEmitter < string > = new EventEmitter(); //event emitter : appel grâce au decorator @Output ; on nomme la propriété qui correspond 
 // et on précisera son type entre chevrons ; on ajoute un new EventEmitter()
 // plus bas on peut utiliser la propriété smiley définie ici avec .emit('textàémettre')
 // on a donc jusqu'ici quelque chose qui est émis et qui correspond à un string (ici : coucou)
 // la question est : comment associer cette émission à un component ?
 // ==> dans l'html du composant app.component, dans la balise du composant émetteur (donc ici app-post-list-component) on met le nom de l'émetteur (smiley)
 // et on l'associe à une fonction définie dans le ts du parent (app.component) que l'on nomme comme on veut mais qui devra prendre comme paramètre dans le template
 // $event ==> on peut ainsi MODIFIER UNE PROPRIETE D'UN COMPONENT PARENT (ici app.component) DEPUIS UN EVENEMENT D'UN COMPONENT ENFANT
 // ET, si le component parent a défini un lien input vers un autre enfant (ici pictures.component) alors on établi en fait une communication
 // entre deux component enfants en passant par le parent !

// ESSAI POUR FAIRE COMMUNIQUER POST-LIST AVEC PICTURES VIA APP : concrètement, changer la photo de la balise <img> dans le component picture

@Output() urlPic: EventEmitter < string > = new EventEmitter();

 listArticlesIteration(){
   this.listearticles.forEach(element => {
     console.log(element);
   })
 }

disCheck(article){
  if(article.age < 6){
    return false;
  }
};

onClicked() {
  
  this.smiley.emit('coucou');
    
  };

changePicture(){
 this.urlPic.emit('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5insP9z0jAuveHqtPg11v5fjvvgCQqfspaQ&usqp=CAU');
}

  lastUpdate = new Date();


  constructor() { 
    
  }

  ngOnInit(): void {
  }




getColor(article){

  if(article.sexe === 'Male')
  {  
    return 'blue';}
    else{
      return 'pink';
    }


  
};

giveDate(){

}


}
