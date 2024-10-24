import { NgModule } from '@angular/core';
import { MainProductComponent } from './pages/index/main-product.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormProductComponent } from './pages/create-update-form/form.component';


@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  exports: [MainProductComponent,FormProductComponent],
  declarations: [MainProductComponent,FormProductComponent],
  providers: [],
})
export class ProductModule { }
