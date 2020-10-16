import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/userModels/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  public hide: boolean = true;
  public user: User;
  public listRoles: string[] = [ 'ADMIN', 'AUTHOR', 'USER'];
  public userForm: FormGroup;
  public currentUser: any;

  constructor( 
    private formBuilder: FormBuilder,
    private userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router, 
    public authService: AuthService,
  ) {
    this.userForm = this.formBuilder.group({
      username : this.formBuilder.control(this.user?.username, [ Validators.required ]),
      email : this.formBuilder.control(this.user?.email, [ Validators.required, Validators.email ]),
      roles : this.formBuilder.control(this.user?.roles, [ Validators.required ]),
      passwordGroup: this.formBuilder.group({
        password: this.formBuilder.control(''),
        repeat: this.formBuilder.control('')
      }),
    });
    
    this.initCurrentUser();
    /* 
      Qui passe ici ?
      User ou Admin ou Author => mes acces
      Admin => gestion des users
    */
   
      this.activatedRoute.paramMap.subscribe(params => {  // gestion des users
        
        let id = Number(params.get('id'));
        if (this.currentUser.roles === "ADMIN" && params.get('id')) {
          this.initForm(id);
        } else { 
          // mes acces
          this.initForm(this.currentUser.id);
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

  private initForm(userId: number) {
    if (userId !== 0) {
      this.userService.getUserById(userId).subscribe(user => {
        this.userForm.get('username').setValue(user.username);
          this.userForm.get('email').setValue(user.email); 
          this.userForm.get('roles').setValue(user.roles);
          this.user = user;
      })
    } 
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    let newUser = new User(
      this.user ? this.user.id : 0,
      formValue['username'],
      formValue['email'],
      formValue['roles'],
     );

    if (formValue['passwordGroup'].password.length !== 0) {
      newUser.password = formValue['passwordGroup'].password;
    } 
    
    if (!this.user || this.user?.id === 0) {
      this.userService.createUser(newUser).subscribe(() => {
        alert('User ajouté');
        this.back();
      });
     
    } else {
      this.userService.updateUser(newUser).subscribe(() => {
        alert('User modifié');
        this.back();
      });
    }
  }

  back() {
    if (this.currentUser.roles === 'ADMIN')  {
      this.router.navigateByUrl('/admin/users');
    } else {
      this.router.navigateByUrl('/admin');
    }
  }
}

export function comparePassword(field1: string, field2: string): ValidatorFn {
  return (control) => {
    const field1Control = control.get(field1) as FormControl;
    const field2Control = control.get(field2) as FormControl;
       
    // Is not valid. 
    if (!field1Control.value || !field2Control.value) {
      return {
        'required': {
            message: 'Le mot de passe est requis'
        }
      };
    }

    if (field1Control.value !== field2Control.value) {
      return {
          'comparePassword': {
              message: 'Les mots de passe sont différents'
          }
      };
    }
    
    // Is valid.
    return null;
 
   };
 }