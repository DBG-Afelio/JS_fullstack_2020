import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home/home-view/home-view.component';
import { ArticleFormComponent } from './components/articleForm/article-form/article-form.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail/article-detail.component';
import { SingleArticleViewComponent } from './views/single-article/single-article-view/single-article-view.component';


const routes: Routes = [
  { path: "homepage", component: HomeViewComponent },
  { path: "article/ajouter", component: ArticleFormComponent },
  { path: "article/:id", component: SingleArticleViewComponent },

  { path: "", redirectTo: "/homepage", pathMatch: "full" },
  { path: "**", redirectTo: "/homepage", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
