import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './components/timer/timer.component';
import { Timer2Component } from './components/timer2/timer2.component';


const routes: Routes = [
  { path:'timer', component:TimerComponent},
  { path:'timer2', component:Timer2Component},
  { path:'', component:TimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
