import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumsHttpService } from './forums-http.service'

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private http: ForumsHttpService) { }

  ngOnInit(): void {

  }
}
