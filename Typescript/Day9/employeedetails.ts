import {Employee} from './employee';
import {Department} from './department';
import {Address} from './address';

export class EmployeeDetails implements Employee{
    fname: string;
    lname: string;
    salary:number;
    dept:Department;
    addr:Address;

    constructor(f:string,l:string,sal:number,role:string,c:string,a:string,pincode:number){
        this.fname=f;
        this.lname=l;
        this.salary=sal;
        this.dept=new Department(role);
        this.addr=new Address(c,a,pincode);
    }
  
    Display() {
       console.log(`
       =============Employee Details============
        First Name  :: ${this.fname}
        Last Name   :: ${this.lname}
        Salary      :: ${this.salary}
        Role        :: ${this.dept.getRole()}
        Area        :: ${this.addr.getArea()}
        City        :: ${this.addr.getCity()}
        Pincode     :: ${this.addr.getPincode()}
       `);
    }
    
}