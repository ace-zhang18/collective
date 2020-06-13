import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtworksHttpService } from './artworks-http.service'
import { Artwork } from '../objects/artwork';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})

export class ArtworksComponent implements OnInit {

  term: string;
  artwork: Artwork;
  fileURL;

  constructor(private route: ActivatedRoute,
              private http: ArtworksHttpService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.term = this.route.snapshot.paramMap.get('term');
    this.http.getArtwork(this.term)
    .subscribe(
      data => {
        this.artwork = data;
        this.http.getArtworkFile(this.term)
        .subscribe(
          data=>{
            this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(data));
          }
        )
      }
    )
  }
}
