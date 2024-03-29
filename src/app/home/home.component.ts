import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { HomeHttpService } from './home-http.service'
import { ExpandAndContractAnimation } from '../utils/expand-and-contract.animation';
import { WidenAndShrinkAnimation } from '../utils/widen-and-shrink.animation';

const viewWidth = window.innerWidth/100
const viewHeight = window.innerHeight/100

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    ExpandAndContractAnimation(15, 40),
    WidenAndShrinkAnimation(30, 30),
    WidenAndShrinkAnimation(0, 27),
    WidenAndShrinkAnimation(0, 3)
  ]
})
export class HomeComponent implements OnInit {
  isOpen = false;
  panelOn = false;
  prevIndex = -1;
  index = -1;
  scrollRange = 0;
  points = "0,50 100,0 100,100"

  //works properly: DO NOT TOUCh
  @ViewChild ('statusBox') statusBox;

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
    private http: HomeHttpService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(){

  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  showStatus(index: number){
    this.index = index;
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
    this.updatePoint();
    this.prevIndex = index
  }

  onStatusScroll(event){
    this.updatePoint();
  }

  onLoad(event: any){
    let preview = event.target

    if (preview.offsetHeight/preview.offsetWidth > 4/3){
      preview.style.width = "100%";
      preview.style.height = "auto";
    }else{
      preview.style.height = "100%";
      preview.style.width = "auto";
    }
  }

  loadBanner(event: any){
    let preview = event.target

    console.log(preview.offsetHeight, preview.offsetWidth, 4/15)

    if (preview.offsetHeight/preview.offsetWidth > 4/15){
      preview.style.width = "100%";
      preview.style.height = "auto";
    }else{
      preview.style.height = "100%";
      preview.style.width = "auto";
    }
  }

  updatePoint(){
    let pointTo =  (((this.index + .5)/ this.i) * this.statusBox.nativeElement.scrollHeight - this.statusBox.nativeElement.scrollTop) / this.statusBox.nativeElement.clientHeight * 100;
    this.points = `0,${pointTo} 100,0 100,100`
  }
}
