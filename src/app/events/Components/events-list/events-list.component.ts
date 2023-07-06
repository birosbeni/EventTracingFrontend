import { Component, OnInit } from '@angular/core';
import { EventHeader } from '../../models/event-header.model';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  events: EventHeader[] = [];
  displayedColumns: string[] = ['id', 'name', 'location'];

  constructor(private _eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this._eventService.getEvents().subscribe((resp) => {
      this.events = resp;
    });
  }

  rowClick(row: EventHeader) {
    console.log(row);
  }

  createButtonClick() {
    this.router.navigate([`/events/create`]);
  }
}
