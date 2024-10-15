import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-prime-deals-section',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './prime-deals-section.component.html',
  styleUrl: './prime-deals-section.component.css'
})
export class PrimeDealsSectionComponent implements OnInit {
  productsList:any[] = []
  isFail=false

  constructor(private http:HttpClient){}

  ngOnInit(): void {  
    this.fetchProductData()
  }

  fetchProductData(){

    this.http.get('https://apis.ccbp.in/prime-deals')
    .subscribe((data:any)=>{
      this.productsList = data.prime_deals
      console.log(data)
    }, error =>{
      this.isFail=true
      console.log(error)
    })
  }
}
