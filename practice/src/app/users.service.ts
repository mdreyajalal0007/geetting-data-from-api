import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  constructor( private http:HttpClient ) { }

 

  getdata(){

    let url="https://jsonplaceholder.typicode.com/posts";
     return this.http.get(url); 
  } 

  getDataC(id:any){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
  }

}
