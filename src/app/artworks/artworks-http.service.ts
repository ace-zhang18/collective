import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Globals } from 'src/app/utils/globals'
import { Artwork} from '../objects/artwork';

const httpOptions = {
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
export class ArtworksHttpService  {

  constructor(private http: HttpClient) {
  }

  getArtwork(id: string): Observable<Artwork>{
    return this.http.get<Artwork>(`${Globals.apiURL}/artworks/${id}`, httpOptions);
  }

  getArtworkFile(id: string): Observable<Blob>{
    return this.http.get<Blob>(`${Globals.apiURL}/artworks/${id}`, httpBlobOptions)
  }
}
