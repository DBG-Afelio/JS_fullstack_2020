import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginGuard } from './guard/login.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { ArticleAdminComponent } from './pages/article-admin/article-admin.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ArticlesAdminComponent } from './pages/articles-admin/articles-admin.component';
import { AuthorAdminComponent } from './pages/author-admin/author-admin.component';
import { AuthorsAdminComponent } from './pages/authors-admin/authors-admin.component';
import { IntroComponent } from './pages/intro/intro.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { UsersAdminComponent } from './pages/users-admin/users-admin.component';

const routes: Routes = [
  { path: 'admin/user/mes-acces', component: UserAdminComponent, canActivate: [LoginGuard], data: {roles: ['AUTHOR', 'ADMIN', 'USER']}},
  { path: 'admin/user/:id', component: UserAdminComponent },
  { path: 'admin/users', component: UsersAdminComponent },
 
  { path: 'admin/author/mes-articles', component: ArticlesAdminComponent, canActivate: [LoginGuard], data: {roles: ['AUTHOR']}},
  { path: 'admin/author/mon-profil', component: AuthorAdminComponent, canActivate: [LoginGuard], data: {roles: ['AUTHOR']}},
  { path: 'admin/author/:id', component: AuthorAdminComponent },
  { path: 'admin/authors', component: AuthorsAdminComponent },
  { path: 'admin/article/:id', component: ArticleAdminComponent },

  { path: 'admin/articles', component: ArticlesAdminComponent , canActivate: [LoginGuard], data: {roles: ['ADMIN']}},
  { path: 'admin', component: AdminComponent, canActivate: [LoginGuard] , data: {roles: ['AUTHOR', 'ADMIN', 'USER']}},
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: IntroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
