import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import{ ListProductsComponent } from './pages/list-products/list-products.component'
import{ ListProductsAdminComponent } from './pages/list-products-admin/list-products-admin.component'
import{ ListProvidersComponent } from './pages/list-providers/list-providers.component'
import{ ListTotalOrdersComponent } from './pages/list-total-orders/list-total-orders.component'
import{ ListUsersComponent } from './pages/list-users/list-users.component'
import{ LoginComponent } from './pages/login/login.component'
import{ ProfileUserComponent } from './pages/profile-user/profile-user.component'
import{ SummaryOrderComponent } from './pages/summary-order/summary-order.component'


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
    path: 'summary/:id',
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
    path: 'list-providers',
    component: ListProvidersComponent,
  },
  {
    path: 'list-products-admin',
    component: ListProductsAdminComponent,
  },
  { path : '**', redirectTo:'', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
