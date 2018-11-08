import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';  
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { CervejaService } from './services/cerveja.service';
import { DetalheComponent } from './detalhe/detalhe.component';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { CervejaFilterPipe } from './cerveja-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DetalheComponent,
    CervejaFilterPipe
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  
  providers: [CervejaService, LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
