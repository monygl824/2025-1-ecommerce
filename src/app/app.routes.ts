import { Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
    { path: '', component: CarritoComponent, title: "Mel Accesorios" },
    { path: 'catalogo', component: ProductosComponent, title: "Catálogo" },
    { path: 'cart', component: CarritoComponent, title: "Carrito" },
    { path: 'checkout', component: CheckoutComponent, title: "Datos del comprador" }
];
