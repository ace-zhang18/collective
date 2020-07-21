import { AppRoutingModule }     from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatListModule } from '@angular/material/list';
import { NgMarqueeModule } from 'ng-marquee';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { ForumsComponent } from './forums/forums.component';
import { ThreadsComponent } from './threads/threads.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { ShopsComponent } from './shops/shops.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    ForumsComponent,
    ThreadsComponent,
    ArtworksComponent,
    GalleriesComponent,
    ShopsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CdkScrollableModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatListModule,
    NgMarqueeModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
