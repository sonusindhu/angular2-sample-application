import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private dataUrl = 'http://sonu.pnf-sites.info/work1/public/api/courses';
	
	courses: any;
	constructor(private myHttp: CommonService) { }

	ngOnInit() {
		this.myHttp.getCourses(this.dataUrl).subscribe(
			data => {
				this.courses = data;
			}
		);
	}

}
