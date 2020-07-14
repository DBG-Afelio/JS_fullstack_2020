import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListItemsService } from '../../services/list-items.service';
import { Item } from '../../interfaces/item';
import { SuppliersService } from '../../services/suppliers.service';
import { Supplier } from 'src/app/interfaces/supplier';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  public product: Item;
  public listSuppliers: Supplier[];

  constructor(
    private itemService: ListItemsService,
    private suppliersService: SuppliersService,
    private routeur: Router
  ) { 
    this.product = new Item (
      "",
      "",
      0,
      [{id: 0, nom: "", surcout: 0}],
      4,
      0
    ),
    this.suppliersService.getListSuppliers().subscribe((listeRecue) => {
      this.listSuppliers = listeRecue;
    });
  }

  ngOnInit() {
  }

  createProduct(productToAdd: Item){
    this.itemService.createItem(productToAdd).subscribe(()=>
    this.routeur.navigate([""]) 
    );
  }

  addOption(optionName, optionPrice){
    this.product.addOption(optionName.value, optionPrice.value);
    optionName.value = "";
    optionPrice.value = "";
  }

}
