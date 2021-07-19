import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string='green';
  rating:number=21;

  myjson={
    color:'blue',
    fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    "font-style":'italic'
  }

  constructor() { }

  ngOnInit() {
  }

}
