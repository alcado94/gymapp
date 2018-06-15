import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { ActivityService } from './services/activity/activity.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ActivitiesComponent } from './activities/activities.component';
import { IndexComponent } from './index/index.component';
import { routes } from './router';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login/login.service';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { AuthGuard } from './auth/auth.guards';
import { UserLoggedDirective } from './auth/userLogged.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ActivitiesComponent,
    IndexComponent,
    LoginComponent,
    UserLoggedDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    routes,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ActivityService,
    AuthGuard,
    LoginService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
