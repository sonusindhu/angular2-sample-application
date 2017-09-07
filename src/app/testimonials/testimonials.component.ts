import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'


@Component({
	selector: 'app-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
	testimonials: any;
	constructor(private myHttp: CommonService) { }

	ngOnInit() {
		this.myHttp.getDataObservable('testimonials').subscribe(
			data => {
				this.testimonials = data;
				console.log("I CANT SEE DATA HERE: ", this.testimonials);
			}
		);
	}

}
