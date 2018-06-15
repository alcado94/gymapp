import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepertoryComponent } from './repertory/repertory.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { routes } from './router';
import { UserService } from '../services/user/user.service';
import { FormComponent } from './form/form.component';
import { JwtInterceptor } from '../auth/jwt.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    ReactiveFormsModule,
    routes,
    FormsModule,
  ],
  declarations: [ RepertoryComponent, FormComponent ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class UserModule { }
