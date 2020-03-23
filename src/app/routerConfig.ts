import { Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {StudentRegisterComponent} from './pages/register/student-register/student-register.component';
import {TutorRegisterComponent} from './pages/register/tutor-register/tutor-register.component';



export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register/student',
    component: StudentRegisterComponent
  },
  {
    path: 'register/tutor',
    component: TutorRegisterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

