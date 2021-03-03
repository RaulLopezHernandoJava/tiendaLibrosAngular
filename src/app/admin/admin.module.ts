import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './componentes/listado/listado.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { DetalleLibroComponent } from './componentes/detalle-libro/detalle-libro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './../admin/admin-routing.module';
import { SharedModule } from '../shared/componentes/shared.module';





@NgModule({
  declarations: [
    ListadoComponent,
    DetalleLibroComponent,
    FormularioComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
