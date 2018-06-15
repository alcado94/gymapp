import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { User } from '../entities/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email    : [ null, [ Validators.required ] ],
      pass: [ null, [ Validators.required ] ],
      required: [ false ]
    });
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    // tslint:disable-next-line:prefer-const
    let us = {
      email: this.validateForm.get('email').value,
      pass: this.validateForm.get('pass').value
    };

    this.loginService.login(us).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('tokenRol', res[1].nameRol);
        this.loginService.saveJwt(res[0]);
        this.router.navigate(['/board']);
      },
      err => {
        console.log(err);
        if ( err.status === 201) {
          this.loginService.saveJwt(err.error.text);
          this.router.navigate(['/board']);
        }
      }
    );
  }

}
