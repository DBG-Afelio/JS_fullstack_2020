import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn, AsyncValidator } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public userForm: FormGroup;
  public submitted = false;
  public userName: string = '';

  constructor(formBuilder: FormBuilder) { 
    this.userForm = formBuilder.group({
      userName : new FormControl(this.userName, 
        [Validators.required, Validators.minLength(2)]),
      userFirstName : new FormControl('')
    }, {
      validators : [comparefields]
    })
  }

  ngOnInit() {
    // this.userName = 'Marcel';
    // this.userForm.get('userName').setValue("Greg");
  }

  onSubmitForm() {
    console.log('Soumission du formulaire :', this.userForm);
    this.submitted = true;
  }
}

export const blackList: ValidatorFn = (control: AbstractControl) => {
  if (control.value === 'denis') {
    return {
      'blacklist' : {
        message: 'maaaal'
      }
    }
  } else {
    return null;
  }
}

export const asyncBlackList: AsyncValidatorFn = (control: AbstractControl) => {
  return new Observable((observer) => {
    console.log('async start');
    
    const secrets = ['Assia', 'Haroon'];
      setTimeout (( ) => {
        console.log('async recieve');

        if (secrets.find((mot) => control.value)) {
          console.log('async error emit');

          observer.next( {
            'blacklist' : {
              message: 'maaaal'
            }
          });
        } else {
          observer.next(null);
        }
      },1000 )
        
    }
  );
}


export const comparefields: ValidatorFn = (control: AbstractControl) => {
 
    if ((control as FormGroup).controls.userName.value === (control as FormGroup).controls.userFirstName.value) {
        return {
            'compareName': {
                reason: 'is the same'
            }
        };
    }

    /* Is valid. */
    return null;

  };

// export function comparefields(field1: string, field2: string): ValidatorFn {
//  return (control) => {
//     console.log(control);
//     const field1Control = control.get()
//     /* Is not valid. */
//     if (field1.value !== field2.value) {
//         return {
//             'comparePassword': {
//                 reason: 'not the same'
//             }
//         };
//     }

//     /* Is valid. */
//     return null;

//   };
// }
