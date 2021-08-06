import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import{Router} from '@angular/router'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  username:string=""
  password:string=""
  
 constructor( private rout:Router, 
    private formbuilder: FormBuilder
    ) 
  { 
    this.form =  new FormGroup({
      username: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required]),
      
    });
  }
  logInUser(){
    if(this.username == "9tab" && this.password == "9tab"){
      
       this.rout.navigate(['/posts'])
    }else{
      alert('Access Denied')
    }
  }
 
ngOnInit(): void {
  } 
  
 }
