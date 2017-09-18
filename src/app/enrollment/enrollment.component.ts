import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'

@Component({
	selector: 'app-enrollment',
	templateUrl: './enrollment.component.html',
	styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

	public enrollments:any;
	constructor(private myHttp: CommonService) {

	}

	ngOnInit() {
		this.myHttp.getEnrollments().subscribe(
			data => {
				this.enrollments = data;
			}
		);
	}

}
