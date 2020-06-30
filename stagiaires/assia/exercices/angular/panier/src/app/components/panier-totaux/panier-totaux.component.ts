import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panier-totaux',
  templateUrl: './panier-totaux.component.html',
  styleUrls: ['./panier-totaux.component.css']
})
export class PanierTotauxComponent implements OnInit {
  
  @Input() totaux : { qtte: number, prix: number } 

  constructor() { }

  ngOnInit(): void {
  }

}

