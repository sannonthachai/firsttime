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

  registered: boolean = false;
	submitted: boolean = false;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private restApi: RestApiService) { }

  invalidEmail() {
  	return (this.submitted && this.userForm.controls.email.errors != null);
  }

  invalidUsername() {
  	return (this.submitted && this.userForm.controls.username.errors != null);
  }

  invalidPassword() {
  	return (this.submitted && this.userForm.controls.password.errors != null);
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
  		email: ['', [Validators.required, Validators.email]],
  		username: ['', Validators.required],
  		password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
  	});
  }

  addUser() {
    let userDetails: any = Object.assign(this.userForm.value);
    return this.restApi.createCustomer(userDetails).subscribe((data: {}) => {
      this.router.navigate(['/login'])
    })
  }

  onSubmit(){
  	this.submitted = true;

  	if(this.userForm.invalid == true) {
  		return;
  	}
  	else {
      this.addUser();
  		this.registered = true;
  	}
  }

}
