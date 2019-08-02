import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from '../service/rest-api.service';

@Component({
  selector: 'app-input-user-data-form',
  templateUrl: './input-user-data-form.component.html',
  styleUrls: ['./input-user-data-form.component.css']
})

export class InputUserDataFormComponent implements OnInit {

  registered: boolean = false;
	submitted: boolean = false;
	userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private restApi: RestApiService) { }

  invalidFirstName() {
  	return (this.submitted && this.userForm.controls.first_name.errors != null);
  }

  invalidLastName() {
  	return (this.submitted && this.userForm.controls.last_name.errors != null);
  }

  invalidEmail() {
  	return (this.submitted && this.userForm.controls.email.errors != null);
  }

  invalidZipcode() {
  	return (this.submitted && this.userForm.controls.zipcode.errors != null);
  }

  invalidPassword() {
  	return (this.submitted && this.userForm.controls.password.errors != null);
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
  		first_name: ['', Validators.required],
  		last_name: ['', Validators.required],
  		email: ['', [Validators.required, Validators.email]],
  		zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
  		password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
  	});
  }

  addCustomer() {
    let customerDetails: any = Object.assign(this.userForm.value);
    return this.restApi.createCustomer(customerDetails).subscribe((data: {}) => {
      this.router.navigate([''])
    })
  }

  onSubmit(){
  	this.submitted = true;

  	if(this.userForm.invalid == true) {
  		return;
  	}
  	else {
      this.addCustomer();
  		this.registered = true;
  	}
  }

}
