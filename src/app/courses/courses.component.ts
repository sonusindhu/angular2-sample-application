import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	courses: any;
	constructor(private myHttp: CommonService) { }

	ngOnInit() {
		this.myHttp.getCourses('courses').subscribe(
			data => {
				this.courses = data;
			}
			);
	}

}
