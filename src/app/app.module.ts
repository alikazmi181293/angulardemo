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

const routeConfig=[ { path:'register',component: RegisterFormComponent },
                    { path:'login',component: LoginFormComponent },
                    { path:'home',component: HomeComponent,canActivate:[AuthGuard] } ];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent
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
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
