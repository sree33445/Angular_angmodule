import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';

@NgModule({
  declarations: [SupplierComponent],
  imports: [CommonModule,SupplierRoutingModule],
  // exports: [SupplierComponent]
})
export class SupplierModule {
  constructor() {
    console.log('Supplier loaded....');
  }
}
