
export class Address {
  private city:string;
  private area:string;
  private pincode:number;

    constructor(city:string,area:string,pincode:number){
        this.city=city;
        this.area=area;
        this.pincode=pincode;
    }

    getCity():string{
        return (this.city);
    }

    getArea():string{
        return (this.area);
    }

    getPincode():number{
        return (this.pincode);
    }



}