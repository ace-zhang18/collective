import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collective';
  searching = false;

  displaySearch(){
    this.searching = true;
    document.querySelector('.input').classList.toggle('expand');
  }
}
