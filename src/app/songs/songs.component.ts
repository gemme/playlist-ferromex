import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  newSong = '';
  songs = [];


  constructor(private songService: SongService) {

    this.songs = this.songService.getSongs();
   }

  ngOnInit() {
  }

  addSong(){
    console.log('AddSong');
    console.log(this.newSong);
    this.songs.push({
      name: this.newSong,
      artist: 'Jose jose',
      url: 'http://spotify.com'
    });
  }

}
