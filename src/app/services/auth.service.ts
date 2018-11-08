import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  loginIn: boolean = false;
  private tk: string;

  constructor(
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.loginIn) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  token() : string {
    return this.tk;
  }

  setToken(tk: string) : void {
    this.tk = tk;
  }
}
