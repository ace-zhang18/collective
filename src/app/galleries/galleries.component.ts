import { Component, OnInit, ViewChildren, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleriesHttpService } from './galleries-http.service';
import { map, mergeMap, flatMap, delay } from 'rxjs/operators';
import { ArtworksHttpService } from '../artworks/artworks-http.service';
import { of } from 'rxjs/internal/observable/of';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

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
  loading = false;
  load_index = 0;

  title = "SAMPLE TITLE"

  items = ['assets/100.gif', 'assets/101.gif', 'assets/102.jpg', 'assets/103.jpg', 'assets/104.gif', 'assets/105.jpg', 'assets/106.gif', 'assets/107.jpg', 'assets/108.gif', 'assets/109.jpg', 'assets/110.jpg', 'assets/111.jpg', 'assets/112.jpg', 'assets/113.jpg', 'assets/114.jpg', 'assets/115.jpg', 'assets/116.jpg', 'assets/117.jpg', 'assets/118.jpg', 'assets/119.jpg', 'assets/120.jpg', 'assets/121.jpg', 'assets/122.jpg', 'assets/123.jpg', 'assets/124.jpg', 'assets/125.jpg', 'assets/126.jpg', 'assets/127.jpg', 'assets/128.jpg', 'assets/129.jpg', 'assets/130.jpg', 'assets/131.jpg', 'assets/132.jpg', 'assets/133.jpg', 'assets/134.jpg', 'assets/135.jpg', 'assets/136.jpg', 'assets/137.jpg', 'assets/138.jpg', 'assets/139.jpg', 'assets/140.jpg', 'assets/141.jpg', 'assets/142.jpg', 'assets/143.jpg', 'assets/144.jpg', 'assets/145.jpg', 'assets/146.jpg', 'assets/147.jpg', 'assets/148.jpg', 'assets/149.jpg', 'assets/150.jpg', 'assets/151.jpg', 'assets/152.jpg'];
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
    this.initialLoad();
    /*
    of(this.route.snapshot.paramMap.get('term')).pipe(
      flatMap(term => this.http.getGallery(term)),
      flatMap(gal => gal.collection)
    ).subscribe(
      result => console.log(result)
    )
    */
  }

  initialLoad(){
    this.loading = true;
    this.transfer();
    this.loading = false;
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
    if(this.loading && this.load_index < 5){
      this.load_index += 1;
      this.transfer()
    }else{
      this.loading = false;
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
