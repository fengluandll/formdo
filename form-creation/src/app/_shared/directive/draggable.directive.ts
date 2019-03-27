import { Directive, OnDestroy, AfterViewInit, Input, ElementRef, NgZone, HostListener, HostBinding } from '@angular/core';
import { Subject, Observable, fromEvent, from } from 'rxjs';
import { switchMap, map, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[tdDraggable]'
})
export class DraggableDirective implements AfterViewInit, OnDestroy {
  @Input() dragHandle: string;
  @Input() dragTarget: string;
  @Input() dropZone: string;

  // Element to be dragged
  private target: HTMLElement;
  // Drag handle
  private handle: HTMLElement;
  private delta = { x: 0, y: 0 };
  private offset = { x: 0, y: 0 };

  private destroy$ = new Subject<void>();
  constructor(private elementRef: ElementRef, private zone: NgZone) { }

  public ngAfterViewInit(): void {
    this.handle = this.dragHandle ? document.querySelector(this.dragHandle) as HTMLElement :
      this.elementRef.nativeElement;
    // this.target = this.dragTarget ? document.querySelector(this.dragTarget) as HTMLElement :
    //   this.elementRef.nativeElement;
    this.setupAttributeDrag();
    // this.setupEvents();
    this.setupEventDrag();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  private setupEvents() {
    this.zone.runOutsideAngular(() => {
      let mousedown$ = fromEvent(this.handle, 'mousedown');
      let mousemove$ = fromEvent(document, 'mousemove');
      let mouseup$ = fromEvent(document, 'mouseup');

      let mousedrag$ = mousedown$.pipe(switchMap((event: MouseEvent) => {
        let startX = event.clientX;
        let startY = event.clientY;

        return mousemove$.pipe(map((event: MouseEvent) => {
          event.preventDefault();
          this.delta = {
            x: event.clientX - startX,
            y: event.clientY - startY
          };
        })).pipe(takeUntil(mouseup$));
      })).pipe(takeUntil(this.destroy$));

      mousedrag$.subscribe(() => {
        if (this.delta.x === 0 && this.delta.y === 0) {
          return;
        }
        this.translate();
      });

      mouseup$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.offset.x += this.delta.x;
        this.offset.y += this.delta.y;
        this.delta = { x: 0, y: 0 };
      });
    });
  }

  private setupEventDrag(){
    let draggableStart = fromEvent(this.handle,'dragstart');
    let draggableEnter = fromEvent(this.handle,'dragenter');

    draggableStart.subscribe((evt: DragEvent)=>{
      evt.preventDefault();
      evt.dataTransfer.effectAllowed = 'copy';
      evt.dataTransfer.setData('text/plain',this.handle.innerHTML);
    });

    draggableEnter.subscribe((evt: DragEvent)=>{
      console.log(evt)
    });
  }

  private translate() {
    requestAnimationFrame(() => {
      this.target.style.transform = `
        translate(${this.offset.x + this.delta.x}px,
                  ${this.offset.y + this.delta.y}px)
      `;
    });
  }

  private setupAttributeDrag(){
    this.handle.setAttribute('draggable',"true");
  }
}
