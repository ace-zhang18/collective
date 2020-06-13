import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Globals } from 'src/app/utils/globals'
import { Gallery } from '../objects/gallery';

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

  getGallery(id: string): Observable<Gallery>{
    console.log(id);
    return this.http.get<Gallery>(`${Globals.apiURL}/galleries/${id}`, httpJsonOptions);
  }

  getThumbnail(id: string): Observable<Blob>{
    console.log(id)
    return this.http.get<Blob>(`${Globals.apiURL}/galleries/thumbnails/${id}`, httpBlobOptions);
  }
}
