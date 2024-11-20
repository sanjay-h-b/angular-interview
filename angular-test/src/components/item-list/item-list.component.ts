import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  standalone: true,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ItemListComponent {
  searchQuery: string = '';
  items = [
    { id: 1, name: 'Burger', price: 50 },
    { id: 2, name: 'Fries', price: 30 },
    { id: 3, name: 'coca cola', price: 40 },
    { id: 4, name: 'cake', price: 80 },
    { id: 5, name: 'Soda', price: 20 },
    { id: 6, name: 'chocolate', price: 70 },
    { id: 7, name: 'pizza', price: 100 },
    { id: 8, name: 'biscuits', price: 25 },
    { id: 9, name: 'chips', price: 55 },
    { id: 10, name: 'munchurian', price: 65 },
  ];
  @Output() searchTerm: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.searchTerm.emit(this.searchQuery);
  }
  constructor(private cartService: CartService) {}

  addToCart(item: any) {
    this.cartService.addItem(item);
  }
}
