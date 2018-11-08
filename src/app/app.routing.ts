import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { DetalheComponent } from './detalhe/detalhe.component';
import { AuthService } from './services/auth.service';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: HomeComponent, canActivate: [AuthService] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthService] },
    { path: 'detalhe', component: DetalheComponent, canActivate: [AuthService] },
    { path: 'detalhe/:id', component: DetalheComponent, canActivate: [AuthService] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);