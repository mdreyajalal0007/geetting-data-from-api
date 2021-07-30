import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  

  data:any=[];

  constructor( private users:UsersService) {
    this.users.getdata().subscribe(data=>{
      this.data=data
    })
     
   }
  
  ngOnInit(): void {
  }

}
