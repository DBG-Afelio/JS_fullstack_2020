import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/Article/Article.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
})
export class ArticleFormComponent implements OnInit {
  @Input()
  article: Article = null;
  @Output()
  articleInfoChange: EventEmitter<Article> = new EventEmitter();
  public articleForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.articleForm = _formBuilder.group({
      title: _formBuilder.control('', [Validators.required]),
      content: _formBuilder.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this._initForm(this.article);
  }

  private _initForm(article: Article): void {
    this.articleForm.get('title').setValue(article?.title);
    this.articleForm.get('content').setValue(article?.content);
    //add tags
  }

  public submitForm(): void {
    if (this.articleForm.valid) {
      console.log('article modif submitted');
      this.article.title = this.articleForm.value.title;
      this.article.content = this.articleForm.value.content;

      console.log('updated article : ', this.article);

      this.articleInfoChange.emit(this.article);
    }
  }
}
