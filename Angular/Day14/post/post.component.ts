import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id:number;
  title:string='';
  body:string='';
  isHidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit() {
    this.service.getPosts()
    .subscribe((response)=>{
      console.log(response);
      this.posts=(<any>response)
    },(error)=>{
      alert("Error is Occured!!!!")
    })
  }

  onSubmit(mytitle,mybody){

    let jsonobj={
      title:mytitle,
      body:mybody
    }

    this.service.SendPost(jsonobj)
    .subscribe((response)=>{
      console.log(response);
    })

  }

  OnEdit(item){
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  OnFinalSubmit(){
    let jsonobj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(jsonobj)
    .subscribe((response)=>{
      console.log(response);
    })

  }

  OnDelete(id){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }

}
