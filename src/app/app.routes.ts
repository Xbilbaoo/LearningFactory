import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full'},
    { path: 'Home', component: App }
];
