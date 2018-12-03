import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'sb-ui';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageComponent } from './page/page.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const components = [NavbarComponent, PageComponent, PageHeaderComponent, SidebarComponent];

@NgModule({
  imports: [CommonModule, DropdownModule, RouterModule],
  declarations: components,
  exports: components
})
export class SharedModule {}
