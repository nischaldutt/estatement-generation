import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'estatement-generation';
  btnText = 'Sign Up';

  constructor(private router: Router, private location: Location) {
    router.events.subscribe((val) => {
      if (location.path() != '/login') {
        this.btnText = 'Logout';
      } else {
        this.btnText = 'Sign Up';
      }
    });
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: Event) {
    // event.stopPropagation();
    // event.preventDefault();
  }
}
