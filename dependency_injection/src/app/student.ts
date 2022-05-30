import { Inject, Injectable } from "@angular/core";

export class Adress {

}

export class Subject {

}

@Injectable()
export class Student {

    Adress!: Adress;
    Subject!: Subject;

    constructor(@Inject(Adress) Adress : Adress,@Inject(Subject) Subject : Subject ){

    }
    
    
}
