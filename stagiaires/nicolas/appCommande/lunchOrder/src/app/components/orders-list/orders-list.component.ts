import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { OrdersListService } from 'src/app/services/orders-list.service';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { OrderProductComponent } from 'src/app/view/order-product/order-product.component';
import { UsersListService } from 'src/app/services/users-list.service';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  displayedColumns: string[] = ['user', 'date', 'product', 'price', 'isPaid','cancelOrder'];
  dataSource: MatTableDataSource<Order>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() ordersList:Order[];

  @Input() currentUser:User;

  @Output() cancelOrder:EventEmitter<Order> = new EventEmitter();
  @Output() orderNameClick:EventEmitter<Order> = new EventEmitter();



  constructor(private ordersListService:OrdersListService,
              private orderDialog: MatDialog,
              private usersListService:UsersListService) { }

  ngOnInit(): void {
    
   this.loadComponent()
    
  }

  loadComponent(){

     // Assign the data to the data source for the table to render

     this.ordersListService.getMergedOrdersList().subscribe(listFound => {

      this.dataSource = new MatTableDataSource(listFound);

      this.dataSource.sortingDataAccessor = (item, property) => {
        switch(property) {
          case 'user': return item.user.name;
          case 'price': return item.totalPrice;
          case 'product': return item.product.name;

          default: return item[property];
        }
      };

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    })
    

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onCancelOrderButtonClick(orderToCancel:Order){

    this.cancelOrder.emit(orderToCancel);
    this.loadComponent()

  }
  onOrderNameClick(orderClicked:Order){

    const newOrder = new Order(this.currentUser.id,orderClicked.productId,orderClicked.optionsId,false,0,new Date())
    newOrder.setUser(this.currentUser);
    newOrder.setProduct(orderClicked.product);
    newOrder.setOptions(orderClicked.options);
    newOrder.setTotalPrice();


    this.usersListService.setCurrentUserOrder(newOrder);
    console.log(orderClicked);
    this.openOrderDialog(orderClicked);

  }
  onPayOrderButtonCLick(orderToPay:Order){

    let payOrderConfirm = confirm(`confirmer le payement de ${orderToPay.totalPrice} € de la part de ${orderToPay.user.surname} ${orderToPay.user.name} ?`);

    if(payOrderConfirm){

      orderToPay.isPaid = true;
      this.ordersListService.updateOrder(orderToPay).subscribe()


    }

  }
  isNotOutdated(date:Date){
    
    return (this.getFormatedDate(date) === this.getFormatedDate(new Date())) && (date.getHours() < this.ordersListService.maxOrderHour)

  }
  getFormatedDate(date:Date):number{

    return Date.parse(new Date(date.getFullYear(),date.getDay(),date.getMonth()).toString())

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

}
