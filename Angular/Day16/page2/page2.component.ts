import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  myid:number;
  constructor(private routes:ActivatedRoute) { }


  ngOnInit() {
    this.routes.paramMap
    .subscribe((param)=>{
      console.log(param.get("id"));
     this.myid=+param.get("id");
    })

  }

}
