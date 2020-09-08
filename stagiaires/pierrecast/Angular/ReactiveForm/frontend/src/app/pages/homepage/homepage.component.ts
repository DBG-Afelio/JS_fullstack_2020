import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms'
import { UserService } from 'src/app/services/userServices/user.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public userForm : FormGroup;
  public nationalities : string[];
  public roles: any[];

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
      roles: [ '', [ validRoles ]],
    });


    // do some stub to grab data
  /*  this.roles = [
      {name: 'Développeur Front', value: "1"},
      {name: 'Développeur Back', value: "2"},
      {name: 'Intégrateur', value: "3"},
      {name: 'Intégrateur', value: "4"},
      {name: 'Intégrateur', value: "5"}
    ];
    
    this.roles = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      bUnits: this.formBuilder.array(
        this.roles.map(() => this.formBuilder.control('')),
        validRoles.multipleCheckboxRequireOne
      )
    });*/
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

/*
export const validRoles: ValidatorFn = (control: AbstractControl) => {
  console.log('control: ', control.value);
  if (!control.value) {
    return {
      'validRoles' : {
        message: 'Un rôle au minimum est requis !'
      }
    }
  } else {
    return null;
  }
}*/


export class validRoles {
  static multipleCheckboxRequireOne(fa: FormArray) {
    let valid = false;

    for (let x = 0; x < fa.length; ++x) {
      if (fa.at(x).value) {
        valid = true;
        break;
      }
    }

    return valid ? null : {
      multipleCheckboxRequireOne: true
    };
  }
}
