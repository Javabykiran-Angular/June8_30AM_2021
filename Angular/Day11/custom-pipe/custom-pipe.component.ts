import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat odio quibusdam nostrum inventore porro atque obcaecati consequuntur reiciendis, totam pariatur sequi omnis. Deleniti beatae nulla libero temporibus delectus quidem accusantium.';

  constructor() { }

  ngOnInit() {
    
  }

}
