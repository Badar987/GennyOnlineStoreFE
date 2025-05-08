import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  {
    path: 'Login',
    loadComponent: () =>
      import('./User/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./User/signup/signup.component').then((m) => m.SignupComponent),
  },
  { path: '**', redirectTo: 'Login' },
];
