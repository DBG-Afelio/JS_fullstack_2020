import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticlesComponent } from './views/list-articles/list-articles.component';
import { DisplayArticleComponent } from './views/display-article/display-article.component';
import { SetArticleComponent } from './views/set-article/set-article.component';


const routes: Routes = [

  {
    path:"",
    component:ListArticlesComponent
  },
  {
    path:"article/:articleId",
    component:DisplayArticleComponent
  },
  {
    path:"setArticle/:articleId",
    component:SetArticleComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
