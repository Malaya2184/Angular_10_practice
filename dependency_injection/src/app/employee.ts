export class Employee {
    id!:number;
    name!:string;
    salary!: number;
    dateofJoin!: Date;
    
    constructor(id:number,name:string,salary: number,dateofJoin: Date){
        
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dateofJoin = dateofJoin;
    }
}
