import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//llamada de componentes 
import { CanalPresentacionComponent } from './components/canal-presentacion/canal-presentacion.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
	{ path: '',  component: InicioComponent},
	{ path: 'cartoon-network', component: CanalPresentacionComponent},
	{ path: 'galeria-x', component: GaleriaComponent},
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
