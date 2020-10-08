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
    children: [
      {
        path: 'id',
        component: ArticleDetailComponent,
      },
    ],
  },
  {
    path: 'private/:connectedUserId',
    component: PrivatePageComponent,
    canActivate: [LoggedInOnlyGuard],
    children: [
      {
        path: 'articles',
        component: ArticleItemComponent,
        children: [
          {
            path: ':artcileId',
            component: ArticleDetailComponent,
            children: [
              {
                path: 'modifier',
                component: ArticleFormComponent,
              },
            ],
          },
          {
            path: 'add',
            component: ArticleFormComponent,
          },
          {
            path: 'draft',
            component: ArticleItemComponent,
          },
          {
            path: 'pending',
            component: ArticleItemComponent,
          },
          {
            path: 'published',
            component: ArticleItemComponent,
          },
        ],
      },
      {
        path: 'users',
        component: UserItemComponent,
        children: [
          {
            path: ':userId',
            component: UserFormComponent,
            children: [
              {
                path: 'comments/pending',
                component: CommentItemComponent,
              },
              {
                path: 'comments/published',
                component: CommentItemComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'tags',
        component: TagItemComponent,
      },
    ],
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
