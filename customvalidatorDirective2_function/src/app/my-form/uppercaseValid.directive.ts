import { AbstractControl, ValidatorFn } from '@angular/forms';

export function uppercaseValid(): ValidatorFn{

    return(control: AbstractControl):{[key:string]:Boolean}|null=>{

        if(control.value.charAt(0) != control.value.charAt(0).toUpperCase()){
            return {'upperCasevalid': true}
        }
        return null;
    }
}