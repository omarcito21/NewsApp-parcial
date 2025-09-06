import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone : false,
})
export class LoginPage implements OnInit {
  public email!: FormControl;
  public password!: FormControl;
  public loginform!: FormGroup;



  constructor() { }

  ngOnInit() {}
 
  public onlogin(){
    console.log(this.loginform.value);
  }

  private initform(){
    this.email = new FormControl('', [Validators.required,Validators.email]);
    this.password = new FormControl ('', [Validators.required,Validators.minLength(5)] );
    Validators.maxLength(7),
    Validators.pattern("");
  }

}

