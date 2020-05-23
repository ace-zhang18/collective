import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumsHttpService } from './forums-http.service'
import { Forum } from '../objects/forum';
import { Thread } from '../objects/thread';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {

  term: string;
  forum: Forum;
  forum_title: string;
  subs: Forum[];
  threads: Thread[];

  constructor(private route: ActivatedRoute,
              private http: ForumsHttpService) { }

  ngOnInit(): void {
    this.term = this.route.snapshot.paramMap.get('term');
    this.http.getForum(this.term)
    .subscribe(
      data => {
        this.forum = data;
        this.forum_title = this.forum.name;
        this.http.getSubs(this.term)
        .subscribe(
          data => {
          this.subs = data;
          this.http.getThreads(this.term)
            .subscribe(
              data => {
                this.threads = data;
              }
            )
          }
        )
      }
    )
  }
}
