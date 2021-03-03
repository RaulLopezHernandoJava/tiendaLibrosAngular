
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLibroComponent } from './componentes/detalle-libro/detalle-libro.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListadoComponent } from './componentes/listado/listado.component';


const routes: Routes = [

    { path: '', component: ListadoComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'formulario/:id', component: FormularioComponent },
    { path: 'detalleLibro/:id', component:DetalleLibroComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
