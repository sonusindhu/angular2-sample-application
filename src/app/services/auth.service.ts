import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthenticationService {
  public isLoggedIn:any;
  public redirectUrl:string="login";
  public API_ENDPOINT:any;
  constructor(private _router: Router, private http:Http){
    this.API_ENDPOINT = environment.API_ENDPOINT;
  }

  logout() {

    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user:any){

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', user.email);
    urlSearchParams.append('password', user.password);
    let body = urlSearchParams.toString()

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.API_ENDPOINT+'user/login' , body , {headers:headers})
    .map(data => {
      data.json();
      return data.json();
    });

  }

  checkCredentials(){
    if (localStorage.getItem("user") === null){
      this._router.navigate(['Login']);
    }
  } 

}