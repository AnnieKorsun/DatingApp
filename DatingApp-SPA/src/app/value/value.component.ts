import { Component, OnInit } from '@angular/core';
import { ValuesClient } from '../client/dating-api-client';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;

  constructor(private readonly client: ValuesClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.client.getValues().subscribe(response => {
      this.values = response;
    }, error => {
      console.error(error);
    });
  }
}
