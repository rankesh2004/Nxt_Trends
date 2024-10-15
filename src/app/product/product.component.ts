import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { PrimeDealsSectionComponent } from '../prime-deals-section/prime-deals-section.component';
import { AllProductComponent } from '../all-product/all-product.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeaderComponent, PrimeDealsSectionComponent, AllProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
  }
}
