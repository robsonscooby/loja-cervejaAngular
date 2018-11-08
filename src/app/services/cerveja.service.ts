import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Cerveja } from '../models/cerveja';
import { Headers } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CervejaService {

    private url: string = 'http://localhost:5000/api/cerveja/';
    private tk: string;

  constructor(
    private http: Http,
    private authService: AuthService) { 
      this.tk = authService.token();
    }

  getAll(): Promise<Cerveja[]> {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', `bearer ${this.tk}`);

    let options = new RequestOptions({ headers: header });

    return new Promise((resolve, reject) => {
      this.http.get(this.url, options)
        .subscribe((result: any) => {
          resolve(JSON.parse(result['_body']));
        },
        (error) => {
          reject(error);
        });
    });
  }

  create(cerveja: Cerveja)  {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', `bearer ${this.tk}`);

    let options = new RequestOptions({ headers: header });

    return new Promise((resolve, reject) => {
      this.http.post(this.url, cerveja, options)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  getById(id: number): Promise<Cerveja>  {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', `bearer ${this.tk}`);

    let options = new RequestOptions({ headers: header });

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url+id}`, options)
        .subscribe((result: any) => {
          resolve(JSON.parse(result['_body']));
        },
        (error) => {
          reject(error);
        });
    });
  }

  update(cerveja: Cerveja) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', `bearer ${this.tk}`);

    let options = new RequestOptions({ headers: header });

    return new Promise((resolve, reject) => {
      this.http.put(`${this.url+cerveja.id}`,cerveja ,options)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  delete(id: number) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', `bearer ${this.tk}`);

    let options = new RequestOptions({ headers: header });

    return new Promise((resolve, reject) => {
      this.http.delete(`${this.url+id}`,options)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
  
}
