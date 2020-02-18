import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { InfoComponent } from './home/info/info.component';
import { ContactComponent } from './home/contact/contact.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';
import { OpenNavDirective } from './directives/open-nav.directive';
import { CloseNavDirective } from './directives/close-nav.directive';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      LayoutComponent,
      FooterComponent,
      WelcomeComponent,
      InfoComponent,
      ContactComponent,
      HowItWorksComponent,
      OpenNavDirective,
      CloseNavDirective
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      CommonModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
