import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:5000/api/token/';
   
  constructor(public http: Http) { }

  loginIn(usuario: Usuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }

}
