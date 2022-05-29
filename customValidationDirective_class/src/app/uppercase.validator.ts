import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[uppercaseValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: uppercaseValidator,
    multi: true
  }]
})
export class uppercaseValidator implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value.charAt(0) != control.value.charAt(0).toUpperCase() ) {
      return { 'uppercaseValid': true };
    }
    return null;
  }
}