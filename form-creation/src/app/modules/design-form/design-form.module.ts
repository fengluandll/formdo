import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignFormRoutingModule } from './design-form-routing.module';
import { DesignFormComponent } from './design-form.component';

@NgModule({
  imports: [
    CommonModule,
    DesignFormRoutingModule
  ],
  declarations: [DesignFormComponent],
  exports: [DesignFormComponent]
})
export class DesignFormModule { }