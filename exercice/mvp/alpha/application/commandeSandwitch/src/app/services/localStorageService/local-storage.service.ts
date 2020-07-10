import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/orderModel/order';
import { User } from 'src/app/models/userModel/user';
import { UserService } from '../userService/user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from '../productService/product.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {



  //ca ca va degager
  // public getOrderPrice(): number{
  //   let total: number = 0;  
  //   this.getSavedOrder().subscribe((savedOrder) => {
  //     total += this.productService.getProductPrice(savedOrder.productId);
  //     if (savedOrder.optionIds.length > 0) {
  //       savedOrder.optionIds.forEach(optionId => {
  //         total += this.productService.getProductOptionPrice(savedOrder.productId, optionId);
  //       });
  //     }
  //   });
  //   console.log('total : ', total);
  //   return total;
  // }


}
