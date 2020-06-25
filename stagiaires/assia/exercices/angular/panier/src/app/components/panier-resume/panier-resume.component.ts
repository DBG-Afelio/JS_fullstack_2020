import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier-resume',
  templateUrl: './panier-resume.component.html',
  styleUrls: ['./panier-resume.component.css']
})
export class PanierResumeComponent implements OnInit {
  quantiteTotale: number;
  prixTotal: number;
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

