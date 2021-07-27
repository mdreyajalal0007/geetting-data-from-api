import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class Users1Service {

  constructor(private http:HttpClient) { }


  getD(){
    let url="https://jsonplaceholder.typicode.com/comments?postId=1"
    return this.http.get(url);
  }
}
