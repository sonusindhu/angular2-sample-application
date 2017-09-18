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
	{ path: '', component: HomeComponent, pathMatch: 'full'},
	{ path: 'about', component: AboutComponent },
	{ path: 'courses', component: CoursesComponent },
	{ path: 'course/:id', component: CourseDetailsComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'testimonials', component: TestimonialsComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'notfound', component: NotfoundComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'checkout', component: CheckoutComponent },

	// user login
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: 'orders', component: OrderComponent, canActivate: [AuthGuard] },
	{ path: 'enrollments', component: EnrollmentComponent, canActivate: [AuthGuard] },

	// otherwise redirect to notfound
    { path: '**', redirectTo: 'notfound' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);