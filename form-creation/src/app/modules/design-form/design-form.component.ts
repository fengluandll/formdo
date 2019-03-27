import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-design-form',
  templateUrl: './design-form.component.html',
  styleUrls: ['./design-form.component.scss']
})
export class DesignFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dragStartControl(evt: DragEvent, controlType) {
    evt.dataTransfer.effectAllowed = 'copy';
    evt.dataTransfer.setData('text/plain', controlType);
  }

  dropControl(evt: DragEvent){
    var data=evt.dataTransfer.getData("text/plain");
    console.log(data);
  }

  allowDrop(evt){
    evt.preventDefault();
  }
}
