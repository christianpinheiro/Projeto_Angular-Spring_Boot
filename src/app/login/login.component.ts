import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

interface Auth {
  token: string;
  username: string;
  profile: Array<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private router: Router
  ) {}
  site = 'https://protected-fortress-44116.herokuapp.com';

  username = 'admin';
  password = '';

  postLogin(username: string, password: string): Observable<any> {
    return this.http.post(this.site + '/login', {
      login: username,
      password: password,
    });
  }

  login() {
    this.postLogin(this.username, this.password).subscribe(
      (data) => {
        this.storage.setData('auth', data);
        console.log(this.storage.getData('auth'));
        this.router.navigate(['home']);
      },
      (error) => {
        alert('Usuário ou senha inválidos');
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.storage.setData('auth', {});
  }
}
