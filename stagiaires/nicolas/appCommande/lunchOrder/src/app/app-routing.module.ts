import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersListComponent } from './view/providers-list/providers-list.component';
import { ProductsListComponent } from './view/products-list/products-list.component';
import { OrderProductComponent } from './view/order-product/order-product.component';
import { OrdersHistoryComponent } from './view/orders-history/orders-history.component';
import { ModifyProductComponent } from './view/modify-product/modify-product.component';
import { ModifyProviderComponent } from './view/modify-provider/modify-provider.component';
import { DailyOrdersComponent } from './view/daily-orders/daily-orders.component';
import { LoginComponent } from './view/login/login.component';
import { UserDetailsComponent } from './view/user-details/user-details.component';
import { UsersListComponent } from './view/users-list/users-list.component';


const routes: Routes = [
  {
    path:"",
    component:ProvidersListComponent
  },
  {
    path:"productList",
    component:ProductsListComponent
  },
  {
    path:"orderProduct/:productId",
    component:OrderProductComponent
  },
  {
    path:"ordersHistory",
    component: OrdersHistoryComponent
  },
  {
    path:"modifyProduct/:productId",
    component: ModifyProductComponent
  },
  {
    path:"modifyProvider/:providerId",
    component: ModifyProviderComponent
  },
  {
    path:"dailyOrder",
    component: DailyOrdersComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"userDetails/:userId",
    component: UserDetailsComponent
  },
  {
    path:"usersList",
    component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
