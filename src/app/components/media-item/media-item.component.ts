import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MediaItem } from '../../models/media-item.model';
import { MediaItemService } from 'src/app/services/media-item.service';

@Component({
  selector: 'media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css'],
})
export class MediaItemComponent {
  @Input() mediaItem: MediaItem;

  @Output() ssRemoveMediaItem = new EventEmitter<MediaItem>();
  @Output() ssToggleFav = new EventEmitter<MediaItem>();

  onRemove(mediaItem: MediaItem) {
    this.ssRemoveMediaItem.emit(mediaItem);
  }

  onToggleFav(mediaItem: MediaItem) {
    this.ssToggleFav.emit(mediaItem);
  }
}
