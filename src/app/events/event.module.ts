import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { EventsListComponent } from './Components/events-list/events-list.component';
import { EventDetailsComponent } from './Components/event-details/event-details.component';
import { EventService } from './service/event.service';
import { EventCreateComponent } from './Components/event-create/event-create.component';
import { EventFormComponent } from './Components/event-form/event-form.component';

@NgModule({
  declarations: [
    EventsListComponent,
    EventDetailsComponent,
    EventCreateComponent,
    EventFormComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    NgIf,
    NgFor,
  ],
  exports: [EventsListComponent, EventDetailsComponent, MatIconModule],
  providers: [EventService],
})
export class EventModule {}
