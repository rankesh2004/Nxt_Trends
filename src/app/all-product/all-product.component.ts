import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PrimeDealsSectionComponent } from '../prime-deals-section/prime-deals-section.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent, PrimeDealsSectionComponent, RouterLink, RouterLinkActive, NgxSpinnerComponent],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})

export class AllProductComponent implements OnInit {
  categoryOptions = [
    {
      name: 'Clothing',
      categoryId: '1',
    },
    {
      name: 'Electronics',
      categoryId: '2',
    },
    {
      name: 'Appliances',
      categoryId: '3',
    },
    {
      name: 'Grocery',
      categoryId: '4',
    },
    {
      name: 'Toys',
      categoryId: '5',
    },
  ]
  
  sortbyOptions = [
    {
      optionId: 'PRICE_HIGH',
      displayText: 'Price (High-Low)',
    },
    {
      optionId: 'PRICE_LOW',
      displayText: 'Price (Low-High)',
    },
  ]
  
  ratingsList = [
    {
      ratingId: '4',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
    },
    {
      ratingId: '3',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
    },
    {
      ratingId: '2',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
    },
    {
      ratingId: '1',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
    },
  ]

  productsList=[]
  activeOptionId=this.sortbyOptions[0].optionId
  activeCategoryId=''
  searchInput=''
  activeRatingId=''
  isFetch:boolean=false

  constructor(private http:HttpClient,private spinner: NgxSpinnerService){}

  ngOnInit(): void {  
    this.fetchProductData()
  }

  fetchProductData(){
    this.spinner.show();
    this.http.get(`https://apis.ccbp.in/products?sort_by=${this.activeOptionId}&category=${this.activeCategoryId}&title_search=${this.searchInput}&rating=${this.activeRatingId}`)
    .subscribe((data:any)=>{
      this.productsList = data.products
      this.spinner.hide();
      this.isFetch=true
      console.log(data.products.id)
    }, error =>{
      this.spinner.hide();
      console.log(error)
    })
  }

  clearFilters(){
    this.productsList=[]
    this.activeOptionId=this.sortbyOptions[0].optionId
    this.activeCategoryId=''
    this.searchInput=''
    this.activeRatingId=''
    this.fetchProductData()
  }
}
