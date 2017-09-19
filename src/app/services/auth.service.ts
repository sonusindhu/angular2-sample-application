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
  public current_user:any;
  constructor(private _router: Router, private http:Http){
    this.API_ENDPOINT = environment.API_ENDPOINT;
    if(this.userInfo()){
      this.isLoggedIn = true;
      this.current_user = this.userInfo();
    }
  }

  logout() {

    localStorage.removeItem("user");
    window.location.href = "/login";
    //this._router.navigate(['login']);
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

  /**
   * [signup description]
   * @param {any} user [description]
   */
  signup(user:any){

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', user.email);
    urlSearchParams.append('firstname', user.firstname);
    urlSearchParams.append('lastname', user.lastname);
    urlSearchParams.append('password', user.password);
    urlSearchParams.append('password_confirmation', user.password_confirmation);
    urlSearchParams.append('terms', user.terms);
    let body = urlSearchParams.toString()

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.API_ENDPOINT+'user/signup' , body , {headers:headers})
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

  userInfo(){
    return (localStorage.getItem("user"))? JSON.parse(localStorage.getItem("user")) : null;
  }

  

}