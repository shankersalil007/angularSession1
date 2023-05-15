import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';
import { MediaItem } from '../models/media-item.model';

@Pipe({
  name: 'categoryList',
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems: MediaItem[]) {
    const categories = [];
    mediaItems.forEach((mediaItem) => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}
