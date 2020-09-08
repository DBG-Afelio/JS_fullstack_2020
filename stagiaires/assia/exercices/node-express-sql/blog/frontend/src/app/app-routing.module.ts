import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home/home-view/home-view.component';
import { ArticleFormViewComponent } from './views/article-form-view/article-form-view.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail/article-detail.component';
import { SingleArticleViewComponent } from './views/single-article/single-article-view/single-article-view.component';
import { CommentaireformComponent } from './components/commentaire-form/commentaireform/commentaireform.component';


const routes: Routes = [
  { path: "homepage", component: HomeViewComponent },
  { path: "article/ajouter", component: ArticleFormViewComponent },
  { path: "article/modifier/:id", component: ArticleFormViewComponent },
  { path: "article/:id", component: SingleArticleViewComponent },
  { path: "commentaire/ajouter", component: CommentaireformComponent },

  { path: "", redirectTo: "/homepage", pathMatch: "full" },
  { path: "**", redirectTo: "/homepage", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
