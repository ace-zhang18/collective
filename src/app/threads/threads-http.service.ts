import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Globals } from 'src/app/utils/globals'
import { Thread } from '../objects/thread';
import { Post } from '../objects/post';

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

  getThread(id: string): Observable<Thread>{
    return this.http.get<Thread>(`${Globals.apiURL}/threads/${id}`, httpOptions);
  }

  getPosts(id: string): Observable<Post[]>{
    return this.http.get<Post[]>(`${Globals.apiURL}/threads/posts/${id}`, httpOptions);
  }
}
