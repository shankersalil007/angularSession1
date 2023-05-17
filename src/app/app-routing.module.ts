import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedaiItemsListComponent } from './components/medai-items-list/medai-items-list.component';
import { AddMediaItemComponent } from './components/add-media-item/add-media-item.component';

const routes: Routes = [
  { path: 'mediaItems', component: MedaiItemsListComponent },
  {
    path: 'add',
    component: AddMediaItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
