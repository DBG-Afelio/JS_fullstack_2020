import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { RolesEnum } from 'src/app/enum/roles.enum';
import { StatusEnum } from 'src/app/enum/status.enum';
import { Article } from 'src/app/models/Article/Article.model';
import { User } from 'src/app/models/User/User.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
})
export class ArticleFormComponent implements OnInit, OnChanges {
  public article: Article = null;

  public articleForm: FormGroup;

  public user: User = null;
  public statusList: string[] = Object.values(StatusEnum);

  constructor(
    private _activRoute: ActivatedRoute,
    private _artService: ArticlesService,
    private _authService: AuthService,
    private _formBuilder: FormBuilder
  ) {
    this.articleForm = _formBuilder.group({
      title: _formBuilder.control('', [Validators.required]),
      content: _formBuilder.control('', [Validators.required]),
      tags: _formBuilder.control(''),
      status: _formBuilder.control(StatusEnum.IN_PROGRESS),
    });
  }

  ngOnInit(): void {
    this.user = this._authService.currentUser.getValue();
    this._activRoute.paramMap.subscribe((params) => {
      let id = Number(params.get('articleId'));
      if (id) {
        this._artService.getById(id).subscribe((art) => {
          this.article = art;
          this._initForm(this.article)
        });
      }
    });
  }

  ngOnChanges(): void {
    // this.article ? this._initForm(this.article) : null;
  }

  private _initForm(article: Article): void {
    this.articleForm.get('title').setValue(article.title);
    this.articleForm.get('content').setValue(article.content);
    //add tags
    this.articleForm.get('status').setValue(article.status);

    if (this.user.role !== RolesEnum.AUTHOR) {
      //editor
      this.articleForm.get('title').disable();
      this.articleForm.get('content').disable();
      console.log('---------------------form disabled for editor');
      // this.articleForm.disable();
    }
  }

  public submitForm(): void {
    if (this.articleForm.valid) {
      if (!this.article) {
        this.article = this.instantiateNewArticle();
      }
      this.article.title = this.articleForm.value.title;
      this.article.content = this.articleForm.value.content;
      this.article.status = this.articleForm.value.status;
      //tags

      this._artService.saveArticle(this.article).subscribe((a)=> console.log('article recieved :', a))
    }
  }

  public instantiateNewArticle(): Article {
    return new Article(
      0,
      '',
      '',
      this.user,
      null,
      null,
      StatusEnum.IN_PROGRESS,
      null,
      null
    );
  }
}
