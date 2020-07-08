import { Component, OnInit } from '@angular/core';
import{ ListItemsService } from '../../services/list-items.service';
import { SuppliersService } from '../../services//suppliers.service';
import { Item } from '../../interfaces/item';
import { Supplier } from '../../interfaces/supplier';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  private listProducts: Item[];
  private listSuppliers: Supplier[];

  constructor(
    public listItemsService: ListItemsService,
    public suppliersService: SuppliersService
    ) { 
      this.listItemsService.getListItems().subscribe((listeRecue) => {
        this.listProducts = listeRecue;
        console.log(this.listProducts);
      });

      this.suppliersService.getListSuppliers().subscribe((listeRecue) => {
        this.listSuppliers = listeRecue;
        console.log(this.listProducts);
      });
    }

  ngOnInit() {

  }

  getListProducts(){
    return this.listProducts;
  }

  getListSuppliers(){
    return this.listSuppliers;
  }

  getListProductsFiltered(idSupplier: number){
    return this.listProducts.filter(element => element.fourn_id == idSupplier)
  }
}
