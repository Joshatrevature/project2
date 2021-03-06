import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserLogin } from 'src/app/model/user-login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new UserLogin('', '');

  message = '';

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  doLogin() {
    this.loginService.loginUser(this.user).subscribe((data) => {
      this.message = data;
      this.router.navigate(['/home']);
    });
  }

  loginSubmit(user: any) {
    this.loginService.loginUser(this.user).subscribe(
      data => {
        console.log(this.user);
        this.message = 'Login Successful';
        localStorage.setItem('username', user.username);
        localStorage.setItem('user', JSON.stringify(user));
      },

      (error) => {
        console.log(this.user);
        this.message = 'Please check your credentials';
        console.log('error');
      }
    );
  }
}
