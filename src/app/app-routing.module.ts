import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children:[

       {path: '',redirectTo: '/admin',pathMatch: 'full'},

      {
        path:'admin' ,
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
