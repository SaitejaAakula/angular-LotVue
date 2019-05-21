import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})


export class LoginComponent  {

    usr: string = 'lotvue';
    pwd: string = 'lotvue@123';
    errormessage: string;
    errorMsg: boolean = false;
  username = new FormControl('', [Validators.required, Validators.minLength(4)] );
  password = new FormControl('', [Validators.required, Validators.minLength(4)] );
  constructor(private router: Router){
  
  }
  NoSpace(event) {
    if (event.keyCode == 32) return false;
  }
  loginCheck(){
    console.log('logins: ', this.username.value, this.usr, this.password.value, this.pwd);
    if(this.username.value == this.usr && this.password.value == this.pwd ){
      localStorage.setItem('userId', this.usr);
      this.router.navigateByUrl('dashboard');
    }
    else{
      this.errormessage = "User Name / Password entered or not valid";
      this.errorMsg = true;
    }
  }

}
