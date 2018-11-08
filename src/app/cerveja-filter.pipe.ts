import { PipeTransform, Pipe } from "@angular/core";
import { Cerveja } from "./models/cerveja";

@Pipe({
  name: 'cervejaFiltro'  
})
export class CervejaFilterPipe implements PipeTransform {
    transform(cervejas: Cerveja[], busca: string): Cerveja[]  {
        if(!cervejas || !busca){
            return cervejas;
        }

        return cervejas.filter(cerveja => 
            cerveja.nome.toLowerCase().indexOf(busca.toLowerCase()) !== -1);
        
    }
}