import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './component/my-component/my-component.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ImageLoaderDirective } from './directives/image-loader.directive';
import { StructuralImageLoaderDirective } from './directives/structural-image-loader.directive';

@NgModule({
   declarations: [
      AppComponent,
      MyComponentComponent,
      SideBarComponent,
      ImageLoaderDirective,
      StructuralImageLoaderDirective
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [
      {provide: LOCALE_ID, useValue: "fr-BE"}
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
