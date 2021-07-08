
export class Myclass{
    private id:number;
    public fname:string;
    protected lname:string;
   

    constructor(myid:number,fname:string,lname:string){
        this.id=myid;
        this.fname=fname;
        this.lname=lname;
    }

  

    Display(){
        console.log(`
        -----------Display Data-----------        
        ID         ::${this.id}
        First Name :: ${this.fname}
        Last Name  :: ${this.lname} 
        `);
    }
}


export function add(a:number,b:number){
    return (a+b);
}

export const pi=3.14;



// var obj=new Myclass(9,"Sumit","Raokhande");
// obj.Display();

