import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
    id:number;
    username:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe((param)=>{
      this.id=+param.get("id");
      this.username=param.get("username");
    })
  }

}
