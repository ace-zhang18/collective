import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadsHttpService } from './threads-http.service'

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})

export class ThreadsComponent implements OnInit {

  thread_title = "SAMPLE TITLE"

  constructor(private route: ActivatedRoute,
              private http: ThreadsHttpService) { }

  ngOnInit(): void {
  }
}