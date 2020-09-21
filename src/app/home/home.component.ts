import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HomeHttpService } from './home-http.service'
import { ExpandAndContractAnimation } from '../utils/expand-and-contract.animation';
import { WidenAndShrinkAnimation } from '../utils/widen-and-shrink.animation';

const minWidth = 6
const minHeight = 20
const bannerWidth = 30
const bannerHeight = 20
const tableHeight = 30
const rowHeight = 10
const viewWidth = window.innerWidth/100
const viewHeight = window.innerHeight/100

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    ExpandAndContractAnimation(15, 40),
    WidenAndShrinkAnimation(30, 30),
    WidenAndShrinkAnimation(0, 26),
    WidenAndShrinkAnimation(0, 4)
  ]
})
export class HomeComponent implements OnInit {
  isOpen = false;
  panelOn = false;
  prevIndex = -1;
  currIndex = -1;
  points = "0,225 100,0 100,450"
  scrollRange = 0;

  @ViewChild('svgPointer') svgPointer;
  @ViewChild('statusScroll') statusScroll;
  @ViewChild('statusTable') statusTable;

  site_announcements = [
    {
      title:"ANNOUNCEMENT",
      body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      timestamp: Date.now()
    },
    {
      title:"ANNOUNCEMENT",
      body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      timestamp: Date.now()
    },
    {
      title:"ANNOUNCEMENT",
      body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      timestamp: Date.now()
    },
    {
      title:"ANNOUNCEMENT",
      body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      timestamp: Date.now()
    },
    {
      title:"ANNOUNCEMENT",
      body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      timestamp: Date.now()
    },  
    {
      title:"ANNOUNCEMENT",
      body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      timestamp: Date.now()
    }
  ]

  i = this.site_announcements.length;
  focus:boolean[] = new Array(this.i);

  constructor(
    private http: HomeHttpService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.points = `0,100 100,0 100,100`
  }

  ngAfterViewInit(){
    this.statusScroll.nativeElement.style.height = tableHeight + "vh"
    this.scrollRange = this.statusScroll.nativeElement.scrollHeight - this.statusScroll.nativeElement.offsetHeight

  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  showStatus(index: number, row){
    this.currIndex = index;
    if(this.prevIndex == -1){ //just started
      this.focus[index] = true;
      this.panelOn = true;
    }

    if(index == this.prevIndex){ //toggling the same button
      this.focus[index] = !this.focus[index]
      this.panelOn = !this.panelOn
    }else if(this.prevIndex >= 0){ //switching to another status
      this.focus[this.prevIndex] = false
      this.focus[index] = true
      this.panelOn = true
    }
    this.prevIndex = index
    this.updatePointer()
  }

  onLoad(preview: any){
    if (preview.offsetHeight/preview.offsetWidth > (minHeight*viewHeight)/(minWidth*viewWidth)){
      preview.style.width = "100%";
      preview.style.height = "auto";
    }else{
      preview.style.height = "100%";
      preview.style.width = "auto";
    }
  }

  loadBanner(preview: any){
    if (preview.offsetHeight/preview.offsetWidth > (bannerHeight*viewHeight)/(bannerWidth*viewWidth)){
      preview.style.width = "100%";
      preview.style.height = "auto";
    }else{
      preview.style.height = "100%";
      preview.style.width = "auto";
    }
  }

  onStatusScroll(){
    this.updatePointer()
  }

  updatePointer(){
    let indexPoint = ((this.currIndex + 0.5 ) / this.i);
    let absHeight = indexPoint * this.statusTable.nativeElement.scrollHeight / this.statusScroll.nativeElement.offsetHeight * 100;
    let percentScroll = this.statusScroll.nativeElement.scrollTop / this.scrollRange * 100

    this.points = `0,${absHeight - percentScroll} 100,0 100,100`
  }
}
