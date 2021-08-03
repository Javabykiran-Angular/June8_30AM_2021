import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  myjson=<any>{};
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe((param)=>{
      this.myjson.id=+param.get("id");
      this.myjson.fname=param.get("fname");
      this.myjson.status=param.get("status");
    })
  }

}
