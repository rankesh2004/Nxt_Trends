import { Component} from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router){}

  onLogout(){
    localStorage.removeItem("jwt_token")
    this.router.navigateByUrl("/login")
  }
}
