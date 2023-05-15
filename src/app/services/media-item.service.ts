import { MediaItem } from '../models/media-item.model';

export class MediaItemService {
  mediaItems: MediaItem[] = [
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
}
