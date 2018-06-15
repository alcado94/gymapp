import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { RepertoryComponent } from './repertory/repertory.component';
import { FormComponent } from './form/form.component';


export const router: Routes = [
    { path: '', component: RepertoryComponent, data : {info : 'Listado Usuarios'}},
    { path: 'create', component: FormComponent, data : {info : 'Nuevo Uusario'}}
];

export const routes: ModuleWithProviders = RouterModule.forChild(router);
