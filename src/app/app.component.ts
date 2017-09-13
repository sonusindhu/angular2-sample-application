import { Component } from '@angular/core';
import { AuthenticationService }      from './services/auth.service';
import { CartService } from './services/cart.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	public current_user:any;
	public myCart:any;

	constructor(public authService: AuthenticationService, private cartService:CartService) {
		if (localStorage.getItem("user") === null){
			this.authService.isLoggedIn = false;
		}else{
			this.current_user = authService.userInfo();
			this.authService.isLoggedIn = true;
		}
		//this.getCart();
	}

	/*getCart(){
		let cartDetails = this.cartService.getCart();
		this.myCart = cartDetails.cart;
	}*/

	logout() {
		this.authService.logout();
		this.authService.isLoggedIn = null;
	}

	/*isCart(){
		return this.myCart.length;
	}*/


}
