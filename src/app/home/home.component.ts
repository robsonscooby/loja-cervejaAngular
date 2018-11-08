import { Component, OnInit } from '@angular/core';
import { CervejaService } from '../services/cerveja.service';
import { Cerveja } from '../models/cerveja';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  cervejas: Array<Cerveja>;
  busca: string;

  constructor(
    private serviceCerveja : CervejaService,
    private router: Router) { }

  async ngOnInit() {
    this.cervejas = await this.serviceCerveja.getAll();
   
  }

  novo(){
    this.router.navigate(['/detalhe']);
  }

}
