import { Component } from '@angular/core';
import { FormControl, Validators, NgControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-demo';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = '';

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  public accept(): void {
    console.log('asdf');
  }
}
