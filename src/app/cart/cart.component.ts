import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { EmptyCartViewComponent } from '../empty-cart-view/empty-cart-view.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, EmptyCartViewComponent, CommonModule,NgxSpinnerComponent, RouterLink, RouterLinkActive],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
   cartItemsList:any[] = []
   totalPrice:number = 0
   isGet:boolean=false

   constructor(private spinner:NgxSpinnerService){}

   ngOnInit(): void {
    this.getCartItem()
   }

   getCartItem(){
    this.spinner.show()
    setTimeout(()=>{
      this.isGet=true
      this.spinner.hide()
    },3000)
    const cartItems = localStorage.getItem("cart_items");
    this.cartItemsList = cartItems ? JSON.parse(cartItems) : [];
    const total = this.cartItemsList.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0); 

    console.log(this.cartItemsList);
    console.log("Total Price of All Items: Rs " + total + "/-");

    this.totalPrice = total;
   }

   onClickRemoveAllBtn(){
    localStorage.setItem("cart_items",JSON.stringify([]))
    this.cartItemsList=[]
   }

   onClickIncrement(itemId: number) {
    const item = this.cartItemsList.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity += 1;
    }
    localStorage.setItem("cart_items", JSON.stringify(this.cartItemsList));
    this.getCartItem()
   }

  onClickDecrement(itemId: number) {
      const item = this.cartItemsList.find(cartItem => cartItem.id === itemId);
      if (item && item.quantity > 1) {
          item.quantity -= 1;
      }
      localStorage.setItem("cart_items", JSON.stringify(this.cartItemsList));
      this.getCartItem()
  }

  onRemoveCartItem(itemId: number) {
      this.cartItemsList = this.cartItemsList.filter(cartItem => cartItem.id !== itemId);
      localStorage.setItem("cart_items", JSON.stringify(this.cartItemsList));
      this.getCartItem()
  }
}
