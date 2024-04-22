import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'bienvenida',
        loadComponent: () => import ('./components/bienvenida/bienvenida.component'),     
    },
    {
        path: 'login',
        loadComponent: () => import ('./components/login/login.component'), 
    },
    {
        // para evitar el default
        path:'error',
        loadComponent: () => import ('./components/error/error.component')
        .then((m)=> m.ErrorComponent), 
    },
    {
        path : "",
        loadComponent: () => import ('./components/bienvenida/bienvenida.component'),  
    },
    {
        path : '**',
        redirectTo: 'bienvenida'
    }
];
