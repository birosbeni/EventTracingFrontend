import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';
import { EventDetails } from '../../models/event-details.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent {
  id: string;
  constructor(
    private _eventService: EventService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('eventId') ?? '';
  }

  updateEvent(newEvent: EventDetails) {
    this._eventService.updateEvent(this.id, newEvent).subscribe((resp) => {
      console.log('léaksdfj');
      console.log(resp);
    });
  }
}
