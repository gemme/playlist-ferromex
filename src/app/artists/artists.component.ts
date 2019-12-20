import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit, OnDestroy {

  artist = '';

  artists = [];

  constructor(private artistService: ArtistService) {

  }

  ngOnInit() {
  //let, const, var

  }

  ngOnDestroy(): void {
  }

  searchArtist(){
    this.artistService.getArtistsByName(this.artist)
      .then((response: any) => {
        console.log(response);
        this.artists = response.artists.items;
      })
      .catch(error => console.log(error))
  }
}
