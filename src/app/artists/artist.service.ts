import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';
@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  API_URL = environment.API_URL;
  token = null; 

  constructor(private httpClient: HttpClient, private loginService: LoginService ) {
    this.token = this.loginService.getToken();
   }

  getArtistsByName(name){
    const ARTISTS_URL = `${this.API_URL}search?q=${name}&type=artist&market=US&limit=3&offset=0`;
    return this.httpClient.get(ARTISTS_URL, {
        headers: new HttpHeaders({
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.token}`
        })
    })
    .toPromise();
  }

  getAlbumsByArtistId(id){
    const API_URL = `${this.API_URL}artists/${id}/albums?include_groups=single%2Cappears_on&market=US&limit=3&offset=0`;
    return this.httpClient.get(API_URL, {
        headers: new HttpHeaders({
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.token}`
        })
    })
    .toPromise();
  }
}
