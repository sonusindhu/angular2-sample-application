import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CommonService } from './services/common.service';
import { AuthenticationService } from './services/auth.service';
import { AuthGuard } from './_guard/auth.service';
import { CartService } from './services/cart.service';
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
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { UserSideBarComponent } from './user-side-bar/user-side-bar.component';


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
    SignupComponent,
    NotfoundComponent,
    DashboardComponent,
    CartComponent,
    CheckoutComponent,
    OrderComponent,
    EnrollmentComponent,
    UserSideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [CommonService,AuthenticationService,AuthGuard,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
