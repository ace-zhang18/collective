import { Component, OnInit } from '@angular/core';
import { EditUserProfileHttpService } from './edit-user-profile-http.service'

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  response = 'Welcome to profile editor!';

  constructor(private httpService: EditUserProfileHttpService) { }

  ngOnInit() {
  
  }

  onSubmit(data: string) {
    this.httpService.submitEdit(1, data)
    .subscribe(
      data => {
        this.response = data;
      }
    )
  }
}
