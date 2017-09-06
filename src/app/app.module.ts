import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { FaqComponent } from './faq/faq.component';


import { routing } from './app.routes';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';

import { CommonService } from './services/common.service';
import { CourseDetailsComponent } from './course-details/course-details.component';
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
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
