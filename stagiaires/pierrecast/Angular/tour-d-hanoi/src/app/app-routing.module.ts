import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBoardComponent } from './page/view-board/view-board.component';


const routes: Routes = [
  { path:'', component: ViewBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
