import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 8','React Js','Vue Js','Embber Js','JSP'];
  
  arrProd=[
    {
      name:'Samsung',
      Price:20000,
      quantity:1
    },
    {
      name:'Motorolla',
      Price:22000,
      quantity:2
    },
    {
      name:'Apple',
      Price:75000,
      quantity:1
    },
    {
      name:'OnePlus',
      Price:35000,
      quantity:1
    },
    {
      name:'realme',
      Price:29000,
      quantity:1
    }
  ];

  selected:string='';

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log("Event Occur...");
    this.selected=item.name;
  }

  onMouseOut(){
    this.selected='';
  }
}
