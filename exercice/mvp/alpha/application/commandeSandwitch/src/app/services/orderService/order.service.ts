import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { IOrderDto } from './../../models/orderModel/iorder-dto';
import { Order } from 'src/app/models/orderModel/order';
import { User } from 'src/app/models/userModel/user';
import { UserService } from '../userService/user.service';
import { ProductService } from '../productService/product.service';
import { FullOrder } from 'src/app/models/fullOrderModel/fullOrder';
import { Product } from 'src/app/models/productModel/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public currentUser: User = null;
  private userFullOrder: BehaviorSubject<FullOrder> = new BehaviorSubject(null);
  public orderUrl: string = 'http://localhost:3000/commandes';
  private creditMaxAllowed: number = 10;
  public TODAY = new Date();
  public TODAY_str: string = this.TODAY.getDate().toString() + this.TODAY.getMonth().toString() + this.TODAY.getFullYear().toString();

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private productService: ProductService,
  ) { 
      this.userService.getCurrentUser().subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.updateFullOrder(currentUser);
    });
   }

  private updateFullOrder(user: User): void{    
    let found: FullOrder = null;
    if (this.currentUser) { //utilsateur connected
      const foundInLocalStorage: FullOrder = this.findInLocalStorage(user); //je cherche d'abord en local
      if (foundInLocalStorage) { //trouved en local
        // foundInLocalStorage.setConfirmStatus(false);
        found = foundInLocalStorage;
        console.log(found);
      } else { //pas trouved en local
        this.findTodayServerOrder(user).subscribe((order) => {
          if (order) { //trouved sur Server
            this.productService.getProductById(order.productId).subscribe((productFound) => {
              found = new FullOrder(user, order, productFound, true);
            });
          } else { // pas trouved ni en local ni sur server
            found = null;
          }
        });
      }
    } else { //aucun utilisateur connected
      found = null;
    }
    this.setFullOrder(found);
  }
  
  public getList(): Observable<Order[]> {
    return this.http.get<IOrderDto[]>(this.orderUrl)
      .pipe(
        map((orderDtoList) => {
          return orderDtoList.map((orderDto) => Order.fromDto(orderDto))
        }));
  }
  public getServerOrderById(id: number): Observable<Order> {
    return this.http.get<IOrderDto>(`${this.orderUrl}/${id}`)
      .pipe(
        map((orderDto) => Order.fromDto(orderDto)));
  }
  public findTodayServerOrder(user: User): Observable<Order> {
    return this.getList()
      .pipe(
        map((orders) => orders.find(order => {
          const ORDER_DATE_str: string = order.date.getDate().toString() + order.date.getMonth().toString() + order.date.getFullYear().toString();
          return order.userId === user.id && ORDER_DATE_str === this.TODAY_str;
        })));
  }
  public getAllFullOrders(): Observable<FullOrder[]> {
    return forkJoin(
      this.getList(),
      this.userService.getList(),
      this.productService.getList())
      .pipe(
        map(([orders, users, products]) => {
          return orders.map(order => {
            const user = users.find(user => user.id === order.userId);
            const prod = products.find(produit => produit.id === order.productId);
            return new FullOrder(user, order, prod, true);
          })
        }));
  }


  

/*----------------------SETTER GETTER FullOrder ----------------------------------*/
  private setFullOrder(fullOrder: FullOrder): void {
    console.log('setFullOrder method======================////');
    if (fullOrder) {
      this.userFullOrder.next(fullOrder);
      console.log('full yes');
    } else {
      this.userFullOrder.next(null); 
      console.log('no full');
    }
  }

  public getFullOrder(): Observable<FullOrder>{
    return this.userFullOrder.asObservable();
  }

/*------local storage related & userOrderLocal variable----*/
  public addInLocalStorage(fullOrder: FullOrder): void {
    let key: string = fullOrder.getUser().id.toString() + '_' + this.TODAY_str;
    localStorage.setItem(key, JSON.stringify(fullOrder));
    this.updateFullOrder(this.currentUser);
  }
  public findInLocalStorage(user:User): FullOrder{
    let foundOrder: FullOrder = null;
    if (user && localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        if (key.startsWith(user.id.toString())) {
          if (key === user.id.toString() + '_' + this.TODAY_str) { //cle qui correspond a la commande du jour
            foundOrder = JSON.parse(localStorage.getItem(key));
            
          } else { // cle qui correspond a une commande anterieure pour ce currentUser/ n'a pas lieu de rester stocker en local
            localStorage.removeItem(key);
           
          }
        }
      }
    } else {
      console.log('User deconnected ou pas de commande locale');
    }
      return foundOrder;
  }
 
  public removeFromLocalStorage(): void {
    const removeItemKey: string = this.currentUser.id.toLocaleString() + '_' + this.TODAY_str;
    localStorage.removeItem(removeItemKey);
    this.updateFullOrder(this.currentUser);
  }
  // public emptyLocalStorage(): void{
  //   localStorage.clear();
  // }


  /*-----------------------JSON Server/commandes-----------------------------*/
  // public updateServerOrder(payload: Order): Observable<IOrderDto> { //dans notre appli en l'etat, ne sera pas utilised
  //   this.setServerOrder(payload);
  //   return this.http.put<IOrderDto>(`${environment.baseUrl}/commandes/${payload.id}`, payload.toDto())
  //     .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }

  public deleteOrderFromServer(payload: Order): void {
    console.log('********DELETE REQUEST SERVER **********');
    this.http.delete<IOrderDto>(`${environment.baseUrl}/commandes/${payload.id}`).subscribe({
      error: error => console.error('Erreur DELETE order', error)
    });
    this.updateFullOrder(this.currentUser);
  }

  public addOrderIntoServer(fullPayload: FullOrder): void {
    this.http.post<IOrderDto>(`${this.orderUrl}`, fullPayload.getOrder().toDto()).subscribe({
      next: returnedOrder => {
        this.removeFromLocalStorage();
        console.log('commande retiree du Local storage');
        // fullPayload.setConfirmStatus(true);
        // fullPayload.setOrder(Order.fromDto(returnedOrder));
        this.updateFullOrder(this.currentUser);
      },
      error: error => console.error('Erreur POST new order', error)
    });
  }
  /*--------------------------------------------------------------------------*/


  /*-------------------------------*/
  public getCreditMax(): number{
    return this.creditMaxAllowed;
  }
  public setCreditMax(newCreditMax: number): void{
    this.creditMaxAllowed = newCreditMax;
  }
}
