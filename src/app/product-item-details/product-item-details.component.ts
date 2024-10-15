import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-item-details',
  standalone: true,
  imports: [HeaderComponent, CommonModule, NgxSpinnerComponent],
  templateUrl: './product-item-details.component.html',
  styleUrl: './product-item-details.component.css'
})
export class ProductItemDetailsComponent {
  product:any
  quantity:number=1
  similarProducts:any[]=[]
  isFetch:boolean=false

  constructor(private http:HttpClient,private route:ActivatedRoute,private spinner: NgxSpinnerService, private router:Router){}

  ngOnInit(): void {  
    this.fetchProductData()
  }

  onIncreamentQuantity(){
    this.quantity++
  }

  onDcreamentQuantity(){
    if(this.quantity>1){
      this.quantity--
    }
  }

  onClickAddToCart() {
    const cartItemsString = localStorage.getItem("cart_items");
    const cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];

    const spreadProducts = {
        id: this.product.id,  
        title: this.product.title,
        brand: this.product.brand,
        price: this.product.price,
        image_url: this.product.image_url,
        quantity: this.quantity
    };
    const existingProductIndex = cartItems.findIndex((item:any) => item.id === spreadProducts.id);

    if (existingProductIndex !== -1) {
        cartItems[existingProductIndex].quantity += this.quantity;
    } else {
        cartItems.push(spreadProducts);
    }
    localStorage.setItem("cart_items", JSON.stringify(cartItems));
    this.router.navigateByUrl("/cart");
}


  fetchProductData(){
    this.spinner.show();
    const id = this.route.snapshot.paramMap.get('id')
    this.http.get(`https://apis.ccbp.in/products/${id}`)
    .subscribe((data:any)=>{
      this.product = data
      this.similarProducts = data.similar_products
      this.spinner.hide();
      this.isFetch=true
      console.log(this.similarProducts)
    }, error =>{
      this.spinner.hide();
      console.log(error)
    })
  }
}
