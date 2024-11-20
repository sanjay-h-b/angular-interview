import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, RouterModule],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {
    this.updateCart();
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.cartService.cartUpdated.subscribe(() => this.updateCart());
    this.updateCart();
  }

  increaseQuantity(item: CartItem) {
    this.cartService.addItem(item);
    this.updateCart();
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.removeItem(item);
    this.updateCart();
  }

  updateCart() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.calculateTotal();
  }

  calculateTotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
}
