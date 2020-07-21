import { Component, OnInit } from '@angular/core';
import { HomeHttpService } from './home-http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status = ["finished a new project", "stated a new project", "got my supplies today!", "got accepted to an art school!", "gonna start working on my project soon!"]
  
  constructor(
    private http: HomeHttpService
  ) { }

  ngOnInit() {

  }

}
