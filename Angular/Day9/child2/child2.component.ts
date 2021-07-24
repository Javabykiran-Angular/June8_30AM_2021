import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output()  ChildStrEvent=new EventEmitter();

  @Output()  ChildARREvent=new EventEmitter();

  strData:string='Data from Child...';

  arrobj=[
    {
      name:"Sumit",
      id:9
    },
    {
      name:"Kiran",
      id:6
    },
    {
      name:"Spruha",
      id:3
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSend(){
      this.ChildStrEvent.emit(this.strData);
      this.ChildARREvent.emit(this.arrobj);
  }

}
