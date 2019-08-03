import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from '../service/rest-api.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private restApi: RestApiService) { }

  ngOnInit() {
  }

  addUser() {
    let userDetails: any = Object.assign(this.userForm.value);
    return this.restApi.createCustomer(userDetails).subscribe((data: {}) => {
      this.router.navigate(['/login'])
    })
  }

}
