import { Component, OnInit, ViewChildren, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleriesHttpService } from './galleries-http.service';

const minWidth = 160
const minHeight = 0
let pageHeight = 2000

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css'],
  styles: [
    `
      td {
        min-width: ${minWidth}px;
        min-height: ${minHeight}px;
        padding-bottom: 0px;
      }
    `
  ]
})
export class GalleriesComponent implements OnInit {
  @ViewChild('gallery') gallery;

  pageHeight = window.innerHeight;
  extension = 400

  title = "SAMPLE TITLE"

  item = [
  "assets/1.gif", "assets/2.gif", "assets/3.gif", "assets/4.gif", "assets/5.gif",
  "assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg",
  "assets/6.jpg", "assets/7.jpg", "assets/8.jpg", "assets/9.jpg", "assets/10.jpg",
  "assets/11.jpg", "assets/12.jpg", "assets/13.jpg", "assets/14.jpg", "assets/15.jpg",
  "assets/16.jpg", "assets/17.jpg", "assets/18.jpg", "assets/19.jpg", "assets/20.jpg",
  "assets/21.jpg", "assets/22.jpg", "assets/23.jpg", "assets/24.jpg", "assets/25.jpg",
  "assets/26.jpg", "assets/27.jpg", "assets/28.jpg", "assets/29.jpg", "assets/30.jpg",
  "assets/31.jpg", "assets/32.jpg", "assets/33.jpg", "assets/34.jpg", "assets/35.jpg",
  "assets/36.jpg", "assets/37.jpg", "assets/38.jpg", "assets/39.jpg", "assets/40.jpg",
  "assets/41.jpg", "assets/42.jpg", "assets/43.jpg", "assets/44.jpg", "assets/45.jpg",
  "assets/46.jpg", "assets/47.jpg", "assets/48.jpg"
  ];
  column1 = [];
  height1 = 0;
  column2 = [];
  height2 = 0;
  column3 = [];
  height3 = 0;

  empty = false;

  constructor(private route: ActivatedRoute,
              private http: GalleriesHttpService) { 
                if (this.item.length <= 0){
                  this.empty = true;
                }
              }
        

  ngOnInit(): void {    
    this.transfer();
    console.log(pageHeight);
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
  
  onLoad(preview: any, index: number) {
    preview.style.overflow = "hidden"
    let ratio = minHeight/minWidth
    if((preview.height/preview.width) > ratio){
      preview.style.width = '160px';
    }else{
      //preview.style.height = '220px';
    }
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
    }
    if(this.height1 < this.pageHeight && this.height2 < this.pageHeight && this.height3 < this.pageHeight){
      this.transfer()
    }
  }

  transfer(){
    if(this.item.length > 0){
      if(this.height1 <= this.height2 && this.height1 <= this.height3){
        this.column1.push(this.item[0])
      }else if (this.height2 <= this.height3){
        this.column2.push(this.item[0])
      }else{
        this.column3.push(this.item[0])
      }
      this.item = this.item.slice(1);
    }
  }

  onScrollDown() {
    this.pageHeight += this.extension;
    this.transfer()
  }
 
  onScrollUp() {
    console.log('scrolled up!!');
  }

}
