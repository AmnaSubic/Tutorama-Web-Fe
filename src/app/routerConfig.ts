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
import { AddServiceComponent } from './pages/profile/services/add-service/add-service.component';
import { AddAvailableTimeComponent } from './pages/profile/available-times/add-available-time/add-available-time.component';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { ServiceInfoComponent } from './pages/services-list/service-info/service-info.component';
import { ClassInfoComponent } from './pages/profile/classes-list/class-info/class-info.component';
import { ScheduleClassComponent } from './pages/services-list/schedule-class/schedule-class.component';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';
import {AddReviewComponent} from "./pages/add-review/add-review.component";



export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    path: 'add-service',
    component: AddServiceComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'add-available-time',
    component: AddAvailableTimeComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'services',
    component: ServicesListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'services/:id',
    component: ServiceInfoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'public-profile/:id',
    component: PublicProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'services/:id/schedule-class',
    component: ScheduleClassComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'profile/classes/:id',
    component: ClassInfoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'add-review/:id',
    component: AddReviewComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

