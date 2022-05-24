export class Person {
    firstName:string
    lastName:string
    gender: string
    qualification:string
    email: string;

    constructor(firstName:string, lastName:string, gender: string, qualification:string, email:string){
        this.firstName = firstName
        this.lastName = lastName
        this.gender=gender
        this.qualification = qualification
        this.email = email
    }
}
