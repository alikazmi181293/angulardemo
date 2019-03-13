import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HomeComponent } from './home/home.component';
import { AccountService } from './service/account.service';
import { AuthGuard } from './auth/auth.guard';
import { CourseComponent } from './course/course.component';
import { CourseService } from './service/course.service';
import { RegisterCourseComponent } from './register-course/register-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routeConfig=[ { path:'register',component: RegisterFormComponent },
                    { path:'login',component: LoginFormComponent },
                    { path:'home',component: HomeComponent,canActivate:[AuthGuard] },
                    { path:'course/update/:id',component: UpdateCourseComponent,canActivate:[AuthGuard] },
                    { path:'course/register',component: RegisterCourseComponent,canActivate:[AuthGuard] },
                    { path:'course',component: CourseComponent,canActivate:[AuthGuard] } ];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent,
    CourseComponent,
    RegisterCourseComponent,
    UpdateCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AccountService,
    AuthGuard,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
