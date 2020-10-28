import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { TagItemComponent } from './components/tag-item/tag-item.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { LoggedInOnlyGuard } from './guards/logged-in-only.guard';
import { LoggedOutOnlyGuard } from './guards/logged-out-only.guard';
import { HomePageComponent } from './pages/homePage/home-page/home-page.component';
import { PrivatePageComponent } from './pages/privatePage/private-page/private-page.component';

const routes: Routes = [
  {
    path: 'authentication/signin',
    component: AuthenticationComponent,
    canActivate: [LoggedOutOnlyGuard],
  },
  {
    path: 'authentication/signup',
    component: SignUpFormComponent,
    canActivate: [LoggedOutOnlyGuard],
  },
  {
    path: 'home/articles',
    component: HomePageComponent,
  },
  {
    path: 'home/articles/:articleId',
    component: ArticleDetailComponent,
  },
  {
    path: 'private',
    component: PrivatePageComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private',
    component: UserItemComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private/users/:userId',
    component: UserFormComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private/comments/pending',
    component: CommentItemComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private/comments/published',
    component: CommentItemComponent,
    canActivate: [LoggedInOnlyGuard],
  },

  {
    path: 'private/articles/add',
    component: ArticleFormComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private/articles/draft',
    component: ArticleItemComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private/articles/pending',
    component: ArticleItemComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private/articles/published',
    component: ArticleItemComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private/articles/:articleId',
    component: ArticleDetailComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private/articles/:articleId/update',
    component: ArticleFormComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private/articles',
    component: ArticleItemComponent,
    canActivate: [LoggedInOnlyGuard],
  },
  {
    path: 'private/tags',
    component: TagItemComponent,
    canActivate: [LoggedInOnlyGuard],
  },

  {
    path: '',
    redirectTo: '/home/articles',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home/articles',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
