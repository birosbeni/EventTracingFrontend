import { Component } from '@angular/core';
import { EventDetails } from '../../models/event-details.model';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss'],
})
export class EventCreateComponent {
  constructor(private _eventService: EventService) {}

  addEvent(newEvent: EventDetails) {
    this._eventService.createEvent(newEvent).subscribe((resp) => {
      console.log('léaksdfj');
      console.log(resp);
    });
  }
}
