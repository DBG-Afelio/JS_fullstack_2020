import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panier-totaux',
  templateUrl: './panier-totaux.component.html',
  styleUrls: ['./panier-totaux.component.css']
})
export class PanierTotauxComponent implements OnInit {
  
  @Input() qtteTotale: number;
  @Input() prixTotal: number;


  constructor() { }

  ngOnInit(): void {
  }

}

