import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

//share buttons
import { ShareModule } from '@ngx-share/core';
import { AboutPageComponent } from './about-page/about-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { GetInvolvedPageComponent } from './get-involved-page/get-involved-page.component';
import { SearchableAccordianComponent } from './searchable-accordian/searchable-accordian.component';
import { BannerComponent } from './banner/banner.component';
import { VideoOverlayComponent } from './video-overlay/video-overlay.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { PagePostgrowthComponent } from './page-postgrowth/page-postgrowth.component';
import { SharableImageComponent } from './sharable-image/sharable-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    FaqPageComponent,
    GetInvolvedPageComponent,
    SearchableAccordianComponent,
    BannerComponent,
    VideoOverlayComponent,
    NewsletterSignupComponent,
    PagePostgrowthComponent,
    SharableImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    ShareModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
