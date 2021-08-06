import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'practice';
  loading=true

 

  constructor( private users:UsersService ) {
    this.users.getdata().subscribe(data=>{
      this.loading=false
    })
    this.users.getDataC(this).subscribe(data=>{
      this.loading=false
    })
  }
  
}
 