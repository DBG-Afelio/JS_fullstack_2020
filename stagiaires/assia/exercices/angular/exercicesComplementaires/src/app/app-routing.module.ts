import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewQuantiteComponent } from './pages/view-quantite/view-quantite.component';
import { MaPageComponent } from './pages/ma-page/ma-page.component';


const routes: Routes = [
  {path: '', component: MaPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
