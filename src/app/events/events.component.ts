import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ux-events',
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {
  selectedEvent: Event;
  constructor() {}
  ngOnInit() {
  }

}
