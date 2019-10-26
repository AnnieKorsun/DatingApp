import { AlertifyService } from './../services/alertify.service';
import { AuthClient } from './../client/dating-api-client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private readonly client: AuthClient, private readonly alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.client.login(this.model).subscribe(token => {
      this.alertify.success('Logged in successfully');
      if (token) {
        localStorage.setItem('token', token);
      }
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
  }
}
