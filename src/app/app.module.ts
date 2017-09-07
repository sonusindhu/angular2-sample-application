import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommonService } from './services/common.service';
import { AuthenticationService } from './services/auth.service';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { FaqComponent } from './faq/faq.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    FaqComponent,
    TestimonialsComponent,
    ContactComponent,
    CourseDetailsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [CommonService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
