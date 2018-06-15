import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RepertoryComponent } from './repertory/repertory.component';

import { routes } from './router';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivityService } from '../services/activity/activity.service';
import { JwtInterceptor } from '../auth/jwt.interceptor';
import { BoardModule } from '../board/board.module';

@NgModule({
  declarations: [
    RepertoryComponent,
    FormComponent
  ],
  imports: [
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    routes,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ActivityService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      }
    ],
  bootstrap: [RepertoryComponent]
})
export class ActivityModule { }
