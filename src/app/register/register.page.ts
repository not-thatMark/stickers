import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit { registerForm:FormGroup

  constructor(
    private authService:AuthService,
    private formBuider:FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {
    this.registerForm=this.formBuider.group ({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]

    });
  }
  register(formData)
  {
    this.authService.register(formData.email,formData.password)
    .then( (response) => {
      console.log(response); 
      //successful
      this.router.navigate(['/home']);
    })
    .catch( (error) => {
      console.log(error);
    })

  }
}
