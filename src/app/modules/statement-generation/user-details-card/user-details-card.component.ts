import { Component, OnInit } from '@angular/core';
import { FakeUserImageService } from 'src/app/services/fake-user-image/fake-user-image.service';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.css'],
})
export class UserDetailsCardComponent implements OnInit {
  fakeUserImageUrl!: string;

  constructor(private fakeUserService: FakeUserImageService) {}

  ngOnInit(): void {
    this.fakeUserService.fetchFakeUser().subscribe({
      next: (data: any) => {
        const { image_url } = data;
        this.fakeUserImageUrl = image_url;
      },
      error: (error) => console.log({ error }),
    });
  }
}
