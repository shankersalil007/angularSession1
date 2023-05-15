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
        year: '2008',
        category: 'MultiStar',
        isFavorite: true,
      },
      {
        name: 'CID Moosa',
        year: '2003',
        category: 'Comedy',
        isFavorite: false,
      },
    ];
  }
  title = 'first-app';
}
