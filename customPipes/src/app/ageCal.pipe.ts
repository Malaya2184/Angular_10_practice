import { PipeTransform,Pipe} from "@angular/core";
@Pipe({name: 'ageCal'})
export class  ageCal implements PipeTransform {
    transform(value: Date, format: string = ''): string {

        let todayInMs = new Date().getTime();
        let inputInMs = value.getTime();
        let difference = todayInMs - inputInMs;
        let oneday = 1000 *  60 * 60 * 24
        // The Math.floor() function returns the largest integer less than or equal to a given number.
        let ageYr = Math.floor(difference/(oneday*365))


        if(format == '' || format == 'y'){
            return Math.floor(difference/(oneday*365))+ "year"
            
        }
        else if(format == '' || format == 'm'){
            return Math.floor(difference/(oneday*30))+ "month"
            
        }
        else if(format == '' || format == 'd'){
            return Math.floor(difference/(oneday))+ " days"
        }
        else{
            return Math.floor(difference/(oneday*365))+ "year"
        }
    }
    
}