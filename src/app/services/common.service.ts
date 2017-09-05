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
			// the console.log(...) line prevents your code from working 
			// either remove it or add the line below (return ...)
			console.log("I CAN SEE DATA HERE: ", data.json());
			return data.json();
		});
	}

}
