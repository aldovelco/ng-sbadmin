import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface TimelineItem {
  title: string;
  body: string;
  badge: string;
  status?: string;
}

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineItemComponent implements OnInit {
  @Input() inverted = false;
  @Input() item: TimelineItem = {
    title: '',
    badge: '',
    status: 'secondary',
    body: ''
  };

  constructor() {}

  ngOnInit() {}
}
