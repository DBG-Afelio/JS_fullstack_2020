import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './pages/intro/intro.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './guard/login.guard';
import { LoginInterceptorProvider } from './interceptors/login.interceptors';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ArticlesAdminComponent } from './pages/articles-admin/articles-admin.component';
import { ArticleAdminComponent } from './pages/article-admin/article-admin.component';
import { AuthorsAdminComponent } from './pages/authors-admin/authors-admin.component';
import { AuthorAdminComponent } from './pages/author-admin/author-admin.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { UsersAdminComponent } from './pages/users-admin/users-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { JwtModule } from "@auth0/angular-jwt";
import { MatNativeDateModule } from '@angular/material/core';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AdminComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    ArticlesAdminComponent,
    ArticleAdminComponent,
    AuthorsAdminComponent,
    AuthorAdminComponent,
    UsersAdminComponent,
    UserAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200"],
        disallowedRoutes: [""],
      },
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
  ],
  providers: [LoginGuard, LoginInterceptorProvider, 
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
