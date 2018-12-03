import { Directive, forwardRef, HostBinding, HostListener, Inject, Attribute } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[sbDropdownToggle]'
})
export class DropdownToggleDirective {
  @HostBinding('class.dropdown-toggle') toggleClass = true;

  @HostBinding('attr.aria-haspopup') hasPopup = true;

  @HostBinding('attr.aria-expanded')
  get isExpanded() {
    return this.dropdown.isOpen();
  }

  constructor(
    @Inject(forwardRef(() => DropdownDirective)) private dropdown: DropdownDirective,
    @Attribute('id') public id: string
  ) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.dropdown.toggle();
  }
}
