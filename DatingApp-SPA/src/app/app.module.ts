import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { API_BASE_URL, ValuesClient, AuthClient } from './client/dating-api-client';
import { environment } from '../environments/environment';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
     { provide: AuthClient, useClass: AuthClient},
     { provide: ValuesClient, useClass: ValuesClient},
     { provide: API_BASE_URL, useValue: environment.servicesUrl}
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
