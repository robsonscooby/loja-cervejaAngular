export class Cerveja {
    id?: number;
    nome: string = null;
    marca: string = null;
    tipo: string = null;
    codigo: number = null;
    url: string = null;

    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key)) { this[key] = values[key]; }
        });
    }
}