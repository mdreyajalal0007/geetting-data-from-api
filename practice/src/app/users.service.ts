import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) {
  
}

getD(username:string, password:string){
  if (username =="reyaj" && password =="reyaj") {
    localStorage.setItem('username', "9TAB DIGITECH PRIVATE LIMITED-asdfkhafs863498b8bcr32874892738n428479284iuroweiurowrwriwurioueoiwiurniowcqriuoquioruwinqoriwurioucqutiemrtu0934u95784yt347cn3920,3ieo,2,i039x4859n758 5vy9n4h");
    return true;
  }else{
    return false
  }
  
}


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
