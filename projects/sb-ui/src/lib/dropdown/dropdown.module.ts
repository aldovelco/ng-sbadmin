import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownItemDirective } from './dropdown-item.directive';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { DropdownDirective } from './dropdown.directive';

const DROPDOWN_DIRECTIVES = [DropdownDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective];

@NgModule({
  imports: [CommonModule],
  declarations: DROPDOWN_DIRECTIVES,
  exports: DROPDOWN_DIRECTIVES
})
export class DropdownModule {}
