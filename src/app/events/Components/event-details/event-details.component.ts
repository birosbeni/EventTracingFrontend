import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';
import { EventDetails } from '../../models/event-details.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateEvent } from '../../models/create-event.mocel';
import { IFormEventDetails } from './event-form.type';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent {
  id?: string;
  event?: EventDetails;
  date?: Date;

  eventForm = this._formBuilder.nonNullable.group<IFormEventDetails>({
    name: this._formBuilder.nonNullable.control('', Validators.required),
    location: this._formBuilder.nonNullable.control('', Validators.required),
    country: this._formBuilder.nonNullable.control('', Validators.required),
    capacity: this._formBuilder.nonNullable.control(1, [
      Validators.required,
      Validators.min(1),
    ]),
  });

  constructor(
    private _eventService: EventService,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('eventId') ?? '';
    if (this.id) {
      this._eventService.getEventById(this.id).subscribe((response) => {
        this.eventForm.patchValue({
          name: response.name,
          location: response.location,
          country: response.country,
          capacity: response.capacity,
        });
        this.date = response.creationDate;
      });
    }
  }

  submitForm() {
    const event: EventDetails = {
      id: this.id ?? '',
      name: this.eventForm.controls.name.value,
      location: this.eventForm.controls.location.value,
      country: this.eventForm.controls.country.value,
      capacity: this.eventForm.controls.capacity.value,
      creationDate: this.date ?? new Date(),
    };
    if (this.id) {
      this.updateEvent(this.id, event);
    } else {
      this.createEvent(event);
    }
  }

  createEvent(newEvent: EventDetails) {
    const event: CreateEvent = {
      capacity: newEvent.capacity,
      country: newEvent.country,
      location: newEvent.location,
      name: newEvent.name,
    };
    this._eventService
      .createEvent(event)
      .subscribe(() => this.router.navigate(['events']));
  }

  updateEvent(id: string, _event: EventDetails) {
    this._eventService
      .updateEvent(id, _event)
      .subscribe(() => this.router.navigate(['events']));
  }
}
