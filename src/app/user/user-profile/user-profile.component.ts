import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileHttpService } from './user-profile-http.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  html = ""

  constructor(private route: ActivatedRoute,
              private http: UserProfileHttpService) { }

  ngOnInit() {
    let term = this.route.snapshot.paramMap.get('term');
    this.http.getProfile(term)
    .subscribe(
      data => {
        this.html = data;
        console.log(this.html);
      }
    )
  }

}
