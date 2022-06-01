import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, NgControl, FormGroup, FormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-demo';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

  disableButton = false;

  public accept(): void {

    console.log(this.emailFormControl.value);

    if (this.emailFormControl.valid && this.loginFormControl.valid){
      console.log('Login Correcto');
    }else{
      this.disableButton = true;
    }
  }
  
}
