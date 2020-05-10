import { Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ForgotPasswordResponseComponent } from './pages/forgot-password-response/forgot-password-response.component';


export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'forgot-password-response',
    component: ForgotPasswordResponseComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

