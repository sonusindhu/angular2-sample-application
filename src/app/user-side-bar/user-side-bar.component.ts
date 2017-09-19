import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit {

  constructor(public _auth: AuthenticationService) { }

  ngOnInit() {
  }

}
