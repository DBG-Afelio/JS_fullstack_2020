import { Component, OnInit } from '@angular/core';
import{ ListItemsService } from '../../services/list-items.service';
import { SuppliersService } from '../../services//suppliers.service';
import { Item } from '../../interfaces/item';
import { Supplier } from '../../interfaces/supplier';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  private listProducts: Item[];
  private listSuppliers: Supplier[];

  private isAuth: boolean = false;
  private isAdmin: boolean = false;

  constructor(
    public listItemsService: ListItemsService,
    public suppliersService: SuppliersService,
    public loginService: LoginService
    ) { 
      this.listItemsService.getListItems().subscribe((listeRecue) => {
        this.listProducts = listeRecue;

      });

      this.suppliersService.getListSuppliers().subscribe((listeRecue) => {
        this.listSuppliers = listeRecue;

      });
    }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
    if(this.loginService.currentUser){
      this.isAuth = true;
      if(this.loginService.currentUser.admin){
        this.isAdmin = true;
      }
    }
  



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
