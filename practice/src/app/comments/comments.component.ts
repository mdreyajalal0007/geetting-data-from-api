import { Component, OnInit, } from '@angular/core';
import {Users1Service} from '../users1.service'
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  data1:any=[];

  
  constructor(private users1:Users1Service) {
    this.users1.getD().subscribe(data=>{
      console.log(data)
      this.data1=data
    })
  }

  ngOnInit(): void {
  }

}
