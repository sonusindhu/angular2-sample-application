import { Component, OnInit } from '@angular/core';
import { AuthenticationService }      from '../services/auth.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public current_user:any;
	constructor(private _servics: AuthenticationService) { 
		this.current_user = _servics.userInfo();
	}

	ngOnInit() {

	}

}
