import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'
@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

	public orders:any;
	constructor(private myHttp: CommonService) { }

	ngOnInit() {
		this.myHttp.getOrders().subscribe(
			data => {
				this.orders = data;
			}
		);
	}

}
