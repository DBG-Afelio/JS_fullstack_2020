import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { Product } from 'src/app/models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/models/provider';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OrderProductComponent } from '../order-product/order-product.component';
import { Order } from 'src/app/models/order';
import { UsersListService } from 'src/app/services/users-list.service';
import { User } from 'src/app/models/user';
import { OrdersListService } from 'src/app/services/orders-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    provider:Provider;
    productList:Product[];
    filteredProductList:Product[];
    currentUser:User;
    currentTime:Date;

  constructor(private providersListService:ProvidersListService,
              private usersListService:UsersListService,
              private ordersListService:OrdersListService,
              route:ActivatedRoute,
              private orderDialog: MatDialog) { 
              
    route.paramMap.subscribe( param => {

      const routeId = param.get('providerId');

      this.providersListService.getProductsByProviderId(Number(routeId)).subscribe(productsFound => {
        this.productList=productsFound;
        this.filteredProductList = productsFound;
      });

      this.providersListService.getProviderById(Number(routeId)).subscribe(providerFound => {
        this.provider=providerFound;
      });
    })


  }

  ngOnInit(): void {

    
    this.usersListService.getCurrentUser().subscribe(userFound => this.currentUser = userFound)

    this.currentTime = new Date();

  }

  reloadList(){

    this.providersListService.getProductsByProviderId(Number(this.provider.id)).subscribe(productsFound => {
      this.productList=productsFound;
    });

  }
  deleteProduct(deletedProduct:Product){

    this.providersListService.removeProduct(deletedProduct.id).subscribe(_ => this.reloadList())

  }
  orderProduct(newOrder:Order){

    this.usersListService.setCurrentUserOrder(newOrder)
    this.openOrderDialog(newOrder)

  }
  openOrderDialog(newOrder:Order){

    const dialogRef = this.orderDialog.open(OrderProductComponent,{
      data: {
        order: newOrder
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result:", result);

      if(result === 'order'){

        this.ordersListService.addOrder(newOrder).subscribe(_ => console.log('order ok'))

      }else if(result === 'update'){

        this.ordersListService.getUserOrders(newOrder.userId).subscribe(userOrdersFound => {

          const dailyOrders = userOrdersFound.filter(order => this.getFormatedDate(order.date) === this.getFormatedDate(new Date()));

          newOrder.id = dailyOrders[dailyOrders.length-1].id
          this.ordersListService.updateOrder(newOrder).subscribe(_ => console.log('updatedOrder',_))

        });

      }

    });

  }
  getFormatedDate(date:Date):number{
    console.log(new Date(date.getFullYear(),date.getMonth(),date.getDay()));

    return Date.parse(new Date(date.getFullYear(),date.getMonth(),date.getDay()).toString())

  }
  filterProductList(filterWord:string){

    if(filterWord ===''){

      this.filteredProductList = this.productList

    }else{

      this.filteredProductList = this.productList.filter(product => {

        return Object.entries(product).some(element => element.toString().includes(filterWord))

      })

    }
    console.log(this.filteredProductList)

  }
}
