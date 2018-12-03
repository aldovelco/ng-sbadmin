import { Directive, forwardRef, HostBinding, Inject } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[sbDropdownMenu]'
})
export class DropdownMenuDirective {
  @HostBinding('class.dropdown-menu') dropdownMenuClass = true;

  @HostBinding('class.show')
  get isOpen() {
    return this.dropdown.isOpen();
  }

  constructor(@Inject(forwardRef(() => DropdownDirective)) private dropdown: DropdownDirective) {}
}
