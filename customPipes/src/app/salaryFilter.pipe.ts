import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'salaryFilter'})

export class salaryFilter implements PipeTransform {
    transform(obj: any, salGrt: number, salLes: number): any {
        
        if(obj.salary >= salGrt || obj.salary<=salLes){
            return obj
        }
    }
    
}