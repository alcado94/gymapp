import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';


import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BoardComponent } from './board.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ActivityModule } from '../activity/activity.module';
import { AuthGuard } from '../auth/auth.guards';
import { RolesAccessDirective } from '../auth/rolesAccess.directive';

const routes: Routes = [
  { path: '', component: BoardComponent,
    children: [
      // tslint:disable-next-line:max-line-length
      { path: 'admin/activity', loadChildren: 'app/activity/activity.module#ActivityModule', canActivate: [AuthGuard], data : {info : 'Actividades', roles: ['Admin', 'User'] } },
      // tslint:disable-next-line:max-line-length
      { path: 'admin/users', loadChildren: 'app/user/user.module#UserModule', canActivate: [AuthGuard], data : {info : 'Usuarios', roles: ['Admin'] }}
    ]
  },
];

const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    BoardComponent,
    RolesAccessDirective
  ],
  imports: [
    HttpClientModule,
    routing,
    CommonModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [ ],
  exports: [ ],
  bootstrap: [ BoardComponent ]
})
export class BoardModule { }
