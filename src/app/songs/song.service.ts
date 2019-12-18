import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  //songs = null;
  constructor(private httpClient: HttpClient) { }

  getSongs(nameSong){
    const API_URL = `https://api.spotify.com/v1/search?q=${nameSong}&type=track&market=US&limit=3&offset=0`;
    const token = 'BQAVMOjlkR56AAdQFA0I0Om6Ff5Vvw8nE-0jkgbAUB20RLtVpJdt05ZXsT7FdZquRbLQGVt3Pm5yDa-DcasQ0mLgz5ma47OfxliiNkfKzyNMTKiKYWwsKiYjLoxMFKHsgpqSmRHatt9mcxRaoMFQ';
    return this.httpClient.get(API_URL, {
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
