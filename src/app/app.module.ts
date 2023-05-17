import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { FavoriteDirective } from './directives/favorite.directive';
import { CategoryListPipe } from './pipes/category-list.pipe';
import { MediaItemService } from './services/media-item.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    FavoriteDirective,
    CategoryListPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MediaItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
