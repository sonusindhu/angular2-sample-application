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
	public userData: any;

	constructor(public authService: AuthenticationService) {
		if (localStorage.getItem("user") === null){
			this.authService.isLoggedIn = false;
		}else{
			this.userData = localStorage.getItem("user");
			this.current_user = JSON.parse(this.userData);
			this.authService.isLoggedIn = true;
		}
		
	}

	logout() {
		this.authService.logout();
		this.authService.isLoggedIn = null;
	}


}
