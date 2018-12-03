import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Overview {
  title: string;
  count: number;
  color: string;
  icon?: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input() icon: string;
  @Input() color = 'secondary';
  @Input() count = 0;
  @Output() viewDetails = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
