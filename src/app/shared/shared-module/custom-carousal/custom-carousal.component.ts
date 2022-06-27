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
      // url: 'https://www.sbi.co.in/documents/16012/25344824/14062022_sbi-jansamarth.jpg/f4c94acd-8254-ca90-1030-57f3f3cb9ae8?t=1655183899129',
      alt: 'cheque payments',
    },
    {
      // url: 'https://www.sbi.co.in/documents/16012/25344824/28052022_2022-May-26-5Cr-Registrations-1820x831.png/057d35f7-1e48-31b9-5639-c242d8f9bbfa?t=1653717934303',
      url: 'https://www.onlinesbi.com/sbijava/images/banner23.jpg',
      alt: 'minimum touch',
    },
    {
      // url: 'https://www.sbi.co.in/documents/16012/25344824/060422-Website+Banner_1820x831+English.jpg/c5fbe1df-dd30-15fd-889e-acf1c3ca60b2?t=1649230379281',
      url: 'https://www.onlinesbi.com/sbijava/images/banner20.jpg',
      alt: 'secure',
    },
    {
      // url: 'https://www.sbi.co.in/documents/16012/10996775/301221-internetBankingAwareness2eng.png/9b2cb1ac-ff0b-eff9-1f45-39e60a301ca6?t=1640847491800',
      url: 'https://www.onlinesbi.com/sbijava/images/banner11.jpg',
      alt: 'PSB alliance',
    },
    {
      // url: 'https://www.sbi.co.in/documents/16012/10996775/020921-Aazadi-ka-Amritmahotsav-banner-2.jpg/ba1b2e2c-bcc4-1f94-fa62-1485c00f8c78?t=1630561789191',
      url: 'https://www.onlinesbi.com/sbijava/images/banner34.jpg',
      alt: 'SBI easy rides',
    },
    {
      url: 'https://www.onlinesbi.com/sbijava/images/banner39.jpg',
      alt: 'yono business',
    },
  ];
}
