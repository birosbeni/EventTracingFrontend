import { Component, OnInit } from '@angular/core';
import { EventHeader } from '../../models/event-header.model';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';
import { EventDetails } from '../../models/event-details.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  events: EventHeader[] = [];
  displayedColumns: string[] = ['id', 'name', 'location', 'delete'];

  constructor(private _eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.getEvents();
    this._eventService.deleteEvent('5c0ae06e-1f0f-487f-8e65-6422846e8068');
  }

  getEvents() {
    this._eventService.getEvents().subscribe((resp) => {
      this.events = resp;
    });
  }

  createButtonClick() {
    this.router.navigate([`/events/create`]);
  }

  deleteButtonClick(event: EventDetails) {
    this._eventService.deleteEvent(event.id).subscribe(() => this.getEvents());
  }
}
