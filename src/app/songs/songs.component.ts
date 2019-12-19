import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';


interface IResponse {
  tracks: {
    items:[];
  }
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  newSong = '';
  songs = [];


  constructor(private songService: SongService, private activatedRoute: ActivatedRoute, private loginService: LoginService, private router: Router) {

   }

  ngOnInit() {
    /* this.activatedRoute.fragment.subscribe(fragment => {
      if(fragment) {
        let f = fragment.match(/^(.*?)&/);
        let token: string = f[1].replace('access_token=', '');
        console.log(token);
        this.loginService.setToken(token);
        //this.router.navigate(['/login'])
      }
    }) */
  }

  searchSong() {
    this.songService.getSongs(this.newSong)
      .then((response: IResponse) => {
        console.log(response)
        this.songs = response.tracks.items;
      })
      .catch(error => console.log(error));
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
