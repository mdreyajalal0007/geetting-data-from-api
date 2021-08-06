import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import {observable} from 'rxjs'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  
  data:any=[];
  posts=Object
  loading=true
    
  constructor( private users:UsersService , private http:HttpClient ) {
    this.users.getdata().subscribe(data=>{
      this.data=data
      this.loading=false
     })
    }
   
  ngOnInit(): void {
  }
 

}


