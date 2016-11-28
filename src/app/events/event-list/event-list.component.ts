import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Event} from '../event';
import {SubeventComponent} from './subevent.component';

@Component({
  selector: 'ux-event-list',
  templateUrl: './event-list.component.html',
 })
export class EventListComponent implements OnInit {

  events: Event[] = []; 
  @Output() eventSelected = new EventEmitter<Event>();
  event = new Event('SampleEvent', 'SampleDetails', 'http://eventpro.com.vn/wp-content/uploads/2013/06/event-flooring-051.jpg');
  constructor() { }
  
  ngOnInit() {
  }
  onSelected(event: Event){
    this.eventSelected.emit(event);
  }
}
