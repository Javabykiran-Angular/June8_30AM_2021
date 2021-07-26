import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdetails:string='Your Angular trainer Sumit raokhande';
  num2:number=65.678556;

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
