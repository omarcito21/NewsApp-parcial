import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Storage } from 'src/app/shared/services/storage';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { IUser } from 'src/app/interfaces/user';
import { v4 } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
public name!: FormControl;
  public lastName!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public pais!: FormControl;
  public registerForm!: FormGroup;
  ngOnInit() {
    
  }
  constructor(private readonly storageSrv: Storage, private readonly router: Router) {
    this.initForm();
 }
 private initForm(){

    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
    this.pais = new FormControl('', [Validators.required]);

    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      pais: this.pais,
    });
   }
   public doRegister(){
    console.log(this.registerForm.value);
    let users = this.storageSrv.get<IUser[]>("users")
    
    if(!users){
      users = [];
    }

    const exist = users.find( (user) => user.email === this.email.value);

    if(exist){
      throw new Error('El correo ya existe')
    }
    users.push({
      uuid: v4(),
      ...this.registerForm.value
  });

    this.storageSrv.set(CONSTANTS.USER, users);
    this.registerForm.reset();
    this.router.navigate(['/'])
    
  }
}