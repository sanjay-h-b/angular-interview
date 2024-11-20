import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  cartUpdated = new Subject<void>();

  addItem(item: CartItem) {
    const existingItem = this.cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    this.cartUpdated.next();
  }

  removeItem(item: CartItem) {
    const existingItem = this.cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
      }
    }
    this.cartUpdated.next();
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
}
