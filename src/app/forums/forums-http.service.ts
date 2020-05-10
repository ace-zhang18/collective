import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Globals } from 'src/app/utils/globals'
import { Forum } from '../objects/forum';
import { Thread } from '../objects/thread';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain'}),
  responseType: 'json' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class ForumsHttpService {

  constructor(private http: HttpClient) {
  }

  getForum(id: string): Observable<Forum>{
    return this.http.get<Forum>(`${Globals.apiURL}/forums/${id}`, httpOptions);
  }

  getSubs(id: string): Observable<Forum[]>{
    return this.http.get<Forum[]>(`${Globals.apiURL}/forums/sub/${id}`, httpOptions);
  }

  getThreads(id: string): Observable<Thread[]>{
    return this.http.get<Thread[]>(`${Globals.apiURL}/forums/threads/${id}`, httpOptions);
  }
}
