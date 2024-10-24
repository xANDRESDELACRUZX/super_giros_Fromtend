import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductComponent } from './product/pages/index/main-product.component';
import { FormComponent } from './auth/components/form/form.component';
import { FormProductComponent } from './product/pages/create-update-form/form.component';

const routes: Routes = [
  { path: '', component:  FormComponent },
  { path: 'producto/lista', component: MainProductComponent },
  { path: 'producto/crear', component: FormProductComponent },
  { path: 'producto/editar/:id', component: FormProductComponent },
  /*{ path: '', redirectTo: '/ruta-default', pathMatch: 'full' },
  { path: '**', redirectTo: '/ruta-default' },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
