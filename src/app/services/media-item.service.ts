import { Injectable } from '@angular/core';
import { MediaItem } from '../models/media-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  mediaItems: MediaItem[] = [];

  url = 'http://localhost:3000/mediaitems';

  constructor(private httpClient: HttpClient) {}

  fetchMediaItemsFromServer(): Observable<MediaItem[]> {
    return this.httpClient.get<MediaItem[]>(this.url);
  }

  removeMediaItemsFromServer(mediaItem: MediaItem) {
    return this.httpClient.delete(this.url + '/' + mediaItem.id);
  }

  updateMediaItemsFromServer(mediaItem: MediaItem) {
    return this.httpClient.put(this.url + '/' + mediaItem.id, mediaItem);
  }

  addMedaiItemToServer(mediaItem: MediaItem) {
    return this.httpClient.post(this.url, mediaItem);
  }

  get() {
    return this.mediaItems;
  }

  add(mediaItem: MediaItem) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem: MediaItem) {
    const index = this.mediaItems.indexOf(mediaItem);
    if (index > -1) {
      this.mediaItems.splice(index, 1);
    }
  }

  toggleFav(mediaItem: MediaItem) {
    const index = this.mediaItems.indexOf(mediaItem);
    if (index > -1) {
      this.mediaItems[index].isFavorite = !this.mediaItems[index].isFavorite;
    }
  }
}
