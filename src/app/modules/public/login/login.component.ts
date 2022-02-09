import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formBuilder();
  }

  ngOnInit() {
  }

  formBuilder(): void {
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  login(): void {
    console.log(this.form.getRawValue());
  }

}
