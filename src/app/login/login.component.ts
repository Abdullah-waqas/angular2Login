import { CanActivateAuthGuardService } from './../can-activate-auth-guard.service';
import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cred: any = {
    email: '',
    password: '',
  }
  constructor(private _canActivate: CanActivateAuthGuardService,private _userAuthService: UserAuthService, private router: Router) {
    if(this._canActivate.canActivate()){
      this.router.navigateByUrl('/welcome');
    }
  }

  onLogin() {
    var resp = this._userAuthService.userLogin(this.cred).subscribe( (user) => {
      console.log(user);
      localStorage.setItem('token', user.token);
      // this.router.navigate('welcome');
      this.router.navigateByUrl('/welcome')

    });
  }
  ngOnInit() {
  }

}
