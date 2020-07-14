import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadsHttpService } from './threads-http.service'
import { Forum } from 'src/app/objects/forum';
import { Thread } from 'src/app/objects/thread';
import { Post } from 'src/app/objects/post';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})

export class ThreadsComponent implements OnInit {

  term: string;
  //thread_title: string;
  thread_title = 'SAMPLE TITLE'
  posts: Post[];

  constructor(private route: ActivatedRoute,
              private http: ThreadsHttpService) { }

  ngOnInit(): void {
    this.term = this.route.snapshot.paramMap.get('term');
    this.http.getThread(this.term)
    .subscribe(
      data => {
        this.thread_title = data.title;
        this.http.getPosts(this.term)
        .subscribe(
          data => {
          this.posts = data;
          }
        )
      }
    )
  }
}