import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {
result:number;
name:string='';
name1:string='';

  constructor() { }

  ngOnInit() {
  }

  OnAddition(num1,num2){
    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;
  }

  onChange(input){
    console.log("Change Event Occur");
    input.style.background='green';
    input.style.color='white';
  }

  onKeyUp(){
    console.log("On Key up event occur....");
  }
  onKeyDown(){
    console.log("on Key down event..");
  }

  OnApply(){
    console.log("Value is "+this.name1);
  }


}
