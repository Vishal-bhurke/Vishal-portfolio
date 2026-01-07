import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProjectDetail } from './components/project-detail/project-detail';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'project/:id',
        component: ProjectDetail
    }
];
