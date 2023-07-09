import { Component } from '@angular/core';
import { EventDetails } from '../../models/event-details.model';
import { EventService } from '../../service/event.service';
import { CreateEvent } from '../../models/create-event.mocel';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss'],
})
export class EventCreateComponent {
  constructor(private _eventService: EventService) {}

  addEvent(newEvent: EventDetails) {
    const event: CreateEvent = newEvent;
    this._eventService.createEvent(event);
  }
}
