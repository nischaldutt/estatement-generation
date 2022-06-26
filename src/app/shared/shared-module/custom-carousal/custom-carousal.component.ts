import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-carousal',
  templateUrl: './custom-carousal.component.html',
  styleUrls: ['./custom-carousal.component.css'],
  providers: [NgbCarouselConfig],
})
export class CustomCarousalComponent {
  showNavigationArrows = true;
  showNavigationIndicators = true;

  banners = [
    {
      url: 'https://www.onlinesbi.com/sbijava/images/banner22.jpg',
      alt: 'cheque payments',
    },
    {
      url: 'https://www.onlinesbi.com/sbijava/images/banner23.jpg',
      alt: 'minimum touch',
    },
    {
      url: 'https://www.onlinesbi.com/sbijava/images/banner20.jpg',
      alt: 'secure',
    },
    {
      url: 'https://www.onlinesbi.com/sbijava/images/banner11.jpg',
      alt: 'PSB alliance',
    },
    {
      url: 'https://www.onlinesbi.com/sbijava/images/banner34.jpg',
      alt: 'SBI easy rides',
    },
    {
      url: 'https://www.onlinesbi.com/sbijava/images/banner39.jpg',
      alt: 'yono business',
    },
  ];
}
