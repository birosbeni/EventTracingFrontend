import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EventTracingFrontend';

  constructor(private router: Router) {}

  goToEventList(): void {
    this.router.navigateByUrl('/events');
    console.log('alsdfkj');
  }
}
