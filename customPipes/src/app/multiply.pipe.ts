import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name:'multiplyPipe'})

export class multiplyPipe implements PipeTransform {
    transform(firstValue: number, secondValue: number ): number {
       
        return firstValue * secondValue
    }
    
}