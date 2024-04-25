import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {WelcomeComponent} from "./welcome/welcome.component";

export const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
];
