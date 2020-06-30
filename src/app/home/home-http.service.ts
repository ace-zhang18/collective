import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Globals } from 'src/app/utils/globals'

const httpBlobOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain'}),
  responseType: 'blob' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class HomeHttpService {

  constructor(
    private http: HttpClient
  ) { }
}
