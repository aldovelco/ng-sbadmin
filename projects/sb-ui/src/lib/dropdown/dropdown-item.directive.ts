import { Directive, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[sbDropdownItem]'
})
export class DropdownItemDirective {
  @HostBinding('class.dropdown-item') dropdownItemClass = true;

  @Output() clickItem = new EventEmitter<void>();

  constructor() {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    this.clickItem.emit();
  }
}
