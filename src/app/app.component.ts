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
    // this.mediaItems = this.mediaItemService.get();
    this.fetchMediaItems();
  }

  fetchMediaItems() {
    this.mediaItemService
      .fetchMediaItemsFromServer()
      .subscribe((mediaItemsFromServer) => {
        this.mediaItems = mediaItemsFromServer;
      });
  }

  onRemove(mediaItem: MediaItem) {
    this.mediaItemService.delete(mediaItem);
    this.mediaItemService
      .removeMediaItemsFromServer(mediaItem)
      .subscribe(() => {
        this.fetchMediaItems();
      });
  }

  onSSToggleFav(mediaItem: MediaItem) {
    // this.mediaItemService.toggleFav(mediaItem);
    mediaItem.isFavorite = !mediaItem.isFavorite;
    this.mediaItemService
      .updateMediaItemsFromServer(mediaItem)
      .subscribe(() => {
        this.fetchMediaItems();
      });
  }

  onRefresh() {
    this.mediaItems = this.mediaItemService.get();
  }
}
