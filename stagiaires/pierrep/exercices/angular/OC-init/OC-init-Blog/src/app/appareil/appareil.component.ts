import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from "../services/appareil.service"; //15. import de AppareilService

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

@Input() appareilName: string;
@Input() appareilStatus: string;
@Input() indexOfAppareil: number; //10. On ajoute un nouvel input qui prend un nom très explicite et qui est de type nombre puisque c'est l'index => on doit ensuite
// retourner dans l'html de app.component.html pour utiliser le property binding (11.)

  constructor(private appareilService: AppareilService) { } //14. Injection du service et on l'import également plus haut (15.)

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
}

//13. on crée ici ensuite les méthodes pour chaque AppareilComponent qui apeleront le service qui appelera la méthode correspondante et qui passera l'index qu'ils auront 
// récupéré dans le @Input() de indexOfAppareil ci-dessus. Il faut ensuite ne pas oublier d'au préalable injecter le service (14.) et l'importer (15.)

onSwitchOn(){
  this.appareilService.switchOnOne(this.indexOfAppareil);
}

onSwitchOff(){
  this.appareilService.switchOffOne(this.indexOfAppareil);
}
// après avoir fait cette étape (13.) , il ""suffit"" de les implémenter dans le template html (16.)

}
