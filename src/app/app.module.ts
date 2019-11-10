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
import { WelcomeComponent } from './layout/welcome/welcome.component';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      LayoutComponent,
      FooterComponent,
      WelcomeComponent
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
