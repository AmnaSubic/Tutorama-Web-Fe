import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './pages/header/header.component';
import {FooterComponent} from './pages/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {MainComponent} from './pages/home/main/main.component';
import {PopularSubjectsComponent} from './pages/home/popular-subjects/popular-subjects.component';
import {WhyTutoramaComponent} from './pages/home/why-tutorama/why-tutorama.component';
import {ContactComponent} from './pages/home/contact/contact.component';
import { appRoutes } from './routerConfig';
import {LayoutComponent} from './pages/layout/layout.component';
import {RegisterComponent} from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import {OpenNavDirective} from './directives/open-nav.directive';
import {CloseNavDirective} from './directives/close-nav.directive';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ForgotPasswordResponseComponent } from './pages/forgot-password-response/forgot-password-response.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    PopularSubjectsComponent,
    WhyTutoramaComponent,
    ContactComponent,
    LayoutComponent,
    RegisterComponent,
    LoginComponent,
    OpenNavDirective,
    CloseNavDirective,
    PageNotFoundComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    ForgotPasswordResponseComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fab, fas);
  }
}
