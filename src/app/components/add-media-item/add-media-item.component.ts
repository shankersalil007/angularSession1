import { Component, OnInit } from '@angular/core';
import { MediaItem } from 'src/app/models/media-item.model';
import { MediaItemService } from 'src/app/services/media-item.service';

@Component({
  selector: 'app-add-media-item',
  templateUrl: './add-media-item.component.html',
  styleUrls: ['./add-media-item.component.css'],
})
export class AddMediaItemComponent implements OnInit {
  static idGenerator: number = 100;
  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit(): void {}

  onSubmit(name, category, date: string) {
    const d = new Date(date);
    alert('' + name + category + ' ' + d.getTime());

    const newMediaItem: MediaItem = {
      id: AddMediaItemComponent.idGenerator++,
      name: name,
      category: category,
      year: d.getTime(),
      isFavorite: false,
    };

    this.mediaItemService.addMedaiItemToServer(newMediaItem).subscribe();
  }
}
