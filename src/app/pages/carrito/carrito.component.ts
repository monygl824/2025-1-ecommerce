import { Component } from '@angular/core';
import { ArracadasInterface, ArracadasVendidas } from '../../arracadas';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [CurrencyPipe],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  cartList: ArracadasInterface[] = [];
  cart: ArracadasVendidas[] = [];

  datosCart: ArracadasInterface[] = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.loadCart();
    console.log(this.datosCart);
  }

  loadCart() {
    this.cart = this.cartService.getCart();
  }

  handleClick() {
    console.log('holi')
    this.router.navigateByUrl('checkout')
  }

  sumar(): number {
    let total = 0;
    for (const arracada of this.cart) {
      total = total + arracada.cantidad * arracada.precio;
    }
    return total;
  }
}

//  arracada: number = 0;
//  total: number = 0;

//  sumaArracadas() {
//    this.arracada = this.arracada + 1;
//    this.total = this.total + arracada.precio;
//  }

//  restaArracadas() {
//    if (this.arracada == -1) {
//      this.arracada = 0;
//    } else if (this.arracada >= 1) {
//      this.arracada = this.arracada - 1;
//      this.total = this.total - 150;
//    }
//  }


