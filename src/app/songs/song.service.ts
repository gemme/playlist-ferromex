import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  API_URL = environment.API_URL;

  //songs = null;
  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getSongs(nameSong){
    const SONGS_URL = `${this.API_URL}search?q=${nameSong}&type=track&market=US&limit=3&offset=0`;
    const token = this.loginService.getToken();
    return this.httpClient.get(SONGS_URL, {
        headers: new HttpHeaders({
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        })
    })
    .toPromise();
    /* return [{
      name: 'El triste 2',
      artist: 'Jose Jose',
      url: 'http://spotify.com'
    }, {
      name: 'Almohada',
      artist: 'Jose Jose',
      url: 'http://spotify.com'
    },{
      name: 'Gavilan o Paloma',
      artist: 'Jose Jose',
      url: 'http://spotify.com'
    }] */
  }
}
