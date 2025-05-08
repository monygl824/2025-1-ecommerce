import { Injectable, signal } from '@angular/core';
import { ArracadasInterface, ArracadasVendidas } from '../arracadas';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private count = signal<number>(0);

  getCounter() {
    return this.count;
  }

  incremento() {
    this.count.update(n => n + 1);
  }

  decremento() {
    this.count.update(n => n - 1);
  }

  getCart(): ArracadasVendidas[] {
    const cartString = localStorage.getItem('cart');
    if (cartString === null) {
      return [];
    }
    const cart = JSON.parse(cartString);
    const length = cart.length;
    this.count.update(n => length);
    return cart as ArracadasVendidas[];
  }

  addToCart(arracada: ArracadasInterface) {
    this.incremento();
    const cart = this.getCart();
    const index = cart.findIndex(item => item.id === arracada.id);
    if (index === -1) {
      const arracadaVenta = { ...arracada, cantidad: 1 }
      cart.push(arracadaVenta);
    } else {
      cart[index].cantidad++
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}
