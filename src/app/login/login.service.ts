import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  login() {
    const CLIENT_ID = '87aac62f159046458649b84ef3e2121d';
    const SCOPES = [];
    const URL_LOGIN = `https://accounts.spotify.com/en/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(environment.REDIRECT_URI)}&scope=${SCOPES}`;

    return new Promise((resolve) => {
      resolve(URL_LOGIN);
    });
  }

  getToken(){
      return window.localStorage.getItem('ferromex::playlist::token')
  }

  setToken(token){
    window.localStorage.setItem('ferromex::playlist::token', token);
  }
}
