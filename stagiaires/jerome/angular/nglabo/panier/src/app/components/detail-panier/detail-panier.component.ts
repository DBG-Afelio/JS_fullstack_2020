import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/model/basket';
import { Command } from 'src/app/model/command';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-detail-panier',
  templateUrl: './detail-panier.component.html',
  styleUrls: ['./detail-panier.component.css']
})
export class DetailPanierComponent implements OnInit {
    listCommand:Command[];
  constructor(private serviceBasket:PanierService) { }

  ngOnInit(): void {
    this.listCommand=this.serviceBasket.getBasket().getListCommand();
    console.log(this.serviceBasket);
  }
  
}
