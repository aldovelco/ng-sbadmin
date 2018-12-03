import { Component, OnInit } from '@angular/core';
import { TimelineItem } from '../timeline-item/timeline-item.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  items: Array<TimelineItem> = [
    {
      title: 'Lorem ipsum',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi
      provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis
      alias, officia repellendus.`,
      badge: 'fa-check'
    },
    {
      title: 'Lorem ipsum',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi
      provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis
      alias, officia repellendus.`,
      badge: 'fa-credit-card',
      status: 'warning'
    },
    {
      title: 'Lorem ipsum dolor',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi
      provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis
      alias, officia repellendus.`,
      badge: 'fa-bomb',
      status: 'danger'
    },
    {
      title: 'Lorem ipsum dolor',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi
      provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis
      alias, officia repellendus.`,
      badge: 'fa-save',
      status: 'info'
    },
    {
      title: 'Lorem ipsum dolor',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi
      provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis
      alias, officia repellendus.`,
      badge: '',
      status: 'secondary'
    },
    {
      title: 'Lorem ipsum dolor',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi
      provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis
      alias, officia repellendus.`,
      badge: 'fa-graduation-cap',
      status: 'success'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
