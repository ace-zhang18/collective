import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProfileEdit } from 'src/app/objects/profile-edit'
import { Globals } from 'src/app/utils/globals'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  responseType: 'document' as 'json'
};


@Injectable({
  providedIn: 'root'
})
export class EditUserProfileHttpService {
  
  constructor(private http: HttpClient) {
  }

  submitEdit(id: number, data: string): Observable<string>{
    let packet = new ProfileEdit;
    packet.id = id;
    packet.data = data;

    return this.http.post<string>(`${Globals.apiURL}/user/update/profile`, JSON.stringify(packet), httpOptions);
  }
}
