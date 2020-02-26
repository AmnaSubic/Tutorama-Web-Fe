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
import { OpenNavDirective } from './directives/open-nav.directive';
import { CloseNavDirective } from './directives/close-nav.directive';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { MainComponent } from './home/main/main.component';
import { PopularSubjectsComponent } from './home/popular-subjects/popular-subjects.component';
import { WhyTutoramaComponent } from './home/why-tutorama/why-tutorama.component';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      LayoutComponent,
      FooterComponent,
      OpenNavDirective,
      CloseNavDirective,
      MainComponent,
      PopularSubjectsComponent,
      WhyTutoramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fab, fas);
  }
}
