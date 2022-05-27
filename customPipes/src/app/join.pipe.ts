import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name:'join',
    pure: false,
}
)

export class joinPipe implements PipeTransform{
    transform(value: any[]) {
        // throw new Error('Method not implemented.');
        //logic
        return(value.join(','));
    }
}
