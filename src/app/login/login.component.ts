import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models/usuario';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  fazerLogin(): void{
    this.loginService.loginIn(this.usuario).subscribe(data => {
      if(data['_body']){
        let ret = JSON.parse(data['_body']);
        this.authService.setToken(ret.token);
        this.authService.loginIn = true;
        this.router.navigate(['home']);
      }
    });
  }
}
