import { DraggableDirective } from './directive/draggable.directive';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

const directive = [
  DraggableDirective
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...directive],
  exports: [...directive],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
