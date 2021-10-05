import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
    { 
        path: '', 
        component: ListarProductosComponent 
    },
    { 
        path: 'crear-producto', 
        component: CrearProductoComponent 
    },
    { 
        path: 'editar-producto/:id', 
        component: CrearProductoComponent 
    },
    { 
        path: '404', 
        component: Pagina404Component
    },
    { 
        path: '**', 
        redirectTo: '404', 
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
