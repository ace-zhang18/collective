import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Globals } from 'src/app/utils/globals'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain'}),
  responseType: 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class UserProfileHttpService {

  constructor(private http: HttpClient) {
  }

  getProfile(id: string): Observable<string>{
    return this.http.get<string>(`${Globals.apiURL}/user/profile/${id}`, httpOptions);
  }
}
