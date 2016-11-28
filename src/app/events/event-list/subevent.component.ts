import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ux-subevent',
  templateUrl: './subevent.component.html',
})
export class SubeventComponent implements OnInit {
  @Input() event: Event;
  eventId: number;
  constructor() { }

  ngOnInit() {
  }

}
