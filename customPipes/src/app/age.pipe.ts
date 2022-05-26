import { Pipe, PipeTransform } from "@angular/core";

import * as moment from 'moment';

@Pipe({name: 'agePipe'})

export class agePipe implements PipeTransform{
    transform(value: Date) {

        let today = moment();
        let birthdate = moment(value);
        let years = today.diff(birthdate, 'years');
        console.log(years);
        
        let html:string = years + " yr ";

        html += today.subtract(years, 'years').diff(birthdate, 'months') + " mo";

        return html;
        
    }   
    
}