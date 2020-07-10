import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import{ ListProductsComponent } from './pages/list-products/list-products.component'

import{ ListSuppliersComponent } from './pages/list-suppliers/list-suppliers.component'
import{ ListTotalOrdersComponent } from './pages/list-total-orders/list-total-orders.component'
import{ ListUsersComponent } from './pages/list-users/list-users.component'
import{ LoginComponent } from './pages/login/login.component'
import{ ProfileUserComponent } from './pages/profile-user/profile-user.component'
import{ SummaryOrderComponent } from './pages/summary-order/summary-order.component'
import { DetailSupplierComponent } from './pages/detail-supplier/detail-supplier.component'

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'summary',
    component: SummaryOrderComponent,
  },
  {
    path: 'profile',
    component: ProfileUserComponent,
  },
  {
    path: 'for-today',
    component: ListTotalOrdersComponent,
  },
  {
    path: 'list-users',
    component: ListUsersComponent,
  },
  {
    path: 'list-suppliers',
    component: ListSuppliersComponent,
  },
  {
    path: 'supplier/:id',
    component: DetailSupplierComponent,
  },
  { path : '**', redirectTo:'', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
