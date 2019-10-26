import { AuthClient, UserForRegisterDto } from './../client/dating-api-client';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private readonly client: AuthClient, private readonly alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    const user = new UserForRegisterDto();
    user.username = this.model.username;
    user.password = this.model.password;

    this.client.register(user).subscribe(() => {
      this.alertify.success('Registration successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
