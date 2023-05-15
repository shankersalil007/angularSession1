import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css'],
})
export class MediaItemComponent {
  @Input() name = 'The Redumption';
  @Input() category = 'Action';
  @Input() year = '2016';

  onRemove() {
    alert('deleted');
  }
}
