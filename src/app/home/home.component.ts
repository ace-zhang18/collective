import { Component, OnInit } from '@angular/core';
import { HomeHttpService } from './home-http.service'
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HomeHttpService,
    private ng2ImgMax: Ng2ImgMaxService
  ) { }

  ngOnInit() {

  }

}
