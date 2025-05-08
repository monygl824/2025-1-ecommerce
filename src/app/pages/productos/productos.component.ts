import { Component } from '@angular/core';
import { ArracadasInterface } from '../../arracadas';
import { ProductService } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CardsComponent } from "../../componentes/cards/cards.component";

@Component({
  selector: 'app-productos',
  imports: [CurrencyPipe, CardsComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  misArracadas: ArracadasInterface[] = [];

  cart: ArracadasInterface[] = [];

  constructor(public productService: ProductService, public cartService: CartService) { }

  ngOnInit() {
    this.misArracadas = this.productService.getArracadas();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
  }

  addToCart(arracada:ArracadasInterface) {
    this.cartService.addToCart(arracada);
    this.loadCart();
  }
}
