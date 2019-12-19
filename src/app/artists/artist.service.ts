import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  getArtistsByName(name){
    const API_URL = `https://api.spotify.com/v1/search?q=${name}&type=artist&market=US&limit=3&offset=0`;
    const token = 'BQC1VvuI4TM6cds2fv76zb8o8fGbKy0ksKSJqFgYb58PUt_IvCoOEnK4I8cHP6tioxaMlhwzfhqSB4iTj4M9-NJWnuINu7T3NH-xqXP_Rsvfkx1rvvVeQwftTuMuUmEd4htj-4B5KfdR1zhdLZEw';
    return this.httpClient.get(API_URL, {
        headers: new HttpHeaders({
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        })
    })
    .toPromise();
  }
}
