import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { PanelComponent } from './panel/panel.component';
import { OverviewComponent } from './overview/overview.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [
    ...routedComponents,
    PanelComponent,
    OverviewComponent,
    TimelineComponent,
    TimelineItemComponent,
    NotificationsComponent
  ]
})
export class DashboardModule {}
