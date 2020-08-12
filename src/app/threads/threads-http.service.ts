import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Globals } from 'src/app/utils/globals'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain'}),
  responseType: 'json' as 'json'
};
@Injectable({
  providedIn: 'root'
})
export class ThreadsHttpService {

  constructor(private http: HttpClient) {
  }

  getThread(id: string): Observable<any>{
    return this.http.get<any>(`${Globals.apiURL}/threads/${id}`, httpOptions);
  }

  getPosts(id: string): Observable<any[]>{
    return this.http.get<any[]>(`${Globals.apiURL}/threads/posts/${id}`, httpOptions);
  }
}
