import { Routes } from '@angular/router';
import { ItemListComponent } from '../components/item-list/item-list.component';
import { CartComponent } from '../components/cart/cart.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
];
