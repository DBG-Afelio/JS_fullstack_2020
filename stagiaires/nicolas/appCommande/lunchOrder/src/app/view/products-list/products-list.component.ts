import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { Product } from 'src/app/models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/models/provider';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OrderProductComponent } from '../order-product/order-product.component';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    provider:Provider;
    productList:Product[];
    productOptions = new FormControl();
    newOrder:Order;

  constructor(private providersListService:ProvidersListService,
              route:ActivatedRoute,
              private orderDialog: MatDialog) { 

    route.paramMap.subscribe( param => {

      const routeId = param.get('providerId');

      this.providersListService.getProductsByProviderId(Number(routeId)).subscribe(productsFound => {
        this.productList=productsFound;
      });

      this.providersListService.getProviderById(Number(routeId)).subscribe(providerFound => {
        this.provider=providerFound;
      });
    })


  }

  ngOnInit(): void {

    this.newOrder = new Order(1,0,[],false,0,new Date());

  }

  openOrderDialog(currentProduct:Product){

    this.newOrder.id = currentProduct.id

    const dialogRef = this.orderDialog.open(OrderProductComponent,{
      data: {
        product: currentProduct
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
  reloadList(){

    this.providersListService.getProductsList().subscribe(listFound => this.productList = listFound)

  }
  onDeleteProductClick(productid:number){
    this.providersListService.removeProduct(productid).subscribe(_ => this.reloadList())
  }

}
