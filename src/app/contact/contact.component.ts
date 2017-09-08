import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'


@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public contact:any = {email:'',name:'',phone:'',comment:''};
	public errorMsg:any;
	public successMsg:any;
	constructor(private _service:CommonService) { }

	ngOnInit() {
	}

	comment() {
		this.errorMsg = null;
		this.successMsg = null;
		this._service.postComment(this.contact).subscribe(
			data => {
				if(data.error){
		        	this.errorMsg = data.message;
				} else{
		        	this.successMsg = data.message;
		        	this.contact = {email:'',name:'',phone:'',comment:''};
		        }
			}
		);
    }

}
