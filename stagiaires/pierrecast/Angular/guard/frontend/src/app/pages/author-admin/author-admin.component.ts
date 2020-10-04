import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Author } from 'src/app/models/authorModels/Author';
import { User } from 'src/app/models/userModels/User';
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

  constructor( 
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.authorForm = this.formBuilder.group({
      familyname : this.formBuilder.control(this.author?.familyname, [ Validators.required ]),
      firstname : this.formBuilder.control(this.author?.firstname, [ Validators.required ]),
      email : this.formBuilder.control(this.author?.email, [ Validators.required , Validators.email]),
      presentation : this.formBuilder.control(this.author?.presentation, [ Validators.required ]),
      active : this.formBuilder.control(this.author?.active, [ Validators.required ]),
      user : this.formBuilder.control(this.author?.user, [ Validators.required ]),
    });
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.initForm(id);
      
    });
  }

  ngOnInit() {}

  private initForm(authorId: number) {
    if (authorId !== 0) {
      forkJoin([this.userService.getList(), this.authorService.getAuthorById(authorId)]).subscribe(
        ([listUsers, author]: [User[], Author]) => {
          this.listUsers = listUsers;
          this.author = author;
          this.authorForm.get('familyname').setValue(author.familyname);
          this.authorForm.get('firstname').setValue(author.firstname);
          this.authorForm.get('email').setValue(author.email); 
          this.authorForm.get('presentation').setValue(author.presentation); 
          this.authorForm.get('active').setValue(author.active);
          this.authorForm.get('author').setValue(author.user.id);
      }); 
    } else {
      this.userService.getList().subscribe(list => {
        this.listUsers = list;
      })
    }
  }

  onSubmitForm() {
    const formValue = this.authorForm.value;
    let newAuthor = new Author(
      this.author ? this.author.id : 0,
      formValue['familyname'],
      formValue['firstname'],
      formValue['email'],
      formValue['presentation'],
      formValue['active'],
      this.listUsers.find(author => author.id === parseInt(formValue['user']))
    );
    
    console.log('Données du formulaire : ', this.authorForm.value);
    console.log('newAuthor', newAuthor);

    if (newAuthor.id === 0) {
      this.authorService.createAuthor(newAuthor).subscribe(() => {
        alert('Author ajouté');
      });
     
    } else {
      this.authorService.updateAuthor(newAuthor).subscribe(() => {
        alert('Author modifié');
      });
    }

    this.router.navigateByUrl('/admin/authors');
  }
}
