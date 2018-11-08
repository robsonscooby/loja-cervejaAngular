import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CervejaService } from '../services/cerveja.service';
import { Cerveja } from '../models/cerveja';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.sass']
})
export class DetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  cerveja: Cerveja;

  constructor(private route: ActivatedRoute, 
    private cervejaService: CervejaService,
    private router: Router) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      async (params: any) => {
        if(!this.id){
          this.cerveja = new Cerveja();
        }else{
          this.id = params['id'];
          this.cerveja = await this.cervejaService.getById(this.id);
          if(this.cerveja == null){
            this.router.navigate(['']);
          }
        }
      
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  salvar(): void {
    if(this.cerveja.id){
      this.cervejaService.update(this.cerveja);
    }
    this.cervejaService.create(this.cerveja);
    this.router.navigate(['home']);
  }

  delete(): void {
    this.cervejaService.delete(this.cerveja.id);
    this.router.navigate(['home']);
  }

}
