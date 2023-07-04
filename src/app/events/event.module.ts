import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './Components/events-list/events-list.component';
import { EventDetailsComponent } from './Components/event-details/event-details.component';
import { EventService } from './service/event.service';

@NgModule({
  declarations: [EventsListComponent, EventDetailsComponent],
  imports: [CommonModule],
  exports: [EventsListComponent, EventDetailsComponent],
  providers: [EventService],
})
export class EventModule {}
