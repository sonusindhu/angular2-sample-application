import { Component } from '@angular/core';
import { AuthenticationService }      from './services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	public current_user:any;

	constructor(public authService: AuthenticationService) {
		if (localStorage.getItem("user") === null){
			this.authService.isLoggedIn = false;
		}else{
			this.current_user = authService.userInfo();
			this.authService.isLoggedIn = true;
		}
	}

	logout() {
		this.authService.logout();
		this.authService.isLoggedIn = null;
	}


}
