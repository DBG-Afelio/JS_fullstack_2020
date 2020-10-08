import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesEnum } from 'src/app/enum/roles.enum';
import { StatusEnum } from 'src/app/enum/status.enum';
import { Article } from 'src/app/models/Article/Article.model';
import { User } from 'src/app/models/User/User.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
})
export class ArticleFormComponent implements OnInit, OnChanges {
  @Input()
  public article: Article = null;
  @Output()
  public articleInfoChange: EventEmitter<Article> = new EventEmitter();
  public articleForm: FormGroup;
  @Input()
  public user: User = null;
  public statusList: string[] = Object.values(StatusEnum);

  constructor(private _formBuilder: FormBuilder) {
    this.articleForm = _formBuilder.group({
      title: _formBuilder.control('', [Validators.required]),
      content: _formBuilder.control('', [Validators.required]),
      tags: _formBuilder.control(''),
      status: _formBuilder.control(StatusEnum.IN_PROGRESS),
    });
  }

  ngOnInit(): void {
    // this.article && this.user ? this._initForm(this.article) : null;
  }

  ngOnChanges(): void {
    this.article ? this._initForm(this.article) : null;
    // this._initForm(this.article);
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
      this.articleInfoChange.emit(this.article);
      console.log('EMIT 1-------------- submitted article : ', this.article);
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
