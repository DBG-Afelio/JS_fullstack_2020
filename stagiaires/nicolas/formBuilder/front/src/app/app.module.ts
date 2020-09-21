import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetUserComponent } from './views/set-user/set-user.component';
import { UserFormComponent } from './component/user-form/user-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParseDecimalPipe } from './pipes/parse-decimal.pipe';
import { TruncTextPipe } from './pipes/trunc-text.pipe';
import { BlockHeightTransformDirective } from './directives/block-height-transform.directive';
import { LoadingSquareDirective } from './directives/loading-square.directive';
import { LoadingSquareComponent } from './component/loading-square/loading-square.component';
import { UserImageComponent } from './component/user-image/user-image.component';


@NgModule({
  declarations: [
    AppComponent,
    SetUserComponent,
    UserFormComponent,
    ParseDecimalPipe,
    TruncTextPipe,
    BlockHeightTransformDirective,
    LoadingSquareDirective,
    LoadingSquareComponent,
    UserImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
