import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn, FormControl } from '@angular/forms'
import { UserService } from 'src/app/services/userServices/user.service';
import { FormArray } from '@angular/forms';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { LoginValidatorService } from 'src/app/validators/login-validator.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public userForm : FormGroup;
  public nationalities : string[];
  public roles: string[];
  public logins: string[];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loginValidator: LoginValidatorService
  ) {
    this.userService.getNationalities().subscribe((list) => {
      this.nationalities = list;
    });

    this.userService.getRoles().subscribe((list) => {
      this.roles = list;console.log(list);
      this.rolesGroup.setValue(list)
    });

    this.userService.getLogins().subscribe((list) => {
      this.logins = list;
    });
  }

  ngOnInit() {
    this.initForm();
  }

  addRolesFormGroup(): FormGroup {
    return this.formBuilder.group({
      role: ['', [ Validators.required ]]
    })
  }

  get rolesGroup() {
    return this.userForm.get('rolesGroup') as FormArray;
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['Castronovo', [ Validators.required, Validators.maxLength(30) ]],
      lastName: ['Pierre', [ Validators.maxLength(30)]],
      email: ['p_cast@gmail.com', [ Validators.required, Validators.email ]],
      nationality: [2, [ Validators.required ] ],
      sex: [ 'sex0', [ validSex ] ],
      rolesGroup: this.formBuilder.array([
        this.addRolesFormGroup()
      ]),
      date_naissance: ['1990-01-01', [ validDate ]],
      login: ['pierre-cast', [ Validators.required ], [this.loginValidator.validate] ],
      passwordGroup: this.formBuilder.group({
        password: this.formBuilder.control('motdepasse'),
        repeat: this.formBuilder.control('motdepasse')
      }, {
        validators : [ Validators.required, comparePassword('password', 'repeat')]
      }),
      date_debut: ['2016-01-12', [  validDateFormat ]],
      date_fin: ['2025-01-02', [  validDateFormat ]],
    }, {
      validators : [compareDatefields('date_debut', 'date_fin'), ]
    });

  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    /*const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
    );*/
    
    //this.userService.addUser(newUser);

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
export function hasRole(fa: FormArray) {
  let valid = false;
  for (let x = 0; x < fa.length-1; ++x) {
    if (fa.at(x).value) {
      valid = true;
      break;
    }
  }
}*/

// export const validRoles: ValidatorFn = (control: AbstractControl) => {
/*export class validRoles {
  static multipleCheckboxRequireOne(fa: FormArray) {
    let valid = false;
    if (hasRole(fa) || (!(hasRole(fa)) && fa.at(fa.length-1).value)) {
      valid = true;
    }
 
    return valid ? null : {
      multipleCheckboxRequireOne: true
    };
  }
}*/


export const validDate: ValidatorFn = (control: AbstractControl) => {
  const date = new Date(control.value);
  const today = new Date();
  let ageTime = today.getTime() - new Date(date).getTime();
  let age = ageTime / 1000 / 60 / 60 / 24 / 365;
  
  if (isValidDate(date) && age >= 18 ) {
      return null;
  } else if (!isValidDate(date)) {
    return {
      'validDateFormat' : {
        message: 'La date n\'a pas le bon format'
      }
    }
  } else {
    return {
      'validAge' : {
        message: 'L\'âge minimum est de 18 ans'
      }
    }
  }
}

export const validDateFormat: ValidatorFn = (control: AbstractControl) => {
  const date = new Date(control.value);
  
  if (isValidDate(date) ) {
      return null;
  } else {
    return {
      'validDateFormat' : {
        message: 'La date n\'a pas le bon format'
      }
    }
  }
}

export function isValidDate(date: Date)  {
    const today = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    lastDays[1] = (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? 29 : 28;

    return month >= 0 && month <= 11 && day >= 0 && day <= lastDays[month] && date.getTime() < today.getTime();
}

export function compareDatefields(date1: string, date2: string): ValidatorFn {
  
  return (control) => {
     const date1Control = control.get(date1) as FormControl;
     const date2Control = control.get(date2) as FormControl;

     if (new Date(date1Control.value) >= new Date(date2Control.value)) {
         return {
             'compareDatefields': {
                 message: 'La chronologie des dates n\'est pas correcte'
             }
         };
     }
 
     // Is valid. 
     return null;
 
   };
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
 
export const isUsed: AsyncValidatorFn = (control: AbstractControl) => {
  return of(control).pipe(
    map((control) => {
      console.log('logins',this.logins);
       if (this.logins.includes((control as FormControl).value)) {
          console.log('async error emit');
          return {
            'isUsed' : {
              message: 'Ce pseudo est déja utilisé !'
            }
          };
        } else {
          console.log('no errors')
          return null;
        }
    })
  );
  
  
  
  /*if (this.logins && this.logins.includes(control.value)) {
    return {
      'isUsed' : {
        message: 'Ce pseudo est déja utilisé !'
      }
    }
  } else {
    return null;
  }*/
}
