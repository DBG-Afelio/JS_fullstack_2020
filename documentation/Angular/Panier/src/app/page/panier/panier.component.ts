import { MagasinService } from './../../service/magasin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private magasinService: MagasinService) {
    console.log(this.magasinService.getMagasin());
  }

  ngOnInit() {

  }

}
