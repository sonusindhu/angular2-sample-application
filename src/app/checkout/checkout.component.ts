import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'
import { AuthenticationService }      from '../services/auth.service';
import {Router} from '@angular/router';
@Component({
	selector: 'app-checkout',
	providers: [AuthenticationService],
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	public loader:any = false;
	public user:any = {email:'',firstname:'',lastname:'',password:'',password_confirmation:'',terms:''};
	public errorReg:any;
	public successReg:any;

	public login_user:any = {email:'',password:''};
	public errorLog:any;
	public successLog:any;


	public payment:any = {card_name:'',card_number:'',expiry_month:'',expiry_year:'',card_cvv:''};
	public error:any;
	public success:any;

	public _cartStore: {
        cart: any
    };
	constructor(public authService: AuthenticationService, private _router:Router, private cartService:CartService) {
		this._cartStore = this.cartService.getCart();
		if(this._cartStore.cart.length===0){
			this._router.navigate(['/courses']);
		}
	}

	ngOnInit() {
	}

	signup() {
		this.errorReg = null;
		this.successReg = null;
		this.authService.signup(this.user).subscribe(
			data => {
				/*if(data.error){
					this.errorReg = data.message;
				} else{
					this.successReg = data.message;
					this.user = {email:'',firstname:'',lastname:'',password:'',password_confirmation:'',terms:''};
				}*/
			}
		);
	}


	login() {
		this.errorLog = null;
		this.successLog = null;
		this.authService.login(this.login_user).subscribe(
			data => {
				/*if(data.error){
					this.errorLog = data.message;
				} else{
					localStorage.setItem("user", JSON.stringify(data));
					window.location.href = "/checkout";
				}*/
			}
		);
	}

	checkout() {
		this.loader = true;
		this.error = null;
		this.success = null;
		this.cartService.checkout(this.payment, this.authService.current_user).subscribe(
			data => {
				this.loader = false;
				// if(data.error){
				// 	this.error = data.message;
				// } else{
				// 	localStorage.removeItem('cart');
				// 	window.location.href = "/dashboard";
				// }
			}
		);
	}	

}
