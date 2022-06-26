import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'estatement-generation';

  constructor(private router: Router, private _location: PlatformLocation) {}
  @HostListener('window:popstate', ['$event'])
  onPopState(event: Event) {
    // event.stopPropagation();
    // event.preventDefault();
  }
}
