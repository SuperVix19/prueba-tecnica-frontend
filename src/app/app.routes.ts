import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ListadoComponent } from './pages/listado/listado';
import { LoginComponent } from './pages/login/login';
import { SkillsComponent } from './pages/skills/skills';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'listado',
        component: ListadoComponent,
        title: 'Listado'
    },
    {
        path: 'skills',
        component: SkillsComponent,
        title: 'Skills'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
