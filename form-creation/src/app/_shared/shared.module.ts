import { DraggableDirective } from './directive/draggable.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const directive = [
  DraggableDirective
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [directive]
})
export class SharedModule { }
