import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit, OnDestroy {

  constructor(private artistService: ArtistService) {

  }

  ngOnInit() {
  //let, const, var
  this.searchArtist();

  }

  ngOnDestroy(): void {
  }

searchArtist(){
    this.artistService.getArtistsByName('Muse')
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
}
