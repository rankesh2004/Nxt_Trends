import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-empty-cart-view',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './empty-cart-view.component.html',
  styleUrl: './empty-cart-view.component.css'
})
export class EmptyCartViewComponent {

}
