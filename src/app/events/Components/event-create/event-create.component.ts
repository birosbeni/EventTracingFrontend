import { Component } from '@angular/core';
import { EventDetails } from '../../models/event-details.model';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss'],
})
export class EventCreateComponent {
  addEvent(newEvent: EventDetails) {
    console.log(newEvent);
  }
}
