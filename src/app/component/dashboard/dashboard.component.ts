import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/shared/auth.service';
// import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // user : User[] = [];


  constructor(private auth: AuthService) {
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  signout() {
    this.auth.logout();
  }
}
