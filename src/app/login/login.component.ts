import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  isLogged = false
  user = null
  auth = {}

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['home'])
    } else {
      this.router.navigate(['login'])
    }
  }

  login(){
    this.authService.loginService(this.auth)
    .subscribe(user => {
      this.user = user
      this.isLogged = true
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['home']);
    })
  }

}
