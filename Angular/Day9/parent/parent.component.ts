import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strData:string='Parent Data...';

  numberData:number; 

  myjson={
    fname:"Sumit",
    id:9
  }

  strdatarecive:string='';
  ArrDataReceive=[];

  constructor() { }

  ngOnInit() {
  }

  OnSend(){
    this.numberData=8;

  }

}
