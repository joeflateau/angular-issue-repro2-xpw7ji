import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnChanges,
  OnDestroy,
  EmbeddedViewRef
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { shareReplay, takeUntil, throttleTime } from 'rxjs/operators';
import { ResponsiveConfig } from '../responsive-config';

const resize = fromEvent(window, 'resize').pipe(
  shareReplay(1),
  throttleTime(50)
);

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[responsive]'
})
export class ResponsiveDirective {
  @Input() responsive: string;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private vcRef: ViewContainerRef,
    private config: ResponsiveConfig
  ) {

  }
}