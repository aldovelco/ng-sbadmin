import { Component, OnInit } from '@angular/core';
import { Overview } from '../overview/overview.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  overviews: Array<Overview> = [
    { title: 'New Comments!', count: 8, color: 'primary', icon: 'fa-comments' },
    { title: 'New Tasks!', count: 12, color: 'warning', icon: 'fa-tasks' },
    { title: 'New Orders!', count: 3, color: 'success', icon: 'fa-shopping-cart' },
    { title: 'New Tickets!', count: 10, color: 'danger', icon: 'fa-life-ring' }
  ];

  constructor() {}

  ngOnInit() {}
}
