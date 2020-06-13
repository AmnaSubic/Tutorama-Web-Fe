import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/home/main/main.component';
import { PopularSubjectsComponent } from './pages/home/popular-subjects/popular-subjects.component';
import { WhyTutoramaComponent} from './pages/home/why-tutorama/why-tutorama.component';
import { ContactComponent} from './pages/home/contact/contact.component';
import { appRoutes } from './routerConfig';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { OpenNavDirective } from './directives/open-nav.directive';
import { CloseNavDirective } from './directives/close-nav.directive';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ForgotPasswordResponseComponent } from './pages/forgot-password-response/forgot-password-response.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ApiService } from './services/api.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { AddServiceComponent } from './pages/profile/services/add-service/add-service.component';
import { AddAvailableTimeComponent } from './pages/profile/available-times/add-available-time/add-available-time.component';
import { ServicesListComponent } from './pages/services-list/services-list.component';
import { ServiceInfoComponent } from './pages/services-list/service-info/service-info.component';
import { ScheduleClassComponent } from './pages/services-list/schedule-class/schedule-class.component';
import { ClassesListComponent } from './pages/profile/classes-list/classes-list.component';
import { ClassInfoComponent } from './pages/profile/classes-list/class-info/class-info.component';
import { ServicesComponent } from './pages/profile/services/services.component';
import { ReviewsComponent } from './pages/profile/reviews/reviews.component';
import { ProfileInfoComponent } from './pages/profile/profile-info/profile-info.component';
import { AvailableTimesComponent } from './pages/profile/available-times/available-times.component';
import { ActiveRowInfoDirective } from './directives/active-row-info.directive';
import { ActiveRowClassesDirective } from './directives/active-row-classes.directive';
import { ActiveRowServicesDirective } from './directives/active-row-services.directive';
import { ActiveRowAtDirective } from './directives/active-row-at.directive';
import { ActiveRowReviewsDirective } from './directives/active-row-reviews.directive';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';
import { PublicReviewsComponent } from './pages/public-profile/public-reviews/public-reviews.component';
import { PublicTutorServicesComponent } from './pages/public-profile/public-tutor-services/public-tutor-services.component';
import { PublicTutorAtComponent } from './pages/public-profile/public-tutor-at/public-tutor-at.component';
import { AddReviewComponent } from './pages/add-review/add-review.component';


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
    ForgotPasswordResponseComponent,
    AddServiceComponent,
    AddAvailableTimeComponent,
    ServicesListComponent,
    ServiceInfoComponent,
    ScheduleClassComponent,
    ClassesListComponent,
    ClassInfoComponent,
    ServicesComponent,
    ReviewsComponent,
    ProfileInfoComponent,
    AvailableTimesComponent,
    ActiveRowInfoDirective,
    ActiveRowClassesDirective,
    ActiveRowServicesDirective,
    ActiveRowAtDirective,
    ActiveRowReviewsDirective,
    PublicProfileComponent,
    PublicReviewsComponent,
    PublicTutorServicesComponent,
    PublicTutorAtComponent,
    AddReviewComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [
    ApiService,
    TokenService,
    AuthService,
    AfterLoginService,
    BeforeLoginService,
    {
      provide: 'SnotifyToastConfig',
      useValue: ToastDefaults
    },
    SnotifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fab, fas, far);
  }
}
