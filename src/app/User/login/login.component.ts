import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  /**
   *
   */
  constructor() {
    // constructor code here
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted!');
  }
}
