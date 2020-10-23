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
import { JwtModule } from "@auth0/angular-jwt";

import { TruncatePipe } from './pipes/truncate.pipe';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

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
    TruncatePipe,
    ArticlePageComponent
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
    NgbPaginationModule, NgbAlertModule, NgbModule, 
  ],
  providers: [LoginGuard, LoginInterceptorProvider, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
