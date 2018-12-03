import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  header$ = this.route.data.pipe(map(data => data.title));

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
