import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guards';

export const router: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full'},
    { path: 'index', component: IndexComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'board', loadChildren: 'app/board/board.module#BoardModule', canActivate : [AuthGuard]},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
