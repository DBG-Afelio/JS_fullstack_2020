import { Directive, Input, forwardRef } from '@angular/core'
import { NG_VALIDATORS, Validator, AbstractControl, Validators } from '@angular/forms'

@Directive({
  selector: '[min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }]
})
export class MinDirective implements Validator {

  @Input() min: number;

  validate(control: AbstractControl): { [key: string]: any } {

    return Validators.min(this.min)(control)
    // or you can write your own validation e.g.
    // return control.value < this.min ? { min:{ invalid: true, actual: control.value }} : null
  }
}
