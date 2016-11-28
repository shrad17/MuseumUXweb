import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ux-event-detail',
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  @Input() selectedEvent: Event;


  constructor() { }

  ngOnInit() {
  }

}
