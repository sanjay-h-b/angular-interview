import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from '../components/item-list/item-list.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CartComponent } from '../components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemListComponent, NavbarComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-test';

  onSearch(searchTerm: string) {
    console.log('Search term:', searchTerm);
  }
}
