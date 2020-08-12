import { Component, OnInit, ViewChildren, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleriesHttpService } from './galleries-http.service';
import { map, mergeMap, flatMap } from 'rxjs/operators';
import { ArtworksHttpService } from '../artworks/artworks-http.service';
import { of } from 'rxjs/internal/observable/of';
import { DomSanitizer } from '@angular/platform-browser';

const minWidth = 19
const minHeight = 0
let pageHeight = 2000

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css'],
  styles: [
    `
      td {
        min-width: ${minWidth}vw;
        min-height: ${minHeight}vh;
        padding-bottom: 0px;
      }
    `
  ]
})
export class GalleriesComponent implements OnInit {
  @ViewChild('gallery') gallery;

  pageHeight = window.innerHeight;
  extension = 400
  scrollLock = false;

  title = "SAMPLE TITLE"

  items = ['assets/100.gif','assets/101.gif','assets/102.jpg','assets/103.jpg','assets/104.gif'];
  column1 = [];
  height1 = 0;
  column2 = [];
  height2 = 0;
  column3 = [];
  height3 = 0;
  column4 = [];
  height4 = 0;
  column5 = [];
  height5 = 0;
  
  empty = false;

  constructor(private route: ActivatedRoute,
              private http: GalleriesHttpService,
              private artHttp: ArtworksHttpService,
              private sanitizer: DomSanitizer) { 
                if (this.items.length <= 0){
                  this.empty = true;
                }
              }
        

  ngOnInit(): void {    
    this.transfer();
    of(this.route.snapshot.paramMap.get('term')).pipe(
      flatMap(term => this.http.getGallery(term)),
      flatMap(gal => gal.collection)
    ).subscribe(
      result => console.log(result)
    )
  }

  onLoad(preview: any, index: number) {
    preview.style.width = minWidth.toString() + 'vw';
    switch(index){
      case 1:
        this.height1 += preview.offsetHeight
        break;
      case 2:
        this.height2 += preview.offsetHeight
        break;
      case 3:
        this.height3 += preview.offsetHeight
        break;
      case 4:
        this.height4 += preview.offsetHeight
        break;
      case 5:
        this.height5 += preview.offsetHeight
        break;
    }
    if(this.height1 < this.pageHeight || this.height2 < this.pageHeight || this.height3 < this.pageHeight || this.height4 < this.pageHeight || this.height5 < this.pageHeight){
      this.transfer()
    }else{
      this.scrollLock = false;
    }
  }

  transfer(){
    let min = Math.min(this.height1, this.height2, this.height3, this.height4, this.height5)
    if(this.items.length > 0){
      switch(min){
        case this.height1:
          this.column1.push(this.items[0])
          break
        case this.height2:
          this.column2.push(this.items[0])
          break
        case this.height3:
          this.column3.push(this.items[0])
          break
        case this.height4:
          this.column4.push(this.items[0])
          break
        case this.height5:
          this.column5.push(this.items[0])
          break  
      }
      this.items = this.items.slice(1);
    }
  }

  onScrollDown() {
    if(!this.scrollLock){
      this.pageHeight += this.extension;
      this.scrollLock = true;
    }
    this.transfer()
  }
 
  onScrollUp() {
    console.log('scrolled up!!');
  }

}
