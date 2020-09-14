import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

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

export function compareGenericfields(field1: string, field2: string): ValidatorFn {
    return (control) => {
       const field1Control = control.get(field1) as FormControl;
       const field2Control = control.get(field2) as FormControl;
       /* Is not valid. */
       if (field1Control.value !== field2Control.value) {
           return {
               'compareFields': {
                   reason: 'not the same',
                   field1 : field1,
                   field2 : field2,
               }
           };
       }
   
       /* Is valid. */
       return null;
   
     };
   }