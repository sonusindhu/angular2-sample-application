import { Component, OnInit } from '@angular/core';
import {AuthenticationService, User} from '../services/auth.service'

@Component({
	selector: 'app-login',
	providers: [AuthenticationService],
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public user:any = new User('','');
    public errorMsg:string = '';

	constructor(private _service:AuthenticationService) { }

	ngOnInit() {
		
	}

	login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }

}
