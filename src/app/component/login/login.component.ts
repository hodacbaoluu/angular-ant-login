import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  validateForm!: FormGroup;

  submitForm(): void {
    for(const i in this.validateForm.controls){
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb:FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
      remember: [true],
    })
  }

  login(){
    if(this.email == ''){
      alert("Vui lòng nhập email")
      return;
    }

    if(this.password == ''){
      alert("Vui lòng nhập password")
      return;
    }

    this.auth.login(this.email, this.password);

  }
}
