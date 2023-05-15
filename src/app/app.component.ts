import { Component, OnInit } from '@angular/core';
import { MediaItem } from './models/media-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  mediaItems: MediaItem[];
  ngOnInit(): void {
    this.mediaItems = [
      {
        name: 'Twenty Twenty',
        year: 1210012200000,
        category: 'MultiStar',
        isFavorite: true,
      },
      {
        name: 'CID Moosa',
        year: 1050012200000,
        category: 'Comedy',
        isFavorite: false,
      },
    ];
  }
  title = 'first-app';
}
