import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegments) => {
      const fullPath = urlSegments.map(segment => segment.path).join('/');
      console.log('Full Path from ActivatedRoute:', fullPath);
    });

  }
  
}
