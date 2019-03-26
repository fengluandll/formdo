import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignFormRoutingModule } from './design-form-routing.module';
import { DesignFormComponent } from './design-form.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DesignFormRoutingModule,
    SharedModule
  ],
  declarations: [DesignFormComponent],
  exports: [DesignFormComponent]
})
export class DesignFormModule { }
