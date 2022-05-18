export enum Employeetype{

    dialy=0, permanent, retired
}
export class Employee {

    id: number;
    name: string;
    dateOfJoining: Date;
    salary: number;
    emptype: Employeetype

    constructor(id:number, name: string, dateOfJoining:Date, salary:number, emptype:Employeetype){

        this.id= id;
        this.name = name;
        this.dateOfJoining=dateOfJoining;
        this.salary = salary;
        this.emptype= emptype
    }

}

