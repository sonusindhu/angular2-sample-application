import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import {CartItem} from '../model/cart-item-model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { environment } from '../../environments/environment';

const jsonHeader = new Headers();
jsonHeader.append('Content-Type', 'application/json');

@Injectable()
export class CartService {
    public cart:any;
    private _cartObserver: any;
    public _cartStore: {
        cart: any
    };
    private API_ENDPOINT:string;

    constructor(private http: Http) {
        this.createCartObserver();
        this.API_ENDPOINT = environment.API_ENDPOINT;
    }

    getCart(){
    	return this._cartStore;
    }

    createCartObserver() {
        this._cartStore = {cart: []};
        if(localStorage.getItem("cart")!==null){
        	this.cart = JSON.parse(localStorage.getItem("cart"));
        	this._cartStore = {cart: this.cart};
        }
        return this._cartStore;
    }

    getProduct(id: string) {
        return this.transact('get', this.API_ENDPOINT+'/course/find/'+id);
    }

    addItem(product: any) {
        this._cartStore.cart = this._cartStore.cart.filter(item => product.id !== item.id);
        this._cartStore.cart.push(product);
        localStorage.setItem("cart" , JSON.stringify(this._cartStore.cart));
    }

    removeItem(product: any) {
        this._cartStore.cart = this._cartStore.cart.filter(item => product.id !== item.id);
        localStorage.setItem("cart" , JSON.stringify(this._cartStore.cart));
    }

    transact(method, url, payload?) {
        if (!payload || typeof payload === 'string') {
            return this.http[method](url, payload)
            .map(res => res.json());
        } else {
            return this.http[method](url, JSON.stringify(payload), {headers: jsonHeader})
            .map(res => res.json());
        }
    }

    cartTotals() {
    	let total=0;
        this._cartStore.cart.forEach(cartItem => {
            total += cartItem.course_price;
        });
        return total;
    }

    isCart(){
        return this.cart.length;
    }

    clearCart(){
        localStorage.removeItem('cart');
        this.createCartObserver();
    }


   /**
   * [checkout description]
   * @param {any} checkout [description]
   */
   checkout(payment:any, user:any){

       let urlSearchParams = new URLSearchParams();
       urlSearchParams.append('card_name', payment.card_name);
       urlSearchParams.append('card_number', payment.card_number);
       urlSearchParams.append('expiry_month', payment.expiry_month);
       urlSearchParams.append('expiry_year', payment.expiry_year);
       urlSearchParams.append('card_cvv', payment.card_cvv);
       urlSearchParams.append('cart', JSON.stringify(this._cartStore.cart));
       urlSearchParams.append('user_id', user.id);
       let body = urlSearchParams.toString()

       let headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       return this.http.post(this.API_ENDPOINT+'checkout?api_token='+user.api_token , body , {headers:headers})
       .map(data => {
           data.json();
           return data.json();
       });

   }
}
