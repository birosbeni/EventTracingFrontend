import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/Components/events-list/events-list.component';
import { EventDetailsComponent } from './events/Components/event-details/event-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', title: 'events', component: EventsListComponent },
  {
    path: 'events/create',
    title: 'events/create',
    component: EventDetailsComponent,
  },
  {
    path: 'events/:eventId',
    title: 'event/details',
    component: EventDetailsComponent,
  },
  { path: '**', component: EventsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
