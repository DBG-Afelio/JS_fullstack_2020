import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  ArticleDetailComponent
} from './components/article-detail/article-detail.component';
import {
  ArticleFormComponent
} from './components/article-form/article-form.component';
import {
  ArticleItemComponent
} from './components/article-item/article-item.component';
import {
  AuthenticationComponent
} from './components/authentication/authentication.component';
import {
  CommentItemComponent
} from './components/comment-item/comment-item.component';
import {
  SignInFormComponent
} from './components/sign-in-form/sign-in-form.component';
import {
  SignUpFormComponent
} from './components/sign-up-form/sign-up-form.component';
import {
  TagItemComponent
} from './components/tag-item/tag-item.component';
import {
  UserFormComponent
} from './components/user-form/user-form.component';
import {
  UserItemComponent
} from './components/user-item/user-item.component';
import {
  LoggedInOnlyGuard
} from './guards/logged-in-only.guard';
import {
  LoggedOutOnlyGuard
} from './guards/logged-out-only.guard';
import {
  HomePageComponent
} from './pages/homePage/home-page/home-page.component';
import {
  PrivatePageComponent
} from './pages/privatePage/private-page/private-page.component';

const routes: Routes = [{
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
    path: 'home/article',
    component: HomePageComponent,
    children: [{
      path: 'id',
      component: ArticleDetailComponent
    }],
  },
  {
    path: 'private',
    component: PrivatePageComponent,
    canActivate: [LoggedInOnlyGuard],
    children: [{
        path: 'article',
        component: ArticleItemComponent,
        children: [{
            path: ':id',
            component: ArticleDetailComponent,
            children: [{
              path: 'modifier',
              component: ArticleFormComponent
            }],
          },
          {
            path: 'ajouter',
            component: ArticleFormComponent
          },
        ],
      },
      {
        path: 'user',
        component: UserItemComponent,
        children: [{
          path: ':id',
          component: UserFormComponent,
          children: [{
              path: 'modifier',
              component: UserFormComponent,
            },
            {
              path: 'review',
              component: CommentItemComponent
            },
          ],
        }, ],
      },
      {
        path: 'tag',
        component: TagItemComponent
      },
    ],
  },

  {
    path: '',
    redirectTo: '/home/article',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home/article',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}