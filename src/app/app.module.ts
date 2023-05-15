import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { FavoriteDirective } from './directives/favorite.directive';

@NgModule({
  declarations: [AppComponent, MediaItemComponent, FavoriteDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
