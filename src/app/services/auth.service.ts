import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('sonupnf@gmail.com','123456'),
  new User('info@sonusindhu.com','123456')
];

@Injectable()
export class AuthenticationService {

  constructor(private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user:any){
    var authenticatedUser:any = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser);
      this._router.navigate(['dashboard']);      
      return true;
    }
    return false;

  }

  checkCredentials(){
    if (localStorage.getItem("user") === null){
      this._router.navigate(['Login']);
    }
  } 
}