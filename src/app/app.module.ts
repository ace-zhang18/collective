import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { Ng2ImgMaxModule } from 'ng2-img-max';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { NgMarqueeModule } from 'ng-marquee';

import { Ng2ImgMaxService, ImgMaxSizeService, ImgExifService, ImgMaxPXSizeService} from 'ng2-img-max';
import { Ng2PicaService } from 'ng2-pica';



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
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    Ng2ImgMaxModule,
    CdkScrollableModule,
    NgMarqueeModule
  ],
  providers: [
    Ng2ImgMaxService,
    ImgMaxSizeService,
    ImgExifService,
    ImgMaxPXSizeService,
    Ng2PicaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
