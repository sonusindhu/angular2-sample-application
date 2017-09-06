import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

	constructor(private http:Http) {
		
	}

	getDataObservable(url:string) {
		return this.http.get(url)
		.map(data => {
			data.json();
			return data.json();
		});
	}

	getCourses(url:string) {
		return this.http.get(url)
		.map(data => {
			data.json();
			return data.json();
		});
	}

	findCourse(url:string) {
		return this.http.get(url)
		.map(data => {
			data.json();
			return data.json();
		});
	}

}
