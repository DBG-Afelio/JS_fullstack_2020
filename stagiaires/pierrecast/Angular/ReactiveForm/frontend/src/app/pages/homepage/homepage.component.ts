import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms'
import { UserService } from 'src/app/services/userServices/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public userForm : FormGroup;
  public nationalities : string[];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userService.getNationalities().subscribe((list) => {
      this.nationalities = list;
    });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['Castronovo', [ Validators.required, Validators.maxLength(30) ]],
      lastName: ['Pierre', [ Validators.maxLength(30)]],
      email: ['p_cast@gamil.com', [ Validators.required, Validators.email ]],
      nationality: [1, [ Validators.required ] ],
      sex: [ 'sex0', [ validSex ] ],
      roles: [ ''],
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    /*const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
    );*/
    
    //this.userService.addUser(newUser);
    //this.router.navigate(['/users']);

    console.log('Données du formulaire : ', this.userForm.value);
  }
}

export const validSex: ValidatorFn = (control: AbstractControl) => {
  if (control.value === 'sex0') {
    return {
      'validSex' : {
        message: 'Le genre est requis !'
      }
    }
  } else {
    return null;
  }
}
