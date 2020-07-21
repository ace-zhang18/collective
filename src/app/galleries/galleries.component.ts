import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleriesHttpService } from './galleries-http.service';

const minWidth = 160
const minHeight = 220

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css'],
  styles: [
    `
      td {
        border: 1px solid white;
        min-width: ${minWidth};
        min-height: ${minHeight};
        object-fit: contain;
      }
    `
  ]
})
export class GalleriesComponent implements OnInit {
  @ViewChildren('preview') prev_cells;

  

  item = "assets/5.jpg";
  column1 = [];
  column2 = [];
  column3 = ['assets/5.jpg'];

  constructor(private route: ActivatedRoute,
              private http: GalleriesHttpService) { }
        

  ngOnInit(): void {    
    `
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
    `
  }
  
  onLoad(preview: any) {
    preview.style.overflow = "hidden"
    let ratio = minHeight/minWidth
    if((preview.height/preview.width) > ratio){
      preview.style.width = '160px';
    }else{
      preview.style.height = '220px';
    }

  }
}
