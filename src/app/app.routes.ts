import { Routes } from '@angular/router';
import { ExpedienteComponent } from './components/expediente/expediente.component';
import { ExpedienteFormComponent } from './components/expediente-form/expediente-form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    
    {
        path: 'expediente',
        component: ExpedienteComponent,
    },
    {
        path: 'expediente-form',
        component: ExpedienteFormComponent,
    },
    {
        path: 'expediente-form/:id',
        component: ExpedienteFormComponent,
    },
    {
        path:'home',
        component: HomeComponent,
    },
    
    
];
