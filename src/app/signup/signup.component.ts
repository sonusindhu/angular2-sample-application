import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'
import {AuthenticationService} from '../services/auth.service'
import {Router} from '@angular/router';
@Component({
	selector: 'app-signup',
	providers: [AuthenticationService],
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	public user:any = {email:'',firstname:'',lastname:'',password:'',password_confirmation:'',terms:''};
	public errorMsg:any;
	public successMsg:any;
	constructor(private _service:AuthenticationService, private _router:Router, private CommonService:CommonService, ) { }

	ngOnInit() {
	}

	signup() {
		this.errorMsg = null;
		this.successMsg = null;
		this._service.signup(this.user).subscribe(
			data => {
				if(data.error){
					this.errorMsg = data.message;
				} else{
					this._router.navigate(['/login']);
				}
			}
		);
	}

}
