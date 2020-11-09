import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export function AreFieldsEqual(
  control1: string, control2: string): ValidatorFn {
    return (formGoup: FormGroup) => {
      const ctrl1 = formGoup.controls[control1] as FormControl;
      const ctrl2 = formGoup.controls[control2] as FormControl;
      if (ctrl1.value !== ctrl2.value){
        ctrl2.setErrors({ match : true});
      } else {
        return null;
      }
    };
}
