import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { FaqComponent } from './faq/faq.component';


import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
