import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/Components/events-list/events-list.component';
import { EventDetailsComponent } from './events/Components/event-details/event-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
