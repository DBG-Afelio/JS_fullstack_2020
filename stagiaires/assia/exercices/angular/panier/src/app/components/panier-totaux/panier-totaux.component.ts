import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier-totaux',
  templateUrl: './panier-totaux.component.html',
  styleUrls: ['./panier-totaux.component.css']
})
export class PanierTotauxComponent implements OnInit {
  quantiteTotale: number = 0;
  prixTotal: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getPanier(): { qte: number, prix: number } {
    return {qte: this.quantiteTotale, prix: this.prixTotal};
  }

  setPanier(qte: number, prix: number): void {
    this.quantiteTotale = qte;
    this.prixTotal = prix;
  }

}

