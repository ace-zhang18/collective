import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HomeHttpService } from './home-http.service'
import { ExpandAndContractAnimation } from '../utils/expand-and-contract.animation';
import { WidenAndShrinkAnimation } from '../utils/widen-and-shrink.animation';

const minWidth = 125
const minHeight = 110
const bannerWidth = 630
const bannerHeight = 110

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    ExpandAndContractAnimation(150, 400),
    WidenAndShrinkAnimation(600, 620),
    WidenAndShrinkAnimation(0, 520),
    WidenAndShrinkAnimation(0, 100) 
  ]
})
export class HomeComponent implements OnInit {
  isOpen = false;
  panelOn = false;
  prevIndex = -1;

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

  toggle() {
    this.isOpen = !this.isOpen;
  }

  showStatus(index: number){
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
  }

  onLoad(preview: any){
    if ((preview.offsetHeight/preview.offsetWidth) > (minHeight/minWidth)){
      preview.style.width = minWidth.toString() + "px";
      preview.style.height = "auto";
    }else{
      preview.style.height = minHeight.toString() + "px";
      preview.style.width = "auto";
    }
  }

  loadBanner(preview: any){
    if ((preview.offsetHeight/preview.offsetWidth) > (bannerHeight/bannerWidth)){
      preview.style.width = bannerWidth.toString() + "px";
      preview.style.height = "auto";
    }else{
      preview.style.height = bannerHeight.toString() + "px";
      preview.style.width = "auto";
    }
  }
}
