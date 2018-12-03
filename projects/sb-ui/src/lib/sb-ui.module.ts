import { DropdownModule } from './dropdown/dropdown.module';
import { NgModule } from '@angular/core';
import { SbUiComponent } from './sb-ui.component';

@NgModule({
  declarations: [SbUiComponent],
  imports: [
    DropdownModule
  ],
  exports: [SbUiComponent, DropdownModule]
})
export class SbUiModule { }
