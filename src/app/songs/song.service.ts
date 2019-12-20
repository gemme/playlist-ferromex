import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  API_URL = environment.API_URL;
  token;

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService) {
    this.token = this.loginService.getToken();
  }

  getSongs(nameSong){
    console.log(this.API_URL);
    const SONGS_URL = `${this.API_URL}search?q=${nameSong}&type=track&market=US&limit=3&offset=0`;
    return this.httpClient.get(SONGS_URL, {
        headers: new HttpHeaders({
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.token}`
        })
    })
    .toPromise();
  }
}
