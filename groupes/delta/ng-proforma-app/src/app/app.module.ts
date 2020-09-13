import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MatCommonModule } from "@angular/material/core";
import { MatCardModule, MatCard } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/page/login/login.component';
import { FournisseurComponent } from 'src/page/fournisseur/fournisseur.component';
import { FournisseursComponent } from 'src/page/fournisseurs/fournisseurs.component';
import { MembresComponent } from 'src/page/membres/membres.component';
import { OptionsComponent } from 'src/page/options/options.component';
import { CommandeComponent } from 'src/page/commande/commande.component';
import { NewuserComponent } from 'src/page/newuser/newuser.component';
import { CommandesComponent } from 'src/page/commandes/commandes.component';
import {MatButtonModule} from '@angular/material/button';
import{MembreComponent} from 'src/page/membre/membre.component';
import { TableauComponent } from 'src/component/tableau/tableau.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FournisseurComponent,
    FournisseursComponent,
    MembresComponent,
    OptionsComponent,
    CommandeComponent,
    NewuserComponent,
    CommandesComponent,
    MembreComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatCommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
