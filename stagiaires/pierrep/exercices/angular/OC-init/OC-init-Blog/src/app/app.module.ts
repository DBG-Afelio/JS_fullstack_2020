import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';

import { AppareilService} from "./services/appareil.service"; // 1. ajout du service AppareilService

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ // 2. on ajoute ici le service dans providers; c'est ici en fait qu'on injecte dans app.module - à partir d'ici, pour utiliser cette instance du service dans un component
  // il suffit, dans l'instanciation du constructeur, de créer une variable private appareilService -> direction le constructor d'app.component.ts
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
