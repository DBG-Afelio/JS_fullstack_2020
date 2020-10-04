import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/homePage/home-page/home-page.component';
import { PrivatePageComponent } from './pages/privatePage/private-page/private-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { JwtInterceptor } from './interceptors/JwtInterceptor';
import { ErrorInterceptor } from './interceptors/ErrorInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TagItemComponent } from './components/tag-item/tag-item.component';
import { TagFormComponent } from './components/tag-form/tag-form.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PrivatePageComponent,
    SignInFormComponent,
    SignUpFormComponent,
    AuthenticationComponent,
    ArticleFormComponent,
    ArticleDetailComponent,
    ArticleItemComponent,
    UserItemComponent,
    UserFormComponent,
    TagItemComponent,
    TagFormComponent,
    CommentItemComponent,
    CommentFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
