import { Component, OnInit } from '@angular/core';
import { MediaItem } from './models/media-item.model';
import { MediaItemService } from './services/media-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  mediaItems: MediaItem[];
  constructor(private mediaItemService: MediaItemService) {}
  ngOnInit(): void {
    this.mediaItems = this.mediaItemService.get();
  }
}
