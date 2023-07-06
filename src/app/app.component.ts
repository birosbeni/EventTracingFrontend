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
  events: string[] = [];
  opened = true;

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
