import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsersService]
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  
  
constructor(private rout:Router, private formbuilder:FormBuilder, private user:UsersService ) 
  { 
    this.form =  new FormGroup({
      username: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required]),
      
    });
  }
  
 
 
ngOnInit(): void {
  } 
  
  logInUser(username:string, password:string){
   const output = this.user.getD(username , password);
   if (output == true) {
     this.rout.navigate(['/posts'])
   }else{
     alert('Acess Denied')
   }
  }

 }
