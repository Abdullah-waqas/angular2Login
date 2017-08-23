import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private _userAuthService: UserAuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this._userAuthService.userLogout();
    this.router.navigateByUrl('/login')
  }

}
