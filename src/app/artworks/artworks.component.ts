import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtworksHttpService } from './artworks-http.service'
import { DomSanitizer } from '@angular/platform-browser'
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})

export class ArtworksComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private http: ArtworksHttpService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

  }
}