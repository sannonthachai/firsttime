import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.css']
})
export class DisplayUserDataComponent implements OnInit {

  constructor(private restApi: RestApiService) { }

  ngOnInit() {
    return this.restApi.getCustomers().subscribe(result => {
      alert(JSON.stringify(result));
    });
  }
}
