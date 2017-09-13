import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/auth.service'
import {CommonService} from '../services/common.service'
import {Router} from '@angular/router';

@Component({
	selector: 'app-login',
	providers: [AuthenticationService],
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public user:any = { email:'',password:''};
    public errorMsg:string = '';

	constructor(
		private _service:AuthenticationService, 
		private CommonService:CommonService, 
		private _router:Router
	) { }

	ngOnInit() {
		
	}

	login() {
		this._service.login(this.user).subscribe(
			data => {
				if(data.error){
		        	this.errorMsg = 'Invalid email/password combination.';
				} else{
		        	localStorage.setItem("user", JSON.stringify(data));
		        	//this._router.navigate(['/dashboard']);
		        	window.location.href = "/dashboard"
		        }
			}
		);
    }

}
