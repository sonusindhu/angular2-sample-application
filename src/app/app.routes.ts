import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { EnrollmentComponent } from './enrollment/enrollment.component';
import { OrderComponent } from './order/order.component';

import { AuthGuard } from './_guard/auth.service';

// Route Configuration
export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full', data:{title:'Online Course Enrollment System'}},
	{ path: 'about', component: AboutComponent , data:{title:'About Us | Online Course Enrollment System'}},
	{ path: 'courses', component: CoursesComponent , data:{title:'All Courses | Online Course Enrollment System'}},
	{ path: 'course/:id', component: CourseDetailsComponent , data:{title:'Course details | Online Course Enrollment System'}},
	{ path: 'faq', component: FaqComponent , data:{title:'Faqs | Online Course Enrollment System'}},
	{ path: 'testimonials', component: TestimonialsComponent , data:{title:'Testimonials | Online Course Enrollment System'}},
	{ path: 'contact', component: ContactComponent , data:{title:'Contact Us | Online Course Enrollment System'}},
	{ path: 'login', component: LoginComponent , data:{title:'Login | Online Course Enrollment System'}},
	{ path: 'signup', component: SignupComponent , data:{title:'Signup | Online Course Enrollment System'}},
	{ path: 'notfound', component: NotfoundComponent , data:{title:'404 Not Found'}},
	{ path: 'cart', component: CartComponent , data:{title:'My Cart | Online Course Enrollment System'}},
	{ path: 'checkout', component: CheckoutComponent , data:{title:'Checkout | Online Course Enrollment System'}},

	// user login
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] , data:{title:'Dashboard | Online Course Enrollment System'}},
	{ path: 'orders', component: OrderComponent, canActivate: [AuthGuard] , data:{title:'Orders | Online Course Enrollment System'}},
	{ path: 'enrollments', component: EnrollmentComponent, canActivate: [AuthGuard], data:{title:'Courses Enrolled | Online Course Enrollment System'} },

	// otherwise redirect to notfound
    { path: '**', redirectTo: 'notfound'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);