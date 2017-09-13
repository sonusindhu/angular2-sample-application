import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'
import { CartService } from '../services/cart.service';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
	public cart:any;
    private _cartObserver: any;
    private _cartStore: {
        cart: any
    };
	public courses: any;
	constructor(private myHttp: CommonService, private cartService:CartService) {
		this._cartStore = cartService.getCart();
		this.cart = this._cartStore.cart;
	}

	ngOnInit() {
		this.myHttp.getCourses('courses').subscribe(
			data => {
				this.courses = data;
			}
		);
	}

	addItem(product: any) {
		this.cartService.addItem(product);
    }

    placeItem(product: any) {
    	
        let finePro = this._cartStore.cart.filter(item => product.id == item.id);
		return finePro.length;
    }

    removeItem(product: any) {
        this.cartService.removeItem(product);
    }

}
