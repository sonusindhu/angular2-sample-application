import { Component, OnInit } from '@angular/core';
import { AuthenticationService }      from './services/auth.service';
import { CartService } from './services/cart.service'

import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
	title = 'app';
	public current_user:any;
	public myCart:any;

	constructor(public authService: AuthenticationService, public cartService:CartService, private router: Router, private titleService: Title, private activatedRoute: ActivatedRoute) {
		if (localStorage.getItem("user") === null){
			this.authService.isLoggedIn = false;
		}else{
			this.current_user = authService.userInfo();
			this.authService.isLoggedIn = true;
		}
	}

	logout() {
		this.authService.logout();
		this.authService.isLoggedIn = null;
	}

	ngOnInit() {
		this.router.events
		.filter((event) => event instanceof NavigationEnd)
		.map(() => this.activatedRoute)
		.map((route) => {
			while (route.firstChild) route = route.firstChild;
			return route;
		})
		.filter((route) => route.outlet === 'primary')
		.mergeMap((route) => route.data)
		.subscribe((event) => this.titleService.setTitle(event['title']));
	}


}
