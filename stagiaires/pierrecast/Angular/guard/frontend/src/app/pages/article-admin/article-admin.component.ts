import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Article } from 'src/app/models/articleModels/Article';
import { Author } from 'src/app/models/authorModels/Author';
import { ArticleService } from 'src/app/services/articleServices/article.service';
import { AuthorService } from 'src/app/services/authorServices/author.service';

@Component({
  selector: 'app-article-admin',
  templateUrl: './article-admin.component.html',
  styleUrls: ['./article-admin.component.css']
})
export class ArticleAdminComponent implements OnInit {

  public article: Article;
  public listAuthors: Author[];
  public articleForm: FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private articleService: ArticleService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.articleForm = this.formBuilder.group({
      title : this.formBuilder.control('', [ Validators.required ]),
      content : this.formBuilder.control(this.article?.content, [ Validators.required ]),
      date : this.formBuilder.control(this.article?.title, [ Validators.required ]),
      published : this.formBuilder.control(this.article?.published, [ Validators.required ]),
      complete : this.formBuilder.control(this.article?.complete, [ Validators.required ]),
      author : this.formBuilder.control(this.article?.author, [ Validators.required ]),
    });
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.initForm(id);
      
    });
  }

  ngOnInit() {}

  private initForm(articleId: number) {
    if (articleId !== 0) {
      forkJoin([this.authorService.getList(), this.articleService.getArticleById(articleId)]).subscribe(
        ([listAuthors, article]: [Author[], Article]) => {
          this.listAuthors = listAuthors;
          this.article = article;
          this.articleForm.get('title').setValue(article.title);
          this.articleForm.get('content').setValue(article.content);
          this.articleForm.get('date').setValue(article.date); 
          this.articleForm.get('complete').setValue(article.complete); 
          this.articleForm.get('published').setValue(article.published);
          this.articleForm.get('author').setValue(article.author.id);
      }); 
    } else {
      this.authorService.getList().subscribe(list => {
        this.listAuthors = list;
      })
    }
  }

  onSubmitForm() {
    const formValue = this.articleForm.value;
    let newArticle = new Article(
      this.article ? this.article.id : 0,
      formValue['title'],
      formValue['content'],
      formValue['date'],
      formValue['published'],
      formValue['complete'],
      this.listAuthors.find(article => article.id === parseInt(formValue['author']))
    );
    
    console.log('Données du formulaire : ', this.articleForm.value);
    console.log('newArticle', newArticle);

    if (newArticle.id === 0) {
      this.articleService.createArticle(newArticle).subscribe(() => {
        alert('Article ajouté');
      });
     
    } else {
      this.articleService.updateArticle(newArticle).subscribe(() => {
        alert('Article modifié');
      });
    }

    this.router.navigateByUrl('/admin/articles');
  }
}
