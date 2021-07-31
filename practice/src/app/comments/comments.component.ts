import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

 id:any=[];
 data:any=[];
 commensts=Object
 loading=true
  constructor( private rout:ActivatedRoute, private users:UsersService  ) {

  }

  ngOnInit(): void {

    this.id=this.rout.snapshot.params.id;
    this.getData();
    
  }
  getData(){
  
    this.users.getDataC(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data)
      this.loading=false
    })
  }
}
