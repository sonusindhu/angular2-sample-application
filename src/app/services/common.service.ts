import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/auth.service'

@Injectable()
export class CommonService {

	public API_ENDPOINT:any;
	constructor(private http:HttpClient, private _auth:AuthenticationService) {
		this.API_ENDPOINT = environment.API_ENDPOINT;
	}

	/**
	 * [getDataObservable description]
	 * @param {string} url [description]
	 */
	getDataObservable(url:string) {
		return this.http.get(this.API_ENDPOINT+url)
		.map(data => {
			data.json();
			return data.json();
		});
	}

	/**
	 * [getCourses description]
	 * @param {string} url [description]
	 */
	getCourses(url:string) {
		return this.http.get(this.API_ENDPOINT+url)
		.map(data => {
			data.json();
			return data.json();
		});
	}

	/**
	 * [getFaqs description]
	 * @param {string} url [description]
	 */
	getFaqs(url:string) {
		return this.http.get(this.API_ENDPOINT+url)
		.map(data => {
			data.json();
			return data.json();
		});
	}

	/**
	 * [findCourse description]
	 * @param {string} url [description]
	 */
	findCourse(url:string) {
		return this.http.get(this.API_ENDPOINT+url)
		.map(data => {
			data.json();
			return data.json();
		});
	}

	postComment(contact:any){
		
		let urlSearchParams = new URLSearchParams();
	    urlSearchParams.append('email', contact.email);
	    urlSearchParams.append('phone', contact.phone);
	    urlSearchParams.append('name', contact.name);
	    urlSearchParams.append('comment', contact.comment);
	    let body = urlSearchParams.toString()

	    // let headers = new Headers();
	    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

	    return this.http.post(this.API_ENDPOINT+'contact' , body)
		    .map(data => {
		      data.json();
		      return data.json();
	    });

	}


	/**
	 * [getEnrollments description]
	 */
	getEnrollments() {
		return this.http.get(this.API_ENDPOINT+"enrollments/"+this._auth.current_user.id+"?api_token="+this._auth.current_user.api_token)
		.map(data => {
			data.json();
			return data.json();
		});
	}


	getOrders() {
		return this.http.get(this.API_ENDPOINT+"orders/"+this._auth.current_user.id+"?api_token="+this._auth.current_user.api_token)
		.map(data => {
			data.json();
			return data.json();
		});
	}

}
