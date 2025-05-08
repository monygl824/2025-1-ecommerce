import { Injectable } from '@angular/core';
import { ArracadasInterface } from '../arracadas';
import { ARRACADASconst } from '../misarracadas';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  arracadas: ArracadasInterface[]=ARRACADASconst;

  constructor() { }

  getArracadas():ArracadasInterface[]{
    return this.arracadas;
  }
}
