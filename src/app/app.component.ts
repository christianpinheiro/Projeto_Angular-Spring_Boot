import { Component } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

interface Auth {
  token: string;
  username: string;
  profile: Array<string>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mlw Store';

  constructor(private http: HttpClient) {}
  site = 'https://protected-fortress-44116.herokuapp.com';

  username = 'admin';
  password = '';
  auth = {};
  
  isEmpty(obj: any) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop) || obj.prop != "" || obj.prop != undefined)
           return false;
    }
    return true;
  }

  postLogin2(username: string, password: string): Observable<any>{
    return this.http.post(this.site+'/login', {
      login: username,
      password: password,
    });
  }

    postLogin() {
    this.http.post<Auth>(this.site + '/login', {
        login: this.login,
        password: this.password,
      })
      .subscribe((data) => {
        this.auth = data;
      });
      console.log(this.auth);
  }

  login(){
    this.postLogin2(this.username, this.password).subscribe((data)=>{
      this.auth = data;
      console.log(this.auth);
    }, (error)=>{
      alert("Usuário ou senha inválidos");
      console.log(error);
    });
  }
  postLogout() {
    this.auth = {};
  }
}
