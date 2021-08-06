import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { LoginComponent } from './login/login.component'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  

  constructor(private http: HttpClient, private rout: Router) {}


  
  /* getD(){
    window.localStorage.setItem('key','reyaj')
    window.localStorage.getItem('key')
  }*/
  





  getdata() {

    let url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);

  }

  getDataC(id: any) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }

  ngOnInit() {

  }
}
