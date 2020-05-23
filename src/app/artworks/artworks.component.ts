import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtworksHttpService } from './artworks-http.service'
import { Artwork } from '../objects/artwork';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})

export class ArtworksComponent implements OnInit {

  term: string;
  artwork: Artwork;

  constructor(private route: ActivatedRoute,
              private http: ArtworksHttpService) { }

  ngOnInit(): void {
    this.term = this.route.snapshot.paramMap.get('term');
    this.http.getArtwork(this.term)
    .subscribe(
      data => {
        this.artwork = data;
      }
    )
  }
}
