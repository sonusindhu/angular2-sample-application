import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service'

@Component({
	selector: 'app-faq',
	templateUrl: './faq.component.html',
	styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

	faqs: any;
	constructor(private myHttp: CommonService) { }

	ngOnInit() {
		this.myHttp.getFaqs('faqs').subscribe(
			data => {
				this.faqs = data;
			}
		);
	}

}
