import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  API_URL = environment.API_URL;
  token = environment.ACCESS_TOKEN;

  //songs = null;
  constructor(private httpClient: HttpClient) { }

  getSongs(nameSong){
    const SONGS_URL = `${this.API_URL}search?q=${nameSong}&type=track&market=US&limit=3&offset=0`;
    return this.httpClient.get(SONGS_URL, {
        headers: new HttpHeaders({
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.token}`
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
