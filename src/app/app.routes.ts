import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { SobreNosotros } from './components/sobre-nosotros/sobre-nosotros';
import { Compra } from './components/compra/compra';
import { Login } from './components/login/login';
import { adminGuard } from './guards/admin.guard';
import { UserList } from './components/user-list/user-list';
import { UserEdit } from './components/user-edit/user-edit';
import { Formulario } from './components/formulario/formulario';

export const routes: Routes = [ 

    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: Landing },
    { path: 'About', component: SobreNosotros },
    { path: 'Buy', component: Compra },
    { path: 'Login', component: Login },
    { path: 'Formulario', component: Formulario },
    { path: 'Dashboard', component: UserList, canActivate: [adminGuard] },
    { path: 'user/edit/:id', component: UserEdit }

];
