import { Directive, Input } from '@angular/core';
import { Validator, FormControl,  NG_VALIDATORS } from "@angular/forms";


@Directive({
    selector: 'input[minValue]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: MinValueDirective, multi: true}
    ]
})
export class MinValueDirective implements Validator {
    
    @Input() minValue: number;
    
    validate(control: FormControl): {[key: string]: any} {
        let value = control.value;
        return (value < this.minValue) ? {"minValue": true} : null;
    }
}