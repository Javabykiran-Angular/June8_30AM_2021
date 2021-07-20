import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  flag:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.flag){
      console.log("Click Event is Occur...");
      this.flag=false;
    }    
  }
  onImageclick(){
    console.log("On Image click ");
  }

  onEvent(myevent){
    console.log(myevent);
    console.log("Data is "+myevent.target.value);
  }

  OnGetData(mydata){
    console.log(mydata);
  }

  OnGetData1(myinput1){
    console.log(myinput1)
    myinput1.style.background='red';
    console.log("Data is "+myinput1.value);
  }



}
