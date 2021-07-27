import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  msg="msg from parent component"

  data:any=[];

  constructor( private user:UsersService) {
    this.user.getdata().subscribe(data=>{
      console.log(data)
      this.data=data
    })
   }
  
   gett(){
     this.user.getdata().subscribe(data=>{
       console.log(data)
     })
   }
  

  ngOnInit(): void {
  }

}
