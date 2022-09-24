import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './models/loginmodel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  configUrl = 'https://atitodoapi.laky.ovh/';

  constructor(private http: HttpClient) {}

  token: string | null = '';

  getdata() {
    this.token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.post<any>(
      this.configUrl + 'api/todo/list',
      JSON.stringify({ tags: [] }),
      httpOptions
    );
  }

  savedata(item: any) {
    this.token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.post<any>(
      this.configUrl + 'api/todo/save',
      JSON.stringify(item),
      httpOptions
    );
  }
  delete(id: number) {
    this.token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.delete<any>(
      this.configUrl + 'api/todo/' + id,
      httpOptions
    );
  }

  login(login: LoginModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<any>(
      this.configUrl + 'api/login/login',
      login,
      httpOptions
    );
  }
}
