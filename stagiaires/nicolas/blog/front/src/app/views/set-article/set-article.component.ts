import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article/article';
import { User } from 'src/app/models/user/user';
import { ArticlesService } from 'src/app/services/articles.service';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup, FormControl,FormBuilder, FormArray } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-set-article',
  templateUrl: './set-article.component.html',
  styleUrls: ['./set-article.component.css']
})
export class SetArticleComponent implements OnInit {

  currentUser:User;
  newArticle:Article;
  editMode:string;

  articleForm = this.formBuilder.group({

    id: new FormControl(0),
    titre: new FormControl(''),
    contenu: new FormControl(''),
    auteurId: new FormControl(0),
    date: new FormControl(''),
    publie: new FormControl(false)

  });

  constructor(private articlesService:ArticlesService,
              private usersService:UsersService,
              private currentRoute:ActivatedRoute,
              private formBuilder:FormBuilder,
              private router:Router){

    this.currentRoute.url.subscribe(url => {

      this.editMode = url[1].path === 'new' ? 'create' : 'update';
      this.loadComponent()

    })  

  }

  ngOnInit(): void {
  }

  loadComponent(){
  
  this.usersService.getCurrentUser().subscribe(currentUserFound => {

    this.currentUser = currentUserFound
    this.setNewArticle()

  })
    
  }

  setNewArticle(){

    if(this.editMode === 'create'){

      this.newArticle =  new Article(0,"Titre de l'article","Ajoutez du contenu",this.currentUser.id,new Date(),false)
      this.articleForm.setValue(this.newArticle)


    }else{

      this.currentRoute.params.subscribe(params => {

        this.articlesService.getArticleById(Number(params.articleId)).subscribe(articleFound => {

          this.newArticle = articleFound;
          console.log(articleFound)

          this.articleForm.setValue(this.newArticle)

        })

      })

    }
    

  }

  onCreateButtonClick(){

    this.articleForm.value.publie = true;
    this.newArticle = Object.assign(this.newArticle, this.articleForm.value)
    this.articlesService.createArticle(this.newArticle).subscribe(articleCreated => {

      this.router.navigate([""]);

    });

  }

  onSaveButtonClick(){

    this.articleForm.value.publie = true;
    this.newArticle = Object.assign(this.newArticle, this.articleForm.value)

  }


}
