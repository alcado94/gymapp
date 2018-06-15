import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { RepertoryComponent } from './repertory/repertory.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from '../auth/auth.guards';


export const router: Routes = [
    { path: '', component: RepertoryComponent, data : {info : 'Listado Actividades'}},
    { path: 'create', component: FormComponent, canActivate: [AuthGuard], data : {info : 'Nueva Actividad', roles: ['Admin']}}
];

export const routes: ModuleWithProviders = RouterModule.forChild(router);
