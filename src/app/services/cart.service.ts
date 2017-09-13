import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import {CartItem} from '../model/cart-item-model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

const BASE_URL = 'http://localhost:9000';
const jsonHeader = new Headers();
jsonHeader.append('Content-Type', 'application/json');

@Injectable()
export class CartService {
    public cart:any;
    private _cartObserver: any;
    public _cartStore: {
        cart: any
    };

    constructor(private http: Http) {
        this.createCartObserver();
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
        return this.transact('get', 'http://sonu.pnf-sites.info/work1/public/api/course/find/'+id);
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
}
