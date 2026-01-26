import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { SobreNosotros } from './components/sobre-nosotros/sobre-nosotros';
import { Compra } from './components/compra/compra';
import { Formulario } from './components/formulario/formulario';

export const routes: Routes = [ 

    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: Landing },
    { path: 'About', component: SobreNosotros },
    { path: 'Buy', component: Compra },
    { path: 'Form', component: Formulario}

];
