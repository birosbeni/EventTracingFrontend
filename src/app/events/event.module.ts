import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { EventsListComponent } from './Components/events-list/events-list.component';
import { EventDetailsComponent } from './Components/event-details/event-details.component';
import { EventService } from './service/event.service';

@NgModule({
  declarations: [EventsListComponent, EventDetailsComponent],
  imports: [CommonModule, MatExpansionModule],
  exports: [EventsListComponent, EventDetailsComponent],
  providers: [EventService],
})
export class EventModule {}
