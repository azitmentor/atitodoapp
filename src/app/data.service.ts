import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './models/loginmodel';
import { Observable } from 'rxjs';
import { SearchParam } from './models/searchparam';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  configUrl = 'https://atitodoapi.laky.ovh/';

  constructor(private http: HttpClient) { }

  token: string | null = '';

  getdata(search: SearchParam): Observable<any> {
    this.token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.post<any>(
      this.configUrl + 'api/todo/list',
      JSON.stringify(search),
      httpOptions
    );
  }

  getitem(id: number): Observable<any> {
    this.token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.get<any>(
      this.configUrl + 'api/todo/get/' + id,
      httpOptions
    );
  }

  savedata(item: any): Observable<any> {
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
  delete(id: number): Observable<any> {
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

  done(id: number): Observable<any> {
    this.token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.post<any>(
      this.configUrl + 'api/todo/done/' + id, "",
      httpOptions
    );
  }

  star(id: number): Observable<any> {
    this.token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.post<any>(
      this.configUrl + 'api/todo/star/' + id, "",
      httpOptions
    );
  }

  today(id: number): Observable<any> {
    this.token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.post<any>(
      this.configUrl + 'api/todo/today/' + id, "",
      httpOptions
    );
  }

  archive(id: number): Observable<any> {
    this.token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.post<any>(
      this.configUrl + 'api/todo/archive/' + id, "",
      httpOptions
    );
  }

  login(login: LoginModel): Observable<any> {
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

  gettaglist(): Observable<string[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };

    return this.http.get<string[]>(
      this.configUrl + 'api/todo/tags',
      httpOptions
    );

  }
}
