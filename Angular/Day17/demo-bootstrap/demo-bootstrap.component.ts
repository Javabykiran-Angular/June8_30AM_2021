import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {

  arrobj=[
    {
      name:"Motorolla",
      price:21000,
      quantity:1
    },
    {
      name:"Google Pixel 6a",
      price:70000,
      quantity:1
    },
    {
      name:"OnePlus",
      price:40000,
      quantity:1
    },
    {
      name:"Realme x7 max",
      price:30000,
      quantity:1
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
