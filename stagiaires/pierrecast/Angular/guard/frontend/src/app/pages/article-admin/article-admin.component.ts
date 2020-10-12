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
      content : this.formBuilder.control('', [ Validators.required ]),
      date : this.formBuilder.control('', [ Validators.required ]),
      published : this.formBuilder.control(false, [ Validators.required ]),
      complete : this.formBuilder.control(true, [ Validators.required ]),
      author : this.formBuilder.control(0, [ Validators.required ]),
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
          this.articleForm.get('date').setValue(new Date(article.date)); 
          this.articleForm.get('published').setValue(article.published); 
          this.articleForm.get('complete').setValue(article.complete);
          this.articleForm.get('author').setValue(article.author.familyname+' '+article.author.firstname);
      }); 
    } else {
      this.authorService.getList().subscribe(list => {
        this.listAuthors = list;
      })
    }

    console.log("form",this.articleForm.controls)
  }

  onSubmitForm() {
    const formValue = this.articleForm.value;
    let newArticle = new Article(
      (this.article) ? this.article.id : 0,
      formValue['title'],
      formValue['content'],
      formValue['date'],
      formValue['complete'],
      formValue['published'],
      this.listAuthors.find(author => author.id == formValue['author'])
    );
    
    console.log('Données du formulaire : ', newArticle);

    if (!this.article || this.article?.id === 0) {
      this.articleService.createArticle(newArticle).subscribe(() => {
        alert('article ajouté');
        this.back();
      });
     
    } else {
      this.articleService.updateArticle(newArticle).subscribe(() => {
        alert('article modifié');
        this.back();
      });
    }
  }

  back() {
    this.router.navigateByUrl('/admin/articles');
  }
}
