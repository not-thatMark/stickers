import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logInForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      email: ['',[ Validators.required,Validators.email ] ],
      password: ['',[Validators.required] ]
    });
  }
  logIn( formData ){
    this.authService.logIn(formData.email,formData.password)
    .then( (response) => {
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch( (error) => { console.log(error) })
  }
}