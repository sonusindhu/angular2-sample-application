import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-course-details',
	templateUrl: './course-details.component.html',
	styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

	course: any;
	id: number;
	constructor(private myHttp: CommonService,public route: ActivatedRoute) { }

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

}
