import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { FavoriteDirective } from './directives/favorite.directive';
import { CategoryListPipe } from './pipes/category-list.pipe';
import { MediaItemService } from './services/media-item.service';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    FavoriteDirective,
    CategoryListPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MediaItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
