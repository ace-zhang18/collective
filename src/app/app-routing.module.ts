import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { ForumsComponent } from './forums/forums.component';
import { ThreadsComponent } from './threads/threads.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/profile/:term', component: UserProfileComponent },
  { path: 'user/edit', component: EditUserProfileComponent },
  { path: 'forums/:term', component: ForumsComponent },
  { path: 'threads/:term', component: ThreadsComponent },
  { path: 'artworks/:term', component: ArtworksComponent },
  { path: 'galleries/:term', component: GalleriesComponent },
  { path: 'shops/:term', component: ShopsComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
