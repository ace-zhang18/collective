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
export class ForumsHttpService {

  constructor(private http: HttpClient) {
  }

}
