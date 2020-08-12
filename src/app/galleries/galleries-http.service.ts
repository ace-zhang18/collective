import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Globals } from 'src/app/utils/globals'

const httpJsonOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain'}),
  responseType: 'json' as 'json'
};

const httpBlobOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain'}),
  responseType: 'blob' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class GalleriesHttpService {

  constructor(private http: HttpClient) {
  }

  getGallery(id: string): Observable<any>{
    return this.http.get<any>(`${Globals.apiURL}/galleries/${id}`, httpJsonOptions);
  }
}
