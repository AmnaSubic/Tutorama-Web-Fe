import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {WhyTutoramaComponent} from './home/why-tutorama/why-tutorama.component';
import {LayoutComponent} from './layout/layout.component';
import {PopularSubjectsComponent} from './home/popular-subjects/popular-subjects.component';
import {MainComponent} from './home/main/main.component';
import {ContactComponent} from './home/contact/contact.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FontAwesomeModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    WhyTutoramaComponent,
    LayoutComponent,
    PopularSubjectsComponent,
    MainComponent,
    ContactComponent
  ],
  exports: [LayoutComponent]
})
export class PagesModule {
  constructor() {
    library.add(fab, fas);
  }
}
