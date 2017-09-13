import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service'

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	public cart:any;
    private _cartObserver: any;
    public _cartStore: {
        cart: any
    };
	public courses: any;
	constructor(public cartService:CartService) {
		this.getCart();
	}

	ngOnInit() {
	}

	getCart(){
		this._cartStore = this.cartService.getCart();
		this.cart = this._cartStore.cart;
	}

	removeItem(product:any){
		this.cartService.removeItem(product);
		this.getCart();
	}

	isCart(){
		return this.cart.length;
	}

	clearCart(){
		this.cartService.clearCart();
		this.getCart();
	}

}
