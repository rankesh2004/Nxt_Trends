import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username:string = ""
  password:string = ""
  errorMsg:string = ""
  isError = false

  constructor(private http:HttpClient,private router:Router){}

  ngOnInit(): void {
    try {
      const jwtToken = localStorage.getItem('jwt_token');
      console.log(jwtToken);
      if (jwtToken === null) {
        this.router.navigateByUrl('/login');
      } else {
        this.router.navigateByUrl('/');
      }
    } catch {
      console.log('localStorage is not available');
    }
  }
  

  submitForm(){
    const option:any = {
      username:this.username,
      password:this.password
    }
    this.http.post("https://apis.ccbp.in/login",JSON.stringify(option)).subscribe((res:any)=>{
      if(res){
        localStorage.setItem("jwt_token",res.jwt_token)
        this.router.navigateByUrl("/")
      }
    },(error: any) => {
      this.isError = true
      this.errorMsg = "Login failed. Please check your credentials."
    }
  )
  }
}
