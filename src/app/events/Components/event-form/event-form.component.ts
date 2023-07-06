import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IFormEventDetails } from './event-form.type';
import { EventDetails } from '../../models/event-details.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent {
  @Output() newEvent = new EventEmitter<EventDetails>();

  eventForm = this._formBuilder.nonNullable.group<IFormEventDetails>({
    id: this._formBuilder.nonNullable.control('', Validators.required),
    name: this._formBuilder.nonNullable.control('', Validators.required),
    location: this._formBuilder.nonNullable.control('', Validators.required),
    country: this._formBuilder.nonNullable.control('', Validators.required),
    capacity: this._formBuilder.nonNullable.control(1, [
      Validators.required,
      Validators.min(1),
    ]),
  });

  constructor(private _formBuilder: FormBuilder) {}

  createEvent() {
    const event: EventDetails = {
      id: this.eventForm.controls.id.value,
      name: this.eventForm.controls.name.value,
      location: this.eventForm.controls.location.value,
      country: this.eventForm.controls.country.value,
      capacity: this.eventForm.controls.capacity.value,
      creationDate: new Date(),
    };
    this.newEvent.emit(event);
  }
}
