import { Component, OnInit } from '@angular/core';
import { EventHeader } from '../../models/event-header.model';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  events: EventHeader[] = [];

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this._eventService.getEvents().subscribe((resp) => {
      this.events = resp;
    });
    console.log('List: ', this.events);
  }
}
