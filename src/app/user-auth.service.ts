import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX'
import {Http , Headers ,RequestOptions } from '@angular/http'
import {Router} from '@angular/router'
import 'rxjs/add/operator/map'

@Injectable()
export class UserAuthService {
  private serverURL: string = "https://reqres.in/api/";

  constructor(private http : Http ,private router:Router){ }

  userLogin(userObj:{email: string, password: string}): Observable<any>{
    return this.http.post(this.serverURL+'login', userObj,null).map(data=> data.json())
  }

  userLogout(){
    localStorage.removeItem('token');
  }

}
