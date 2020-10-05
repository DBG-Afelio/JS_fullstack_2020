import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { User } from 'src/app/models/userModels/User';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  
  public user: User;
  public listRoles: string[] = [ 'ADMIN', 'AUTHOR', 'USER'];
  public userForm: FormGroup;
  
  constructor( 
    private formBuilder: FormBuilder,
    private userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router
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
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.initForm(id);
      
    });
    
  }

  ngOnInit() {}

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
    
    console.log('Données du formulaire : ', this.userForm.value);
    console.log('newUser', newUser);

    if (newUser.id === 0) {
      this.userService.createUser(newUser, formValue['passwordGroup'].password).subscribe(
        () => {alert('User ajouté'),
        (error: Error) => { throwError(error)}
      });
     
    } else {
      this.userService.updateUser(newUser).subscribe(
        () => {alert('User modifié')},
        (error: Error) => { throwError(error)}
      );
    }

    //this.router.navigateByUrl('/admin/users');
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