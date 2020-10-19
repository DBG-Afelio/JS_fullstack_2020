import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Author } from 'src/app/models/authorModels/Author';
import { User } from 'src/app/models/userModels/User';
import { AuthService } from 'src/app/services/auth.service';
import { AuthorService } from 'src/app/services/authorServices/author.service';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-author-admin',
  templateUrl: './author-admin.component.html',
  styleUrls: ['./author-admin.component.css']
})
export class AuthorAdminComponent implements OnInit {
  public author: Author;
  public listUsers: User[];
  public authorForm: FormGroup;
  public currentUser: any;
  

  constructor( 
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private authService: AuthService,
    private userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.authorForm = this.formBuilder.group({
      familyname : this.formBuilder.control(null, [ Validators.required ]),
      firstname : this.formBuilder.control(null, [ Validators.required ]),
      email : this.formBuilder.control(null, [ Validators.required , Validators.email]),
      presentation : this.formBuilder.control(null, [ Validators.required ]),
      active : this.formBuilder.control(false),
      user : this.formBuilder.control(null, [ Validators.required ]),
    });

    this.initCurrentUser();
    /* 
      Qui passe ici ?
      Author => mes accès
      Admin => gestion des auteurs
    */

    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      if (this.currentUser.roles === "ADMIN" && params.get('id')) {
        this.initForm(id);
      } else { // mon profil
        this.initForm(null);
      }
    });

  }

  ngOnInit(): void {
    this.initCurrentUser();
  }

  initCurrentUser() {
    this.authService.getCurrentUser().subscribe(
      (user: any) => {
        this.currentUser = user;
      }
    );
  }

  private initForm(authorId: number) {
    if (!authorId) { // author  Mon Profil
      forkJoin([this.userService.getFreeUsers(), this.authorService.getAuthorByUserId(this.currentUser.id)]).subscribe(
        ([listUsers, author]: [User[], Author]) => {
          
          this.listUsers = [author.user, ...listUsers];
          this.author = author;
          this.authorForm.get('familyname').setValue(author.familyname);
          this.authorForm.get('firstname').setValue(author.firstname);
          this.authorForm.get('email').setValue(author.email); 
          this.authorForm.get('presentation').setValue(author.presentation); 
          this.authorForm.get('active').setValue(author.active);
          this.authorForm.get('user').setValue(author.user.id);
          
      }); 
    } else if (authorId !== 0) {  // ADMIN modifie un auteur
      forkJoin([this.userService.getFreeUsers(), this.authorService.getAuthorById(authorId)]).subscribe(
        ([listUsers, author]: [User[], Author]) => {
          this.listUsers = [author.user, ...listUsers];
          this.author = author;
          this.authorForm.get('familyname').setValue(author.familyname);
          this.authorForm.get('firstname').setValue(author.firstname);
          this.authorForm.get('email').setValue(author.email); 
          this.authorForm.get('presentation').setValue(author.presentation); 
          this.authorForm.get('active').setValue(author.active);
          this.authorForm.get('user').setValue(author.user.id);
          
      }); 
    } else { // ADMIN crée un auteur
      this.userService.getFreeUsers().subscribe(list => {
        this.listUsers = list;
      })
    }
  }

  onSubmitForm() {
    const formValue = this.authorForm.value;
    let newAuthor = new Author(
      (this.author) ? this.author.id : 0,
      formValue['familyname'],
      formValue['firstname'],
      formValue['email'],
      formValue['presentation'],
      formValue['active'],
      this.listUsers.find(user => user.id == formValue['user'])
    );
    
    console.log('Données du formulaire : ', newAuthor);

    if (!this.author || this.author?.id === 0) {
      this.authorService.createAuthor(newAuthor).subscribe(() => {
        alert('Author ajouté');
        this.back();
      });
    } else {
      this.authorService.updateAuthor(newAuthor).subscribe(() => {
        alert('Author modifié'); 
        this.back();
      });
    }
  }

  back() {
    if (this.currentUser.roles === 'ADMIN')  {
      this.router.navigateByUrl('/admin/authors');
    } else {
      this.router.navigateByUrl('/admin');
    }
  }
}
