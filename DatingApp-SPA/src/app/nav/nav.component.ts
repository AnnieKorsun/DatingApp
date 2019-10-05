import { AuthClient } from './../client/dating-api-client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private readonly client: AuthClient) { }

  ngOnInit() {
  }

  login() {
    this.client.login(this.model).subscribe(token => {
      console.log('Logged in successfully');
      if (token) {
        localStorage.setItem('token', token);
      }
    }, error => {
      console.log('Failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}
