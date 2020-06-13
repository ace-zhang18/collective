import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { GalleriesHttpService } from './galleries-http.service';
import { Gallery } from '../objects/gallery';
import { stringify } from 'querystring';
import { pipe, of, from, BehaviorSubject } from 'rxjs'
import { map, flatMap, mergeMap } from 'rxjs/operators'

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnInit {

  gallery: Gallery;
  fileURL = [];
  subj = new BehaviorSubject<Gallery>(null);

  constructor(private route: ActivatedRoute,
              private http: GalleriesHttpService,
              private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    of(this.route.snapshot.paramMap.get('term'))
    .pipe(
      flatMap(term => this.http.getGallery(term)),
      flatMap(gallery => {
        this.gallery = gallery;
        return from(gallery.collection)
      }),
      mergeMap(element => this.http.getThumbnail(element.toString())),
      map(data => URL.createObjectURL(data)),
      map(url => this.sanitizer.bypassSecurityTrustResourceUrl(url)),
    ).subscribe(
      sanit => {
        this.fileURL.push(sanit)
      } 
    );
  }
}
