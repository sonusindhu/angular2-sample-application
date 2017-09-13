import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
	selector: 'app-course-details',
	templateUrl: './course-details.component.html',
	styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

	public cart:any;
    private _cartObserver: any;
    private _cartStore: {
        cart: any
    };
	public course: any;
	public id: number;
	constructor(private myHttp: CommonService,public route: ActivatedRoute, private cartService:CartService) {
		this._cartStore = cartService.getCart();
		this.cart = this._cartStore.cart;
	}

	ngOnInit() {
		this.route
	        .params
	        .subscribe(params => {
	            this.id = params['id'];
	    });

		this.myHttp.findCourse('course/find/'+this.id).subscribe(
			data => {
				this.course = data;
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
