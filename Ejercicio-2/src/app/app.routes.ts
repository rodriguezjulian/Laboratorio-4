import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
export const routes: Routes = [
    {
        path: "",
        component : BienvenidaComponent 
    },
    {
        path: "login",
        component : LoginComponent
    },
    {
        path:"error",
        component: ErrorComponent
    },
    {
        path : "bienvenido",
        redirectTo : ""
    },
    {
        path : "bienvenida",
        redirectTo : ""
    },
    {
        path : "**",
        component: ErrorComponent
    }
];
