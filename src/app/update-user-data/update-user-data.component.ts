import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user-data',
  templateUrl: './update-user-data.component.html',
  styleUrls: ['./update-user-data.component.css']
})
export class UpdateUserDataComponent implements OnInit {

  Customer:any = {};
  id = this.actRoute.snapshot.params['id'];

  constructor(private restApi: RestApiService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadCustomer()
  }

  loadCustomer() {
    return this.restApi.getCustomer(this.id).subscribe((data: {}) => {
      this.Customer = data;
    })
  }

  deleteCustomer() {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteCustomer(this.id).subscribe(data => {
        this.router.navigate([''])
      })
    }
  }

}
