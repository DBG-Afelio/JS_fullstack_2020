import { Component, OnInit, Input } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaireModel/Commentaire';

@Component({
  selector: 'app-commentaire-item',
  templateUrl: './commentaire-item.component.html',
  styleUrls: ['./commentaire-item.component.css']
})
export class CommentaireItemComponent implements OnInit {
  @Input() commentaireIn: Commentaire;
  constructor() { }

  ngOnInit(): void {
  }

}
