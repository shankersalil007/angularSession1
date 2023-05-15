import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]',
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-hover') hovering = false;

  @HostListener('mouseenter') onMouserEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouserLeave() {
    this.hovering = false;
  }

  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
