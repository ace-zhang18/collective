import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
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

  submitEdit(id: string, data: string): Observable<string>{
    let packet = {
      'id': id,
      'data': data
    };

    return this.http.post<string>(`${Globals.apiURL}/users/update/profile`, JSON.stringify(packet), httpOptions);
  }
}
